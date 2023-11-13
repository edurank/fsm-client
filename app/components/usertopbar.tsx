"use client";

import styles from "./usertopbar.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Logout from "./logout";
import Link from "next/link";

interface User {
  id: Number;
  name: String;
  email: String;
  avatarUrl: String;
}

export default function UserTopbar() {
  const [tkn, setTkn] = useState<String>();
  const [count, setCount] = useState<any>(0);
  const [userInfo, setUserInfo] = useState<User>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTkn(localStorage.getItem("authToken") || "");
    }
  }, []);

  const [userData, setUserData] = useState();

  const [isProfileVisible, setIsProfileVisible] = useState<boolean>(false);

  const onLogout = () => {
    localStorage.removeItem("authToken");
  };

  const loadData = () => {
    if (count > 0) return;

    // Gambiarra
    setCount(1);
    var config = {
      url: process.env.NEXT_PUBLIC_APIURL + "/user",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tkn}`,
      },
    };

    axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  };

  const onProfileImageClick = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  loadData();

  return (
    <div className={styles.container}>
      {/* Branding area */}
      <div className="ml-5 flex">
        <span className={styles.fsmtitle}>FakeSocialMedia</span>
        <div>v1.0</div>
      </div>

      {/* Profile Area */}
      <div
        className={styles.profileContainer}
        onClick={() => {
          onProfileImageClick();
        }}
      >
        <div className="mr-5">Hello, stranger!</div>
        <div className={styles.imageContainer}></div>
      </div>

      {/* Modal Area (Profile Image Pop-up) */}
      {isProfileVisible && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <div>
              <div className={styles.modalImageContainer}></div>
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>
                  <Link href="/admin">Admin</Link>
                </li>
                <li>Settings</li>
              </ul>
              <div className={styles.modalSectionDelimiter}></div>
              <ul>
                <li
                  onClick={() => {
                    onLogout();
                  }}
                >
                  <Link href="/">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

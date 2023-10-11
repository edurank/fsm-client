"use client";

import styles from "./usertopbar.module.css";
import axios from "axios";
import { useState } from "react";
import Logout from "./logout";

export default function UserTopbar() {
  if (
    localStorage.getItem("authToken") == "" ||
    localStorage.getItem("authToken") == null
  ) {
    Logout();
  }

  const [userData, setUserData] = useState();

  const loadData = () => {
    var authToken = localStorage.getItem("authToken");

    var config = {
      url: process.env.NEXT_PUBLIC_API_USER + "/user",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    axios(config)
      .then((res) => {})
      .catch((err) => {});
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
      <div>
        <div className={styles.profileContainer}></div>
      </div>
    </div>
  );
}

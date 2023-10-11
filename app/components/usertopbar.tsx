"use client";

import styles from "./usertopbar.module.css";
import axios from "axios";
import { useState, useEffect } from 'react'; 
import Logout from "./logout";

interface User {
  id: Number,
  name: String,
  email: String,
  avatarUrl: String
}

export default function UserTopbar() {
  const [tkn, setTkn] = useState<String>();
  const [count, setCount] = useState<any>(0);
  const [userInfo, setUserInfo] = useState<User>();

  useEffect(() => {
    if(typeof window !== 'undefined')
    {
      setTkn(localStorage.getItem('authToken') || "" );
    }
  }, []);

  const [userData, setUserData] = useState();

  const loadData = () => {
    if(count > 0) return;

    setCount(1);
    var config = {
      url: process.env.NEXT_PUBLIC_API_USER + "/user",
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

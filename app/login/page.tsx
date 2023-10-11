"use client";

import { useState } from "react";
import axios from "axios";
import Toast from "../components/toast";
import styles from "./login.module.css";

function Login() {
  const [toast, setToast] = useState<any>(null);
  const [invalidAccount, setInvalidAccount] = useState<any>(null);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    setInvalidAccount(null);

    var config = {
      url: process.env.NEXT_PUBLIC_API_USER + "/login",
      method: "post",
      data: userData,
    };



      console.log("login", config);
    axios(config)
      .then((res: any) => {
        localStorage.setItem("authToken", res.data);
      })
      .catch((err: any) => {
        /*
        if (err.response.status == 401) {
          setInvalidAccount(true);
          setToast({ message: "Invalid email or password.", success: false });
        }
        */
      });
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-96 bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={onInputChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              style={{ color: "black" }}
              id="email"
              name="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              style={{ color: "black" }}
              onChange={onInputChange}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button
            onClick={onSubmit}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
            type="button"
          >
            Log In
          </button>

          {invalidAccount && (
            <div className={styles.errorMessage}>
              Invalid username or password.
            </div>
          )}
        </form>
        {toast && <Toast message="success" success={true} />}
      </div>
    </div>
  );
}

export default Login;

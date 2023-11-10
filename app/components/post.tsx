import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./post.module.css";

/*
  List<Post>

  
*/

export default function Post() {
  const [posts, setPosts] = useState<any>();
  const [token, setToken] = useState<any>();

  const getPosts = () => {
    var config = {
      url: process.env.NEXT_PUBLIC_APIURL + "/url",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((result) => {})
      .catch((error) => {});
  };

  return (
    <div>
      {/* Title */}
      <div></div>

      {/* Subtitle */}
      <div></div>

      {/* Date */}
      <div></div>

      {/* Content */}
      <div></div>

      {/* Upvotes / Share / Save */}
      <div></div>
    </div>
  );
}

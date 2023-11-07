import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./post.module.css";

export default function Post() {
  const [posts, setPosts] = useState<any>();

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

"use client";

import { useState } from "react";
import styles from "./page.module.css";
import UserTopbar from "../components/usertopbar";
import ProfileCard from "../components/profileCard";

export default function Home() {
  const [posts, setPosts] = useState<any>(null);

  return (
    <div className="block">
      <UserTopbar />
      <div className={styles.container}>
        <ProfileCard />
        <span>Conteúdo aqui</span>
      </div>
    </div>
  );
}

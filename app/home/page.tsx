"use client";

import { useState } from "react";
import styles from "./page.module.css";
import UserTopbar from "../components/usertopbar";

export default function Home() {
  const [posts, setPosts] = useState<any>(null);

  return (
    <div className="block">
      <UserTopbar />
      <div className={styles.container}>
        <span>Conteúdo aqui</span>
      </div>
    </div>
  );
}

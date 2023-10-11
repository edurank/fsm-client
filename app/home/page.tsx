import styles from "./page.module.css";
import UserTopbar from "../components/usertopbar";

export default function Home() {
  return (
    <div className="block">
      <UserTopbar />
      <div className={styles.container}>
        <span>Conteúdo aqui</span>
      </div>
    </div>
  );
}

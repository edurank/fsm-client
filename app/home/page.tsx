import styles from "./page.module.css";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className="block">
      <Sidebar />
      <div className={styles.container}>
        <span>Conteúdo aqui</span>
      </div>
    </div>
  );
}

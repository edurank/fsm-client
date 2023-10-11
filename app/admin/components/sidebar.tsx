import styles from "./sidebar.module.css";
import Link from "next/link";
import logout from "../../components/logout";

function AdminSidebar() {
  const onLogout = () => {
    logout();
  };

  return (
    <div className="bg-indigo-800 text-white">
      <div className={styles.container}>
        <div className="flex justify-center align-items-center">
          <div className="p-10">
            <span
              style={{
                fontWeight: "800",
                fontSize: "1.5em",
                cursor: "pointer",
              }}
            >
              <Link href="/">FSM Admin</Link>
            </span>
          </div>
        </div>

        <ul className="mt-6">
          <li className="p-4 hover:bg-indigo-700 transition duration-300">
            <Link href="/admin/users" className="block">
              Users
            </Link>
          </li>
          <li className="p-4 hover:bg-indigo-700 transition duration-300">
            <a href="#" className="block">
              Logs
            </a>
          </li>
          <li className="p-4 hover:bg-indigo-700 transition duration-300">
            <a href="#" className="block">
              Notifications
            </a>
          </li>
          <li className="p-4 hover:bg-indigo-700 transition duration-300">
            <a href="#" className="block">
              Profile
            </a>
          </li>
          <li className="p-4 hover:bg-indigo-700 transition duration-300">
            <a
              onClick={() => {
                onLogout();
              }}
              href="#"
              className="block"
            >
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminSidebar;

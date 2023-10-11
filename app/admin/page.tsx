"use client";

import AdminSidebar from "./components/sidebar";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import UserTopbar from "../components/usertopbar";

function AdminPage() {
  useEffect(() => {
    var token = localStorage.getItem("authToken");
    if (token == "" || token == null) {
      redirect("/login");
    }
  }, []);

  return (
    <div>
      <UserTopbar />
      <AdminSidebar />
      <div>
        <Link href="./admin/users">Users</Link>
      </div>
    </div>
  );
}

export default AdminPage;

import { redirect } from "next/navigation";

const logout = () => {
  localStorage.removeItem("authToken");
  redirect("/");
};

export default logout;

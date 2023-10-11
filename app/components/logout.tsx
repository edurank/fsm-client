import { useRouter } from "next/router";


const logout = () => {
  const router = useRouter();
  localStorage.removeItem("authToken");
  router.push('/login');
};

export default logout;

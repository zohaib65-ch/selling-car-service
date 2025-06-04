import "@/styles/globals.scss";
import "@/styles/login.scss";
import "@/styles/car-request.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (!token && router.pathname !== "/") {
      router.push("/");
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}
export default App;

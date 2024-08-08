"use client";
import { signIn, useSession } from "next-auth/react";
import style from "./loginpage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();

  const router = useRouter();
  if (status === "loading") {
    return <div className={style.loading}>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("./");
  }
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={style.socialButton}>Sign in with Github</div>
      </div>
    </div>
  );
};

export default LoginPage;

import style from "./loginpage.module.css";

const LoginPage = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.socialButton}>Sign in with Google</div>
        <div className={style.socialButton}>Sign in with Github</div>
      </div>
    </div>
  );
};

export default LoginPage;

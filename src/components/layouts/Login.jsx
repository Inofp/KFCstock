
import styles from "@/styles/Login.module.scss";
import { useRouter } from 'next/router';


const LoginPage = () => {

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/home')
  }

  return (
    <div className={styles['login-container']}>
      <form className={styles['login-form']}>
        <h2 className="absolute top-4 text-zinc-600">Login</h2>
        <input className={styles['login-form__input']} type="email" placeholder="Email" />
        <input className={styles['login-form__input']} type="password" placeholder="Password" />
        <button className={styles['login-form__button']} onClick={handleClick}>
          SIGN IN
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
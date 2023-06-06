import styles from "@/styles/Login.module.scss";
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { useEffect } from 'react';
import Cookies from 'js-cookie';


const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerForm, setRegisterForm] = useState(false);
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      await login(username, password);
      router.push('/');
    } catch (error) {
      alert('Invalid login or password');
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/register', {
        login: registerUsername,
        password: registerPassword
      });

      if (response.data.success) {
        alert('User created, you can now login');
      } else {
        alert(`Error creating user: ${response.data.message}`);
      }
    } catch (error) {
      alert(`Error creating user: ${error.message}`);
    }
  };

  const resetForm = () => {
    setUsername('');
    setPassword('');
    setRegisterUsername('');
    setRegisterPassword('');
  }

  useEffect(() => {
    const token = Cookies.get('accessToken');

    if (token) {
      router.push('/'); 
    }
  }, [router]);

  return (
    <div className={styles['login-container']}>
      <div className={styles['login-form']}>
        <form onSubmit={registerForm ? handleRegister : handleLogin} className="flex flex-col items-center">
          <h2 className="absolute top-4 text-zinc-600">
            {registerForm ? "Register" : "Login"}
          </h2>
          <input className={styles['login-form__input']} type="text" placeholder="Login" value={registerForm ? registerUsername : username} onChange={(e) => registerForm ? setRegisterUsername(e.target.value) : setUsername(e.target.value)} />
          <input className={styles['login-form__input']} type="password" placeholder="Password" value={registerForm ? registerPassword : password} onChange={(e) => registerForm ? setRegisterPassword(e.target.value) : setPassword(e.target.value)} />

          <button className={styles['login-form__button']} type="submit">
            {registerForm ? "SIGN UP" : "SIGN IN!"}
          </button>
        </form>

        <div className="">
          {registerForm ?
            <span className="text-[15px] text-[#555]">Already registered?</span>
            : <span className="text-[15px] text-[#555]">Don't have an account?</span>
          }

          <button className="underlineBtn text-[#33b34f] text-[16px] ml-2 font-semibold" onClick={() => { setRegisterForm(!registerForm); resetForm(); }}>
            {registerForm ? "Sign in!" : "Sign up!"}
          </button>

          <div>
            Test account: login - 123, pass - 123
          </div>

        </div>
      </div>


      <style jsx>{`
          .underlineBtn {
            position: relative;
          }
          .underlineBtn::after {
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 1px;
            bottom: 0;
            left: 0;
            background-color: #33b34f;
            transform-origin: bottom left;
            transition: transform 0.16s ease-out;
          }
          .underlineBtn:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        `}
      </style>
    </div>
  );
}

export default LoginPage;

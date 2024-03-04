"use client"

import styles from "./loginform.module.scss"
import { useState, useEffect } from "react";
import { setToken } from "@/utils/auth";
import { fetcher } from "@/utils/api";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';


const LoginPage = () => {
  const router = useRouter();

  const [data, setData] = useState({
    identifier: '',
    password: ''
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!data.identifier || !data.password) {
      toast.error("Kullanıcı adı ve şifre gereklidir.");
      return;
    }

    try {
      const responseData = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}auth/local`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            identifier: data.identifier,
            password: data.password
          })
        });

      if (responseData && responseData.jwt) {
        setToken(responseData);
        toast.success("Giriş başarılı!");
        setTimeout(() => {
          router.push('/dashboard');
        }, 500);
      } else {
        toast.error("Hatalı şifre veya kullanıcı adı!");
      }
    } catch (error) {
      console.error("Giriş yapılırken bir hata oluştu:", error);
      toast.error("Giriş yapılırken bir hata oluştu.");
    }
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleLoginSubmit} className={styles.form}>
        <h1>Login</h1>
        <input
          type="text"
          name="identifier"
          value={data.identifier}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
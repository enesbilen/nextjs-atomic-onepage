"use client"
import { useState } from 'react';
import styles from './registerform.module.scss'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
    const [error, setError] = useState(false); 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setrepeatPassword] = useState('');
    const router = useRouter();

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== repeatPassword) {
            setError(true);
            return;
        }
    };
    return (
        <form className={styles.form} onSubmit={handleRegister}>
            <input type="text" placeholder='username' name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" placeholder='email' name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder='Password' name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} required />
            <input type="password" placeholder='Repeat Password' name='repeatPassword'
                value={repeatPassword}
                onChange={(e) => setrepeatPassword(e.target.value)} required />
            <button type="submit">Kayıt Ol</button>
            {error && <span>Yanlış email veya password</span>}
        </form>
    )
}

export default RegisterForm
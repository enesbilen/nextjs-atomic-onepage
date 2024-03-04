import LoginForm from '@/components/molecules/loginForm';
import styles from  './login.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className="content">
        <div className={styles.inner}>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
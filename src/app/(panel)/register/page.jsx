import RegisterForm from '@/components/molecules/registerForm'
import styles from './register.module.scss'

const Register = () => {
    return (
        <div className={styles.container}>
            <div className="content">
                <div className={styles.inner}>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default Register
import Image from 'next/image';
import Link from 'next/link';
import styles from './LoginHeader.module.css';

function LoginHeader({ active }) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.logo}>
          <Image src="/kimilogo.png" alt="Logo Image" width="171" height="171"/>
          <Image src="/kimicraft.png" className={styles.kimicraft} alt="Kimi  Craft" width="138" height="111"/>
        </div>
        <div className={styles.loginOptions}>
          <Link href="/auth/login">
            <h3 className={ active === "login" ? styles.active : ""}>Login</h3>
          </Link>
          <Link href="/auth/register">
            <h3 className={ active === "register" ? styles.active : ""}>Register</h3>
          </Link>
        </div>
      </div>
    );
  }
  
  export default LoginHeader;
  
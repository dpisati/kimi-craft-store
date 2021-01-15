import Image from 'next/image';
import styles from './LoginHeader.module.css';

function LoginHeader({ active, setLoginOrSignUp }) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.logo}>
          <Image src="/kimilogo.png" alt="Logo Image" width="171" height="171"/>
          <Image src="/kimicraft.png" className={styles.kimicraft} alt="Kimi  Craft" width="138" height="111"/>
        </div>
        <div className={styles.loginOptions}>          
            <h3 onClick={() => setLoginOrSignUp("login")} className={ active === "login" ? styles.active : ""}>Login</h3>     
            <h3 onClick={() => setLoginOrSignUp("register")} className={ active === "register" ? styles.active : ""}>Register</h3>
        </div>
      </div>
    );
  }
  
  export default LoginHeader;
  
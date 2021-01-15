import Head from 'next/head'
import Link from 'next/link'
import LoginHeader from '../../src/components/LoginHeader'
import Button from '../../src/components/Button'
import styles from '../../styles/Login.module.css'
import TextField from '@material-ui/core/TextField';

export default function Login() {
  return (
    <div>
      <Head>
        <title>Kimi Craft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginHeader active="login" />
      <div className={styles.loginInputContainer}>
        <TextField id="email" label="Email Address" fullWidth />
        <div className={styles.betweenInputs}></div>
        <TextField id="password" type="password" label="Password" fullWidth />
        <Link href="/auth/forgot">
          <h3 className={styles.forgotPassword}>Forgot password?</h3>
        </Link>
      </div>
      <div className={styles.loginBtn}>        
          <Button href="/dashboard" title="Login" />        
      </div>
    </div>
  )
}

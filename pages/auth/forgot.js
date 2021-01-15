import Head from 'next/head'
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
      <LoginHeader active="forgot" />
      <div className={styles.loginInputContainer}>
        <TextField id="email" label="Email Address" fullWidth />
      </div>
      <div className={styles.loginBtn}>        
          <Button href="/auth/login" title="Reset Password" />        
      </div>
    </div>
  )
}

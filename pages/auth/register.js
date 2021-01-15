import Head from 'next/head'
import LoginHeader from '../../src/components/LoginHeader'
import Button from '../../src/components/Button'
import styles from '../../styles/Login.module.css'
import TextField from '@material-ui/core/TextField';

export default function Register() {
  return (
    <div>
      <Head>
        <title>Kimi Craft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginHeader active="register" />
      <div className={styles.loginInputContainer}>
        <TextField id="name" label="Name" fullWidth />
        <div className={styles.betweenInputs}></div>
        <TextField id="email" label="Email Address" fullWidth />
        <div className={styles.betweenInputs}></div>
        <TextField id="password" type="password" label="Password" fullWidth />
        <div className={styles.betweenInputs}></div>
        <TextField id="confirmPassword" type="password" label="Confirm Password" fullWidth />
      </div>
      <div className={styles.loginBtn}>        
          <Button href="/dashboard" title="Register" />        
      </div>
    </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import LoginHeader from '../../src/components/LoginHeader'
import Button from '../../src/components/Button'
import styles from '../../styles/Login.module.css'
import TextField from '@material-ui/core/TextField';
import { useState } from 'react'

export default function Login() {
  const [ loginOrSignUp, setLoginOrSignUp ] = useState("login");
  return (
    <div>
      <Head>
        <title>Kimi Craft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginHeader active={loginOrSignUp} setLoginOrSignUp={setLoginOrSignUp} />

      {loginOrSignUp === "login" && (
        <>
          <div className={styles.loginInputContainer}>
          <TextField id="email" label="Email Address" fullWidth />
          <div className={styles.betweenInputs}></div>
          <TextField id="password" type="password" label="Password" fullWidth />
          
            <h3 onClick={() => setLoginOrSignUp("forgot")} className={styles.forgotPassword}>Forgot password?</h3>
          
          </div>
          <div className={styles.loginBtn}>        
              <Button href="/dashboard" title="Login" />        
          </div>        
        </>
      )}
      
      {loginOrSignUp === "register" && (
        <>
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
        </>
      )}

      {loginOrSignUp === "forgot" && (
        <>
          <div className={styles.loginInputContainer}>
            <TextField id="email" label="Email Address" fullWidth />
          </div>
          <div className={styles.loginBtn}>        
              <Button href="/auth/login" title="Reset Password" />        
          </div>
        </>
      )}
    </div>
  )
}

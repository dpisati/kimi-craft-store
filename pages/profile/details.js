import Head from 'next/head'
import Image from 'next/image'
import TextField from '@material-ui/core/TextField'

import loginStyles from '../../styles/Login.module.css'
import styles from '../../styles/Dashboard.module.css'

import Button from '../../src/components/Button'

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Kimi Craft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>My Profile</h1>

      <main className={styles.profileContainer}>
        <div className={styles.picture}>
            <span className={styles.border}></span>
            <Image className={styles.image} src="/images/DanielPisati.jpg" width="152" height="152"/>
          <div className={styles.changePictureContainer}>
            <h2 className={styles.changePicture}>Change</h2>
          </div>
        </div>
      </main>

      <section className={styles.section}>
        <div className={loginStyles.loginInputContainer}>
            <TextField id="name" label="Name" fullWidth />
            <div className={loginStyles.betweenInputs}></div>
            <TextField id="email" label="Email Address" fullWidth />
        </div>
      </section>

      <h3 className={styles.subtitle}>Address</h3>
      <section className={styles.section}>
        <div className={loginStyles.loginInputContainer}>
            <TextField id="street" label="Street" fullWidth />
            <div className={loginStyles.betweenInputs}></div>
            <TextField id="city" label="City" fullWidth />
            <div className={loginStyles.betweenInputs}></div>
            <TextField id="region" label="Region" fullWidth />
            <div className={loginStyles.betweenInputs}></div>
            <TextField id="country" label="Country" fullWidth />
        </div>
      </section>

      <div className={styles.button}>
        <Button href="/dashboard" title="Update" />
      </div>

    </div>
  )
}

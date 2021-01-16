import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'

import Button from '../src/components/Button'

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
          <div className={styles.profileName}>
            <h2 className={styles.nameText}>Daniel Pisati</h2>
          </div>
        </div>
      </main>

      <section className={styles.section}>
        <div className={styles.profileOption}>
          <h3>Details</h3>
          <svg className={styles.arrow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className={styles.profileOption}>
          <h3>Orders</h3>
          <svg className={styles.arrow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className={styles.profileOption}>
          <h3>Pending reviews</h3>
          <svg className={styles.arrow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className={styles.profileOption}>
          <h3>About</h3>
          <svg className={styles.arrow} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </section>

      <div className={styles.button}>
        <Button href="/" title="Home" />
      </div>

    </div>
  )
}

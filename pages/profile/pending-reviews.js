import Head from 'next/head'
import styles from '../../styles/Dashboard.module.css'

import Button from '../../src/components/Button'
import PendingReview from '../../src/components/PendingReview'

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Kimi Craft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Pending Reviews</h1>

      <section className={styles.section}>
        <PendingReview title="Product Name" href="/profile/review-product/:slug" />
        <PendingReview title="Product Name" href="/profile/review-product/:slug" />
        <PendingReview title="Product Name" href="/profile/review-product/:slug" />
      </section>

      <div className={styles.button}>
        <Button href="/dashboard" title="Update" />
      </div>

    </div>
  )
}

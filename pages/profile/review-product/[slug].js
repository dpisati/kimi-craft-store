import Head from 'next/head'
import styles from '../../../styles/Dashboard.module.css'
import stylesReview from '../../../styles/Review.module.css'

import Button from '../../../src/components/Button'
import PendingReview from '../../../src/components/PendingReview'

export default function Slug() {
  return (
    <div>
      <Head>
        <title>Kimi Craft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Review</h1>

      <section className={styles.section}>
        <PendingReview title="Product Name" href="/profile/review-product/:slug" button="false" />

        <h3 className={stylesReview.comment}>Comment</h3>
        <textarea className={stylesReview.textArea}></textarea>
        

        <div className={stylesReview.starsContainer}>
          <svg className={stylesReview.star1} width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.4166 3.23607L25.4984 15.7985L25.7229 16.4895H26.4495H39.6585L28.9722 24.2535L28.3844 24.6806L28.6089 25.3716L32.6907 37.9341L22.0044 30.17L21.4166 29.743L20.8289 30.17L10.1426 37.9341L14.2244 25.3716L14.4489 24.6806L13.8611 24.2535L3.17483 16.4895H16.3838H17.1103L17.3348 15.7985L21.4166 3.23607Z" stroke="#8CBFF8" stroke-width="2"/>
          </svg>
          <svg className={stylesReview.star2} width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.4166 3.23607L25.4984 15.7985L25.7229 16.4895H26.4495H39.6585L28.9722 24.2535L28.3844 24.6806L28.6089 25.3716L32.6907 37.9341L22.0044 30.17L21.4166 29.743L20.8289 30.17L10.1426 37.9341L14.2244 25.3716L14.4489 24.6806L13.8611 24.2535L3.17483 16.4895H16.3838H17.1103L17.3348 15.7985L21.4166 3.23607Z" stroke="#8CBFF8" stroke-width="2"/>
          </svg>
          <svg className={stylesReview.star3} width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.4166 3.23607L25.4984 15.7985L25.7229 16.4895H26.4495H39.6585L28.9722 24.2535L28.3844 24.6806L28.6089 25.3716L32.6907 37.9341L22.0044 30.17L21.4166 29.743L20.8289 30.17L10.1426 37.9341L14.2244 25.3716L14.4489 24.6806L13.8611 24.2535L3.17483 16.4895H16.3838H17.1103L17.3348 15.7985L21.4166 3.23607Z" stroke="#8CBFF8" stroke-width="2"/>
          </svg>
          <svg className={stylesReview.star4} width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.4166 3.23607L25.4984 15.7985L25.7229 16.4895H26.4495H39.6585L28.9722 24.2535L28.3844 24.6806L28.6089 25.3716L32.6907 37.9341L22.0044 30.17L21.4166 29.743L20.8289 30.17L10.1426 37.9341L14.2244 25.3716L14.4489 24.6806L13.8611 24.2535L3.17483 16.4895H16.3838H17.1103L17.3348 15.7985L21.4166 3.23607Z" stroke="#8CBFF8" stroke-width="2"/>
          </svg>
          <svg className={stylesReview.star5} width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.4166 3.23607L25.4984 15.7985L25.7229 16.4895H26.4495H39.6585L28.9722 24.2535L28.3844 24.6806L28.6089 25.3716L32.6907 37.9341L22.0044 30.17L21.4166 29.743L20.8289 30.17L10.1426 37.9341L14.2244 25.3716L14.4489 24.6806L13.8611 24.2535L3.17483 16.4895H16.3838H17.1103L17.3348 15.7985L21.4166 3.23607Z" stroke="#8CBFF8" stroke-width="2"/>
          </svg>
        </div>
      </section>

      <div className={styles.button}>
        <Button href="/dashboard" title="Update" />
      </div>

    </div>
  )
}

import styles from './PendingReview.module.css';
import Link from 'next/link'
import Image from 'next/image'

function PendingReview({title, href, button}) {
    return (
      <Link href={href}>
        <div className={styles.pendingContainer}>
            <div className={styles.reviewImage}>
            <Image src="/products/productExample.png" width="300" height="300"/>
            </div>
            <h3 className={styles.pendingText}>{title}</h3>
            { button !== "false" && (
              <button className={styles.editBtn}>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25357 13.4792L13.7943 1.18621C15.4078 -0.395404 18.0248 -0.395404 19.6383 1.18621L21.3133 2.82816C22.9268 4.40977 22.9268 6.97509 21.3133 8.55671L8.72314 20.8982C8.00322 21.6039 7.02715 21.9999 6.00835 21.9999H0.852229C0.373242 21.9999 -0.0116668 21.613 0.000270339 21.1437L0.12997 16.0438C0.155757 15.0799 0.558114 14.1609 1.25357 13.4792ZM20.1082 4.00953L18.4331 2.36758C17.4853 1.43844 15.9474 1.43844 14.9996 2.36758L14.0259 3.32205L19.135 8.32918L20.1082 7.37524C21.056 6.44611 21.056 4.93866 20.1082 4.00953ZM2.45885 14.6606L12.8206 4.50347L17.9298 9.5106L7.51797 19.7167L7.37948 19.841C6.99697 20.1551 6.51235 20.329 6.00841 20.329L1.7257 20.3285L1.83392 16.0864C1.84824 15.5512 2.07228 15.0395 2.45885 14.6606ZM23.2942 21.1647C23.2942 20.7033 22.9126 20.3293 22.442 20.3293H13.5508L13.4351 20.3369C13.0191 20.3922 12.6985 20.7417 12.6985 21.1647C12.6985 21.626 13.0801 22 13.5508 22H22.442L22.5576 21.9924C22.9736 21.9371 23.2942 21.5876 23.2942 21.1647Z" fill="white"/>
                </svg>
              </button>
            )}
          </div>
      </Link>
    );
  }
  
  export default PendingReview;
  
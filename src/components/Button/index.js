import styles from './Button.module.css';
import Link from 'next/link'

function Button({title, href}) {
    return (
      <Link href={href}>
        <div className={styles.button}>
            <h1 className={styles.buttonText}>{title}</h1>
        </div>
      </Link>
    );
  }
  
  export default Button;
  
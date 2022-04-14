import styles from "./styles.module.scss";

export function StripeColors() {

  return (
    <div className={styles.stripe}>
      <div className={styles.blue}></div>
      <div className={styles.red}></div>
      <div className={styles.yellow}></div>
      <div className={styles.green}></div>
    </div>
  )
}
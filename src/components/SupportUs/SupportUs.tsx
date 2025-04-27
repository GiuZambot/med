import styles from './SupportUs.module.scss'

const SupportUs = () => {
  return (
    <div className={styles.supportUsContainer}>
      <div className={styles.textContainer}>
        <div>
          <h2>Apoie o MeD</h2>
          <p>Nos apoie nessa iniciativa por mais Mulheres em Dados</p>
        </div>
        <button className={styles.supportButton}>APOIAR O MED</button>
      </div>
    </div>
  )
}

export default SupportUs

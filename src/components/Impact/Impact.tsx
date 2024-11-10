import styles from './Impact.module.scss'

const Impact = () => {
  return (
    <div className={styles.impactContainer}>
      <div className={styles.card}>
        <p className={styles.number} style={{ color: '#FE6000' }}>+X</p>
        <p className={styles.description}>mulheres impactadas</p>
      </div>
      <div className={styles.card}>
        <p className={styles.number} style={{ color: '#06AA8E' }}>+H</p>
        <p className={styles.description}>horas de conteúdo gratuito</p>
      </div>
      <div className={styles.card}>
        <p className={styles.number} style={{ color: '#FF69B4' }}>+Y</p>
        <p className={styles.description}>encontros online</p>
      </div>
    </div>
  )
}

export default Impact
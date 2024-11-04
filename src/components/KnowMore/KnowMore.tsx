import styles from './KnowMore.module.scss'

const KnowMore = () => {
  return (
    <div className={styles.knowMoreContainer}>
      <p className={styles.text}>
        Quer saber mais sobre o MeD? Insira seu e-mail ;)
      </p>
      <div className={styles.formContainer}>
        <input
          type="email"
          className={styles.emailInput}
          placeholder="Digite seu melhor e-mail"
        />
        <button className={styles.submitButton}>OK</button>
      </div>
    </div>
  )
}

export default KnowMore

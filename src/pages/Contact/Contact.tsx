import styles from './Contact.module.scss'
import contactImage from '../../assets/contact.png'
import vectorBackground from '../../assets/vector1.png'

const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>ENTRE EM CONTATO</h2>
      <p className={styles.subtitle}>
        Caso queira ser um parceiro do MeD, fazer eventos ou trazer conteúdos
        novos para a comunidade!
      </p>

      <div className={styles.card}>
        <img
          src={vectorBackground}
          alt="Vector Background"
          className={styles.vectorBackground}
        />
        <img
          src={contactImage}
          alt="Evento Big Data Experience 2023"
          className={styles.contactImage}
        />
        <div className={styles.cardText}>
          <p>Por mais Mulheres em Dados</p>
        </div>
      </div>
    </div>
  )
}

export default Contact

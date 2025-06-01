import { useEffect } from 'react'
import contactImage from '../../assets/contact.png'
import vectorBackground from '../../assets/vector1.png'
import { useRDStationScript } from '../../hooks/useRDStationScript'
import styles from './Contact.module.scss'

const Contact = () => {
  const formId = 'contato-site-med-8432d732f2b273b8e712'
  useRDStationScript()

  useEffect(() => {
    const alreadyRendered =
      (document.getElementById(formId)?.children.length ?? 0) > 0

    if ((window as any).RDStationForms && !alreadyRendered) {
      setTimeout(() => {
        new (window as any).RDStationForms(formId, 'null').createForm()

        const tryChangeButtonText = () => {
          const button = document.querySelector(`#${formId} .rd-button`)
          if (button) {
            button.textContent = 'Enviar'
          } else {
            setTimeout(tryChangeButtonText, 100)
          }
        }

        tryChangeButtonText()
      }, 500)
    }
  }, [])

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>ENTRE EM CONTATO</h2>
      <p className={styles.subtitle}>
        Caso queira ser um parceiro do MeD, fazer eventos ou trazer conteúdos
        novos para a comunidade!
      </p>

      <div className="formContainer">
        <div id={formId} />
      </div>

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

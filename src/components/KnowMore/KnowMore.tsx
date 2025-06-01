import { useEffect } from 'react'
import { useRDStationScript } from '../../hooks/useRDStationScript'
import styles from './KnowMore.module.scss'

const KnowMore = () => {
  useRDStationScript()

  useEffect(() => {
    const formId = 'news-site-med-6267b37786409ff79692'

    const initForm = () => {
      new (window as any).RDStationForms(formId, 'null').createForm()

      const tryChangeButtonText = () => {
        const button = document.querySelector(`#${formId} .rd-button`)
        const input = document.querySelector(`#${formId} .bricks-form__input`)
        if (button) {
          button.textContent = 'OK'
        } else {
          setTimeout(tryChangeButtonText, 0)
        }

        if (input) {
          input.setAttribute('placeholder', 'Digite seu melhor e-mail')
        } else {
          setTimeout(tryChangeButtonText, 0)
        }
      }

      tryChangeButtonText()
    }

    const alreadyRendered =
      (document.getElementById(formId)?.children.length ?? 0) > 0

    if ((window as any).RDStationForms && !alreadyRendered) {
      setTimeout(initForm, 500)
    }
  }, [])

  return (
    <div className="knowMoreContainer">
      <div className={styles.knowMoreContainer}>
        <p className={styles.text}>
          Quer saber mais sobre o MeD? Insira seu e-mail ;)
        </p>
        <div className={styles.formContainer}>
          <div id="news-site-med-6267b37786409ff79692"></div>
        </div>
      </div>
    </div>
  )
}

export default KnowMore

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import fatalErrorImg from '../../assets/fatalError_500.svg'
import styles from './FatalError.module.scss'

// FatalError component for displaying a 500 error page.
const FatalError = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleTryAgain = () => {
    navigate('/')
  }

  return (
    <div className={styles['page-container']}>
      <div className={styles['fatal-error-content']}>
        <div className={styles['text-content']}>
          <h1>{t('Ops...')}</h1>
          <h2>{t('Something went off the planned route')}</h2>
          <p>{t('unexpected_error')}</p>
          <div className={styles['button-content']}>
            <button onClick={handleTryAgain} />
          </div>
        </div>
        <div className={styles['image-content']}>
          <img src={fatalErrorImg} alt={t('Error page illustration')} />
        </div>
      </div>
    </div>
  )
}

export default FatalError

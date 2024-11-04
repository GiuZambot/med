import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import styles from './NotFound.module.scss'

// Page to show when a route do not exist
const NotFound = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className={styles['pageContainer']}>
      <div className={styles['not-found-content']}>
        <div className={styles['text-content']}>
          <h1>{t('404')}</h1>
          <h2>{t('Oops... It seems this page has been abducted')}</h2>
          <button onClick={() => navigate('/')} />
        </div>
        <div className={styles['image-content']}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg"
            alt={t('Not found page illustration')}
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound

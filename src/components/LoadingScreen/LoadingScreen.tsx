import { useTranslation } from 'react-i18next'
import styles from './LoadingScreen.module.scss'
import { Spin } from 'antd'

export const LoadingScreen = () => {
  const { t } = useTranslation()
  return (
    <div className={styles['loading-screen']}>
      <Spin size="large" aria-label={t('Loading')}></Spin>
    </div>
  )
}

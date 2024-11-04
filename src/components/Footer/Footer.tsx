import { Layout } from 'antd'
import styles from './Footer.module.scss'

const { Footer } = Layout

const AppFooter = () => {
  return (
    <Footer className={styles.appFooter}>
      Mulheres em Dados - 2024 - Todos os direitos reservados
    </Footer>
  )
}

export default AppFooter

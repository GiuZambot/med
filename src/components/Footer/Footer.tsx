import { Layout } from 'antd'
import styles from './Footer.module.scss'

const { Footer } = Layout

const AppFooter = () => {
  return (
    <Footer className={styles.appFooter}>
      <span>Mulheres em Dados - 2025 - Todos os direitos reservados</span>
      <a href="https://www.giuzambot.com/" target="_blank" rel="noreferrer">
        <span className={styles.madeBy}>made by giu zambot :)</span>
      </a>
    </Footer>
  )
}

export default AppFooter

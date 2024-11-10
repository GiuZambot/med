import { Layout } from 'antd'
import styles from './Footer.module.scss'

const { Footer } = Layout

const AppFooter = () => {
  return (
    <Footer className={styles.appFooter}>
      <span>Mulheres em Dados - 2024 - Todos os direitos reservados</span>
      <span className={styles.madeBy}>
        made by{' '}
        <a href="https://www.giuzambot.com/" target="_blank" rel="noreferrer">
          giu zambot :)
        </a>
      </span>
    </Footer>
  )
}

export default AppFooter

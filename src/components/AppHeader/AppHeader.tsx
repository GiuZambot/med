import logo from '../../assets/Ativo9.png'
import styles from './AppHeader.module.scss'
import { AppMenu } from '@components'
import { Layout } from 'antd'

const { Header } = Layout

const AppHeader = () => {
  return (
    <Header className={styles.appHeader}>
      <div className={styles.logo}>
        <img src={logo} alt="Mulheres em Dados" />
      </div>
      <AppMenu />
    </Header>
  )
}

export default AppHeader

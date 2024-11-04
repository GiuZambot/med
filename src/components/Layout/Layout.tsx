import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'

import { AppFooter, AppHeader } from '@components'

const AppLayout = () => {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <Outlet />
      </Content>
      <AppFooter />
    </Layout>
  )
}

export default AppLayout

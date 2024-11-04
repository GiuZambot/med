import { AppLayout, PageLoader } from '@components'
import { Home, NotFound } from '@pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './AppRoutes.scss'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="page/:id" element={<PageLoader />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

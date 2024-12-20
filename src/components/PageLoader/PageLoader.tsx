import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const pages: {
  [key: string]: () => Promise<{ default: React.ComponentType<unknown> }>
} = {
  FatalError: () => import('../../pages/FatalError/FatalError'),
  Home: () => import('../../pages/Home/Home'),
  About: () => import('../../pages/About/About'),
  Contact: () => import('../../pages/Contact/Contact'),
  NotAuthorized: () => import('../../pages/NotAuthorized/NotAuthorized'),
  NotFound: () => import('../../pages/NotFound/NotFound'),
}

const PageLoader = () => {
  const { id } = useParams<{ id: string }>()
  const [pageComponent, setPageComponent] =
    useState<React.ComponentType<unknown> | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      const loadPage = async () => {
        try {
          const module = await pages[id]()
          setPageComponent(() => module.default)
        } catch {
          navigate('/page/NotFound')
        }
      }
      loadPage()
    }
  }, [id, navigate])

  if (!pageComponent) {
    return <h1>Carregando</h1>
  }

  const PageComponent = pageComponent

  return <PageComponent />
}

export default PageLoader

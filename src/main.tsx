import { createRoot } from 'react-dom/client'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './AppRoutes.scss'
import AppRoutes from './AppRoutes.tsx'
import './locales/i18n.ts'

createRoot(document.getElementById('root')!).render(<AppRoutes />)

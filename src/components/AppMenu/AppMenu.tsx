import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './AppMenu.module.scss'

const AppMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    {
      key: 'home',
      label: <Link to="/">Home</Link>,
    },
    {
      key: 'about',
      label: <Link to="/about">Quem Somos</Link>,
    },
    {
      key: 'contact',
      label: <Link to="/contact">Contato</Link>,
    },
  ]

  return (
    <>
      <div className={styles.appMenu}>
        <div className={styles.desktopMenu}>
          {menuItems.map((item) => (
            <div key={item.key} className={styles.menuItem}>
              {item.label}
            </div>
          ))}
        </div>
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {menuItems.map((item) => (
            <div
              key={item.key}
              className={styles.mobileMenuItem}
              onClick={toggleMenu}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default AppMenu

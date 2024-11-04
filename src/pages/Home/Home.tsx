import React from 'react'
import styles from './Home.module.scss'
import { BigNumbers, Hero, KnowMore, WhatWeDo } from '@components'

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <KnowMore />
      <WhatWeDo />
      <BigNumbers />
    </div>
  )
}

export default Home

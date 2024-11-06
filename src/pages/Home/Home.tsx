import styles from './Home.module.scss'
import {
  BigNumbers,
  Hero,
  KnowMore,
  OurSupporters,
  WhatWeDo,
  WhereWeAre,
} from '@components'

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <KnowMore />
      <WhatWeDo />
      <BigNumbers />
      <WhereWeAre />
      <OurSupporters />
    </div>
  )
}

export default Home

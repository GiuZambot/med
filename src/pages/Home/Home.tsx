import styles from './Home.module.scss'
import {
  BigNumbers,
  FAQ,
  Hero,
  KnowMore,
  OurSupporters,
  SupportUs,
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
      <SupportUs />
      <FAQ />
    </div>
  )
}

export default Home

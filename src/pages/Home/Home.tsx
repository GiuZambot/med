import {
  BigNumbers,
  CommunityContent,
  Faq,
  Hero,
  KnowMore,
  OurSupporters,
  SupportUs,
  WhatWeDo,
  WhereWeAre,
} from '@components'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <KnowMore />
      <WhatWeDo />
      <BigNumbers />
      <WhereWeAre />
      <CommunityContent />
      <OurSupporters />
      <SupportUs />
      <Faq />
    </div>
  )
}

export default Home

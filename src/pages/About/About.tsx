import { HistorySection, Impact, TeamSection, Testimonials } from '@components'
import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <HistorySection />
      <Impact />
      <TeamSection />
      <Testimonials />
    </div>
  )
}

export default About

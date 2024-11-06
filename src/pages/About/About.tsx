import { HistorySection, TeamSection, TestimonialsSection } from '@components'
import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <HistorySection />
      <TeamSection />
      {/* <TestimonialsSection /> */}
    </div>
  )
}

export default About

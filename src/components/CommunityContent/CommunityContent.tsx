import BlogSection from './BlogSection/BlogSection'
import styles from './CommunityContent.module.scss'
import PodcastSection from './PodcastSection/PodcastSection'
import YouTubeSection from './YouTubeSection/YouTubeSection'

const CommunityContent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>CONTEÚDO DA NOSSA COMUNIDADE</h2>
      <YouTubeSection />
      <BlogSection />
      <PodcastSection />
    </div>
  )
}

export default CommunityContent

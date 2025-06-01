import micIcon from '@assets/fi_3329389.png'
import { ArrowIcon } from '@components'
import styles from './PodcastSection.module.scss'

const podcasts = [
  {
    title: '#meu-sim-chegou Alcione',
    url: 'https://open.spotify.com/episode/0rDr7mcPajmyLpMYdV2h8S?si=l6FlqDl6QGqurQ6cRhVo3Q',
    key: 'podcast1',
  },
  {
    title: 'Mulheres em Dados com Andressa Freires',
    url: 'https://open.spotify.com/episode/2uX1OnnYRYYdG17bJU9V3y?si=euVSbMHgRZScCVFYaSsPYg',
    key: 'podcast2',
  },
  {
    title: 'Mulheres em Dados com Mikaeri Ohana',
    url: 'https://open.spotify.com/episode/2uX1OnnYRYYdG17bJU9V3y?si=euVSbMHgRZScCVFYaSsPYg',
    key: 'podcast3',
  },
]

const PodcastSection = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>PODCAST</h3>
      <div className={styles.grid}>
        {podcasts.map((podcast) => (
          <a
            key={podcast.key}
            href={podcast.url}
            className={styles.cardWrapper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.card}>
              <div className={styles.content}>
                <img
                  src={micIcon}
                  alt="Ícone de microfone"
                  className={styles.icon}
                />
                <div className={styles.title}>{podcast.title}</div>
              </div>
              <div className={styles.arrow}>
                <ArrowIcon className={styles.arrowIcon} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default PodcastSection

import arrow from '@assets/arrow.svg'
import frame6 from '@assets/Frame6.png'
import frame7 from '@assets/Frame7.png'
import frame8 from '@assets/Frame8.png'
import styles from './YouTubeSection.module.scss'

const videos = [
  {
    title: 'CRIANDO SEU PRIMEIRO DASHBOARD EM LOOKER',
    description:
      'AULA 09 – CRIANDO SEU PRIMEIRO DASHBOARD EM LOOKER – TRILHA DE VISUALIZAÇÃO DE DADOS',
    thumbnail: frame6,
    url: 'https://www.youtube.com/watch?v=OlwzUSCCIn4',
    key: 'video1',
  },
  {
    title: 'CRIANDO SEU PRIMEIRO DASHBOARD EM TABLEAU',
    description:
      'AULA 08 – CRIANDO SEU PRIMEIRO DASHBOARD EM TABLEAU – TRILHA DE VISUALIZAÇÃO DE DADOS',
    thumbnail: frame7,
    url: 'https://www.youtube.com/watch?v=c6IC9X3HcVw',
    key: 'video2',
  },
  {
    title: 'CRIANDO UM MOCKUP',
    description:
      'AULA 07 – CRIANDO UM MOCKUP – TRILHA DE VISUALIZAÇÃO DE DADOS',
    thumbnail: frame8,
    url: 'https://www.youtube.com/watch?v=FFqy8gvUBbo',
    key: 'video3',
  },
]

const YouTubeSection = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>YOUTUBE</h3>
      <div className={styles.grid}>
        {videos.map((video) => (
          <a
            key={video.key}
            href={video.url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className={styles.thumbnail}
            />
            <div className={styles.descriptionBox}>
              <p className={styles.videoTitle}>{video.description}</p>
              <button className={styles.button}>
                ASSISTIR <img src={arrow} alt="Arrow" />
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default YouTubeSection

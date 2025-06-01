import arrow from '@assets/arrow.svg'
import blog1 from '@assets/IMG_6597 1.png'
import blog2 from '@assets/IMG_6597 2.png'
import blog3 from '@assets/IMG_6598 1.png'
import styles from './BlogSection.module.scss'

const blogs = [
  {
    title: 'Como surgiu o Mulheres em Dados?',
    thumbnail: blog1,
    url: 'https://medium.com/mulheres-em-dados/como-surgiu-o-mulheres-em-dados-70e0fa2b9624',
    key: 'blog1',
  },
  {
    title: 'Verdades que ninguém te conta sobre a área de tecnologia',
    thumbnail: blog2,
    url: 'https://medium.com/mulheres-em-dados/verdades-que-ningu%C3%A9m-te-conta-sobre-a-%C3%A1rea-de-tecnologia-85d557f8722c',
    key: 'blog2',
  },
  {
    title: 'Como estimar o valor de π usando a simulação Monte Carlo',
    thumbnail: blog3,
    url: 'https://medium.com/mulheres-em-dados/como-estimar-o-valor-de-%CF%80-usando-a-simula%C3%A7ao-monte-carlo-80c62ad6a346',
    key: 'blog3',
  },
]

const BlogSection = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>BLOG</h3>
      <div className={styles.grid}>
        {blogs.map((blog) => (
          <a
            key={blog.key}
            href={blog.url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className={styles.thumbnail}
            />
            <div className={styles.descriptionBox}>
              <button className={styles.button}>
                LER <img src={arrow} alt="Arrow" />
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default BlogSection

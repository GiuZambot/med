import styles from './Hero.module.scss'
import logoImage from '../../assets/Ativo10.png'
import Group27 from '../../assets/Group27.png'
import Group59 from '../../assets/Group59.png'

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <img src={logoImage} alt="Mulheres em Dados" className={styles.logo} />
        <p className={styles.description}>
          Somos a maior comunidade feminina de dados do Brasil! Ajudamos
          mulheres que estão trabalhando na área de dados ou que desejam
          ingressar.
        </p>
        <div className={styles.joinContainer}>
          <div className={styles.avatars}>
            <img src={Group59} alt="Avatar" />
          </div>
          <p className={styles.joinText}>Junte-se a + de 6.500 mulheres</p>
        </div>
      </div>

      <div className={styles.imageGrid}>
        <img src={Group27} alt="" />
      </div>
    </div>
  )
}

export default Hero

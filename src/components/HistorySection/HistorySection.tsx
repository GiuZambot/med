import group35 from '../../assets/Group35.png'
import styles from './HistorySection.module.scss'

const HistorySection = () => (
  <section className={styles.historySection}>
    <div className={styles.content}>
      <h2 className={styles.title}>NOSSA HISTÓRIA</h2>
      <p className={styles.text}>
        A comunidade Mulheres em Dados é uma organização sem fins lucrativos,
        pioneira e referência no Brasil na aceleração da igualdade de gênero no
        mercado de dados.
      </p>
      <p className={styles.text}>
        Colaboramos para o avanço de empresas, organizações e indivíduos como
        aliadas na promoção da diversidade de gênero. Para alcançar nossos
        objetivos, desenvolvemos ações por meio de abordagens criativas e
        inovadoras em nossas áreas principais de Networking, Educação e
        Acolhimento.
      </p>
    </div>
    <div className={styles.imageWrapper}>
      <img src={group35} alt="Ilustração da equipe Mulheres em Dados" />
    </div>
  </section>
)

export default HistorySection

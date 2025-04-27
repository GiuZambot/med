import styles from './Testimonials.module.scss'

const Testimonials = () => {
  return (
    <div className={styles.testimonialsContainer}>
      <h2 className={styles.title}>DEPOIMENTOS</h2>
      <p className={styles.subtitle}>
        Histórias inspiradoras de mulheres que conquistaram sua transição de
        carreira para a área de dados. Cada depoimento é um lembrete de que,
        juntas, é possível dar esse passo e alcançar novos caminhos
        profissionais.
      </p>

      <div className={styles.testimonialCards}>
        <div className={`${styles.card} ${styles.pink}`}>
          <p>
            Passando para compartilhar que, após 10 meses, consegui minha
            sonhada transição de carreira (saindo de RD para Dados)!!
          </p>
          <p>
            Compartilhando aqui pois, ver relatos como esse não me fizera,
            desistir.{' '}
          </p>
          <p>
            Obrigada por fazerem parte dessa trajetória comigo! Cada mentoria,
            conselho e dica, foram importantes demais pro meu desenvolvimento.
          </p>
          <p>Agora oficialmente sou analista de dados! Feliz demais! 🥹</p>
        </div>

        <div className={`${styles.card} ${styles.green}`}>
          <p>
            Hoje comecei um estágio em analytics. O mercado financeiro era minha
            prioridade na transição de carreira para dados e eu não poderia
            estar mais realizada.
          </p>
          <p>
            Após um ano de ter decidido entrar para a tecnologia e nove meses
            após iniciar os estudos obtive em dados obtive meu "sim".
          </p>
          <p>
            No ano passado, houve uma mentoria aqui com a Raquel Reis sobre o
            processo seletivo. Essa live me inspirou muito. Fiz exatamente o que
            a diva disse e deu tudo certo.
          </p>
        </div>

        <div className={`${styles.card} ${styles.purple}`}>
          <p>Olá, meninas!</p>
          <p>
            Gostaria de compartilhar com vocês que, finalmente, o meu tão
            sonhado "sim” chegou e, ontem, iniciei como estagiária de análise de
            dados! Muitas vezes acompanhar essa comunidade aqui fez com que eu
            não desistisse ou desanimasse. Voc6es mostram que é possível de
            forma inspiradora, e eu agradeço muito por isso!
          </p>
          <p>
            Desejo que cada vez mais meninas possam viver essa experiência 💜
          </p>
        </div>
      </div>

      <div className={styles.callToAction}>
        <p>
          Você já foi impactada pelo MeD? Entre em contato e nos conte sua
          história.
        </p>
        <button className={styles.button}>CONTAR MINHA HISTÓRIA</button>
      </div>
    </div>
  )
}

export default Testimonials

import React from 'react';
import styles from './TestimonialsSection.module.scss';

const TestimonialsSection = () => (
  <section className={styles.testimonials}>
    <h2>DEPOIMENTOS</h2>
    <blockquote>
      "Passando para compartilhar que, após 10 meses, consegui minha sonhada transição de carreira (saindo de RD para Dados)!!"
    </blockquote>
    <blockquote>
      "Obrigada por fazerem parte dessa trajetória comigo! Cada mentoria, conselho e dica, foram importantes demais pro meu desenvolvimento."
    </blockquote>
    <blockquote>
      "Hoje comecei um estágio em analytics. O mercado financeiro era minha prioridade na transição de carreira para dados e eu não poderia estar mais realizada."
    </blockquote>
    <div className={styles.shareStory}>
      <p>Você já foi impactada pelo MeD? Entre em contato e nos conte sua história.</p>
      <button>Contar minha história</button>
    </div>
  </section>
);

export default TestimonialsSection;

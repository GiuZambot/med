import { CaretRightOutlined } from '@ant-design/icons'
import type { CollapseProps } from 'antd'
import { Collapse } from 'antd'
import styles from './FAQ.module.scss'

const FAQ = () => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Onde posso acompanhar a agenda da comunidade?',
      children: (
        <p>
          Para acompanhar a agenda da comunidade, basta acessar o Google Agenda.
          No menu “Outras agendas”, clique em “Inscrever-se na agenda” e insira
          o e-mail contato@mulheresemdados.com.
        </p>
      ),
    },
    {
      key: '2',
      label: 'Quero divulgar uma vaga, como faço?',
      children: (
        <p>
          No nosso Discord, temos o canal #vagas, que é atualizado diariamente
          pelas mulheres da comunidade, incluindo recrutadoras e membros do MeD.
          Se a sua empresa deseja uma divulgação mais ampla e impulsionada nas
          redes sociais oficiais do MeD, entre em contato conosco pelo e-mail
          contato@mulheresemdados.com para discutir uma possível parceria.
        </p>
      ),
    },
    {
      key: '3',
      label: 'Como se tornar voluntária da comunidade?',
      children: (
        <p>
          Em nossa nova estrutura, nossas ações serão organizadas por meio de
          projetos. Se você deseja participar de algum deles, basta aguardar a
          abertura das inscrições, momento em que iniciaremos o processo
          seletivo. Acompanhe nossas redes sociais e fique de olho nos
          processos!
        </p>
      ),
    },
    {
      key: '4',
      label: 'Consigo criar portfólio participando da comunidade?',
      children: (
        <p>
          Com certeza! Nossa comunidade é o ambiente perfeito para quem deseja
          desenvolver um portfólio na área de dados. <br />
          <br />
          No nosso GitHub, você encontra um repositório (
          <a href="https://github.com/mulheresemdados/portfolios">
            https://github.com/mulheresemdados/portfolios
          </a>
          ) repleto de portfólios criados por mulheres, que podem servir de
          inspiração para você criar o seu próprio. Aproveite essa oportunidade
          para mostrar o seu talento e se destacar!
        </p>
      ),
    },
    {
      key: '5',
      label: 'Qual é o link de acesso a comunidade?',
      children: (
        <p>
          Nosso principal canal de interação da comunidade é o Discord, um
          espaço exclusivo para mulheres. O acesso é gratuito e será liberado
          após verificação pelas nossas moderadoras. Você pode se juntar a nós
          através deste link:
          <br />
          <br />
          <a href="https://discord.com/invite/mulheresemdados">
            https://discord.com/invite/mulheresemdados
          </a>
          .
        </p>
      ),
    },
    {
      key: '5',
      label: 'Como posso ajudar a comunidade?',
      children: (
        <p>
          Você pode contribuir com a nossa comunidade de diversas formas! A
          maneira mais simples é seguir o MeD em todas as nossas redes sociais e
          compartilhar os nossos conteúdos. Se quiser apoiar ainda mais, a
          partir de R$15, você pode se tornar um apoiador da nossa campanha no
          Apoia-se — basta clicar aqui e contribuir! <br />
          <br />(
          <a href="https://apoia.se/mulheresemdados">
            https://apoia.se/mulheresemdados
          </a>
          ) <br />
          Se preferir fazer uma doação única via PIX, sem o compromisso mensal
          do Apoia-se, nosso PIX é mulheresemdados@gmail.com. Agora, se você
          está disposta a colocar a mão na massa, junte-se a nós como voluntária
          em uma de nossas iniciativas. Cada contribuição é valiosa e faz a
          diferença! Para mais detalhes, confira este post no Medium:
          <br />
          <br />
          <a href="https://medium.com/mulheres-em-dados/como-voc%C3%AA-pode-contribuir-com-a-comunidade-mulheres-em-dados-10e7b4f84808">
            https://medium.com/mulheres-em-dados/como-voc%C3%AA-pode-contribuir-com-a-comunidade-mulheres-em-dados-10e7b4f84808
          </a>
        </p>
      ),
    },
    {
      key: '5',
      label: 'Quais são os projetos que a comunidade oferece?',
      children: (
        <p>
          Nossa comunidade oferece diversos recursos gratuitos para ajudar no
          seu desenvolvimento na área de dados! No nosso GitHub, você encontra
          trilhas de estudo completas, ideais para quem está começando. No
          YouTube, temos uma variedade de conteúdos gravados sobre SQL, Python,
          Data Visualization e muito mais. E no Spotify, você pode ouvir
          conversas descontraídas com mulheres que atuam na área de dados,
          compartilhando experiências e dicas valiosas. 
        </p>
      ),
    },
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>PERGUNTAS FREQUENTES</h2>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className={styles.collapse}
        expandIconPosition="end"
      >
        {items.map((item) => (
          <Collapse.Panel
            header={item.label}
            key={item.key!.toString()}
            className={styles.panelStyle}
          >
            <p>{item.children}</p>
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  )
}

export default FAQ

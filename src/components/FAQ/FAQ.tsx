import { Collapse } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import type { CollapseProps } from 'antd'
import styles from './FAQ.module.scss'

const FAQ = () => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'O que é a comunidade?',
      children: <p>A comunidade é um espaço para...</p>,
    },
    {
      key: '2',
      label: 'Quem pode entrar?',
      children: <p>Qualquer pessoa interessada em...</p>,
    },
    {
      key: '3',
      label: 'Vocês aceitam parcerias?',
      children: <p>Sim, estamos abertos a parcerias...</p>,
    },
    {
      key: '4',
      label: 'Como sugerir uma parceria?',
      children: <p>Você pode sugerir uma parceria enviando...</p>,
    },
    {
      key: '5',
      label: 'Como posso ser uma voluntária?',
      children: <p>Para se voluntariar, basta...</p>,
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

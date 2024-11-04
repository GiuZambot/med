import CountUp from 'react-countup'
import styles from './BigNumbers.module.scss'

import IconArrowUp from '../../assets/Count.png'

const BigNumbers = () => {
  const bigNumbers = [
    { id: 1, label: 'Linkedin', value: 30 },
    { id: 2, label: 'Discord', value: 10 },
    { id: 3, label: 'Instagram', value: 9 },
    { id: 4, label: 'YouTube', value: 4 },
  ]

  return (
    <div className={styles.bigNumbersContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          NOSSOS BIG NUMBERS
          <img src={IconArrowUp} alt="arrow icon" className={styles.icon} />
        </h2>
        <p className={styles.subtitle}>(Onde já chegamos)</p>
      </div>
      <div className={styles.numbersContainer}>
        {bigNumbers.map((item) => (
          <div key={item.id} className={styles.numberBox}>
            <CountUp
              start={0}
              end={item.value}
              duration={3}
              className={styles.count}
              enableScrollSpy
              scrollSpyDelay={200}
              suffix="K"
            />
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BigNumbers

import styles from './WhatWeDo.module.scss'

import Icon1 from '../../assets/Vector.png'
import Icon2 from '../../assets/Camada_1.png'
import Icon3 from '../../assets/Camada_2.png'

const WhatWeDo = () => {
  const activities = [
    { id: 0, label: '', icon: Icon2, color: '#FE6000' },
    { id: 1, label: 'networking', icon: '', color: '#ACB731' },
    { id: 2, label: '', icon: Icon1, color: '#FFA0CD' },
    { id: 3, label: 'mentoria', icon: '', color: '#FE6000' },
    { id: 4, label: 'acolhimento', icon: '', color: '#F48BBD' },
    { id: 5, label: 'educação', icon: '', color: '#05AA8E' },
    { id: 6, label: 'aulas', icon: '', color: '#65ABD1' },
    { id: 7, label: '', icon: Icon3, color: '#D8E267' },
    { id: 8, label: 'meetups', icon: '', color: '#FE6000' },
    { id: 9, label: 'escuta', icon: '', color: '#ACB731' },
    {
      id: 10,
      label: 'trilhas de conteúdo',
      icon: '',
      color: '#05AA8E',
    },
    { id: 11, label: 'ajuda', icon: '', color: '#F48BBD' },
  ]

  return (
    <div className={styles.whatWeDoContainer}>
      <h2 className={styles.title}>O QUE FAZEMOS?</h2>
      <div className={styles.activitiesContainer}>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={styles.activity}
            style={
              activity.icon
                ? { backgroundColor: activity.color }
                : { color: activity.color }
            }
          >
            {activity.icon && (
              <img
                src={activity.icon}
                alt={activity.label}
                className={styles.icon}
              />
            )}
            <span className={styles.label} style={{ color: activity.color }}>
              {activity.label}
            </span>
          </div>
        ))}
      </div>
      <p className={styles.footerText}>E tudo isso gratuitamente!</p>
    </div>
  )
}

export default WhatWeDo

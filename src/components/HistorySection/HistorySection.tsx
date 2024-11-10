import styles from './HistorySection.module.scss'
import group35 from '../../assets/Group35.png'

const HistorySection = () => (
  <section className={styles.historySection}>
    <div className={styles.content}>
      <h2>NOSSA HISTÓRIA</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ante ultrices, imperdiet tortor vitae, egestas neque.
        Curabitur nec elit neque. Nullam quis metus at neque eleifend ultricies a nec nibh. Mauris purus arcu, placerat id 
        tristique non, blandit quis est. Sed vitae iaculis lorem. Vestibulum enim metus, malesuada non tristique et, 
        interdum eget purus. Morbi a elementum elit. Praesent ut interdum libero, non eleifend massa. Vestibulum 
        vehicula velit et dolor posuere, et malesuada nisi tristique.
      </p>
      <p>
        Morbi a justo nec metus tincidunt dignissim. Maecenas placerat luctus molestie. Nam viverra pharetra sem et tempor.
        Nulla maximus congue lorem sit amet tristique. Pellentesque tempus sodales est vitae faucibus. Sed a porttitor leo. 
        Vestibulum elementum, justo ac eleifend convallis, nibh ipsum pretium diam, in sodales diam arcu eget dolor. Nulla non 
        magna augue.
      </p>
    </div>
    <div className={styles.imageWrapper}>
      <img src={group35} alt="Ilustração da equipe Mulheres em Dados" />
    </div>
  </section>
)

export default HistorySection

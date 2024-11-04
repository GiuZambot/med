import styles from "./OurSupporters.module.scss";
import zoho from '../../assets/zoho.png'

const OurSupporters = () => {
  return (
    <div className={styles.container}>
      <span>MARCAS QUE NOS APOIAM</span>
      <div className="supporter">
        <img src={zoho} alt='Zoho Analytics logo' />
      </div>
    </div>
  );
};

export default OurSupporters;

import { CardType } from "../../Constant/data";
import styles from "./Card.module.scss";

const Card = ({ title, subtitle, icon, show }: CardType) => {
  return (
    <div key={title} className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;

import { cardData } from "../../Constant/data";
import Card from "../Card/Card";
import { FcSearch } from "react-icons/fc";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input type="text" placeholder="Choose Bike Here" />
        <span className={styles.icon}>
          <FcSearch />
        </span>
      </div>

      <div className={styles.slider}>
        <img src={require("./cs.JPG")} />
      </div>
      <div className={styles.CardContainer}>
        {cardData.map((x) => (
          <Card title={x.title} subtitle={x.subtitle} icon={x.icon} />
        ))}
      </div>
    </div>
  );
};

export default Home;

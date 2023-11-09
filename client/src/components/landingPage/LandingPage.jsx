import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import mundo from "../../assets/mundopequeño.png";
import paises from "../../assets/paisesrueda.png";

const LandingPage = () => {
  return (
    <div className={styles["landing-page"]}>
      <div className={styles["images-container"]}>
        <img src={paises} className={styles["paises-image"]} alt="" />
        
        <div className={styles["mundo-container"]}>
          <img src={mundo} className={styles["mundo-image"]} alt="" />
        </div>
        
        <Link to="/home">
          <button
            className={`${styles["center-button"]} ${styles["palpitar"]}`}>
            Comenzar
          </button>
        </Link>
      
      </div>
    </div>
  );
};

export default LandingPage;

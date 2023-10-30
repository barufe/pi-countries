import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={styles["landing-page"]}>
      <h1 className={styles["heading"]}>Countries</h1>
      <Link to="/home">
        <button className={styles["nav-button"]}>Home</button>
      </Link>
    </div>
  );
};

export default LandingPage;

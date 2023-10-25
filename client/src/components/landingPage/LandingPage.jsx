import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // Importa useDispatch para disparar acciones
import { loadCountries } from "../../redux/actions/actions";

const LandingPage = () => {
  const dispatch = useDispatch();

  const handleCountries = () => {
     dispatch(loadCountries());
  };

  return (
    <div className={styles["landing-page"]}>
      <h1 className={styles["heading"]}>Countries</h1>
      <Link to="/home">
        <button className={styles["nav-button"]} onClick={handleCountries}>
          Home
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;

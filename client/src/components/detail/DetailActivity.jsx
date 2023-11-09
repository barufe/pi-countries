import exito from "../../assets/exito.png";
import { Link } from "react-router-dom";
import styles from "./DetailActivity.module.css"; 

const DetailActivity = () => {
    return (
        <div className={styles.container}>
            <img src={exito} alt="Éxito" className={styles.image} />
            <h2>Tu actividad se creó satisfactoriamente</h2>
            <Link to="/home" className={styles.button}>
                Volver a home
            </Link>
        </div>
    );
};

export default DetailActivity;

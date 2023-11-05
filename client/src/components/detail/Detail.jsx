import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCountrieById } from "../../redux/actions/actions";
import styles from "./Detail.module.css"; // Importa los estilos
import { formatNumber } from "../../constants/functionsGeneral";

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);
  const [error, setError] = useState(false);

  useEffect(() => {
    dispatch(getCountrieById(params?.id))
      .then(() => setError(false))
      .catch(() => setError(true));
  }, [params]);

  return (
    <div className={styles.detailContainer}>
      {error ? (
        <div className={styles.errorContainer}>
          <img
            src="https://www.hostingplus.pe/wp-content/uploads/2020/02/error.jpg"
            alt="Error"
          />
          <h2>No se encontró el país</h2>
        </div>
      ) : (
        <div className={styles.countryDetails}>
          {countryDetail ? (
            <div>
              <div>
                <img src={countryDetail.flag_image} alt="" />
                <h2>Nombre del país: {countryDetail.name}</h2>
                <p>Capital: {countryDetail.capital}</p>
                <p>Subregión: {countryDetail.subregion}</p>
                <p>Area: {formatNumber(countryDetail.area)} km²</p>
                <p>Población: {formatNumber(countryDetail.population)}</p>

                {/* Mostrar otros detalles de 'countryDetail' según la estructura de datos */}
              </div>
              <div className="activities-container">
                <h2>Actividades</h2>
                {countryDetail.Activities.map((activity) => (
                  <div key={activity.id} className="activity-card">
                    <h3>{activity.name}</h3>
                    <p>Dificultad: {activity.difficulty}</p>
                    <p>Duración: {activity.duration} horas</p>
                    <p>Temporada: {activity.season}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Detail;

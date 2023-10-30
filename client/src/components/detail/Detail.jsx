import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCountrieById } from "../../redux/actions/actions";
import styles from "./Detail.module.css"; // Importa los estilos

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);
  const [error, setError] = useState(false);

  useEffect(() => {
    dispatch(getCountrieById(params?.id))
      .then(() => setError(false))
      .catch(() => setError(true));
  }, [dispatch, params]);

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
              <img src={countryDetail.flag_image} alt="" />
              <h2>Nombre del país: {countryDetail.name}</h2>
              <p>Capital: {countryDetail.capital}</p>
              <p>Subregión: {countryDetail.subregion}</p>
              <p>Area: {countryDetail.area}</p>
              <p>Poblacion: {countryDetail.population}</p>

              {/* Mostrar otros detalles de 'countryDetail' según la estructura de datos */}
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

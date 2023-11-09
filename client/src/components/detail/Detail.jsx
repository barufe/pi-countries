import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCountrieById } from "../../redux/actions/actions";
import { formatNumber } from "../../constants/functionsGeneral";
import styles from "./Detail.module.css"; 

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
      {error 
      ? (<div className={styles.errorContainer}>
          <img
            src="https://www.hostingplus.pe/wp-content/uploads/2020/02/error.jpg"
            alt="Error"
          />
          <h2>No se encontró el país</h2>
        </div>) 
      : (<div className={styles.countryDetail}>
          {countryDetail 
          ? (<div className={styles.countryCard}>
              <img className={styles.img} src={countryDetail.flag_image} alt=""/>
              <h2>Nombre del país: {countryDetail.name}</h2>
              <p>Capital: {countryDetail.capital}</p>
              <p>Subregión: {countryDetail.subregion}</p>
              <p>Area: {formatNumber(countryDetail.area)} km²</p>
              <p>Población: {formatNumber(countryDetail.population)}</p>
            </div>) 
          : (<p>Cargando...</p>)}
        </div>)}

      <div className={styles.activitiesContainer}>
        {countryDetail && countryDetail.Activities.length >= 1 
        ? (<div>
            <h2 className={styles.title}>Actividades</h2>
            {countryDetail &&
              countryDetail.Activities.map((activity) => (
                <div key={activity.id} className={styles.activityCard}>
                  <h3>{activity.name}</h3>
                  <p>Dificultad: {activity.difficulty}</p>
                  <p>Duración: {activity.duration} horas</p>
                  <p>Temporada: {activity.season}</p>
                </div>
              ))}
          </div>) 
        : (<p className={styles.noData}> No se encontraron actividades, puedes cargar información desde Home </p>)}
      </div>
    </div>
  );
};

export default Detail;

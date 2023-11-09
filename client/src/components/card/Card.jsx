import React, { useState } from "react";
import { formatNumber } from "../../constants/functionsGeneral";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

const Card = ({id,name,flag_image,continents,capital,subregion,area,population,}) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleClick}>

      <div className={styles.cardFront}>
        <Link to={`/detail/${id}`} className={styles.cardName}>
          <h2 className={styles.cardTitle}>{name}</h2>
        </Link>
        <img src={flag_image} alt={name} className={styles.cardImage} />
        <h2 className={styles.cardContinent}>Continente: {continents}</h2>
      </div>

      <div className={styles.cardBack}>
        <Link to={`/detail/${id}`} className={styles.cardName}>
          <h2>Nombre: {name}</h2>
        </Link>
        <p>Capital: {capital}</p>
        {subregion && <p>Subregión: {subregion}</p>}
        {area && <p>Área: {formatNumber(area)} km²</p>}
        <p>Población: {formatNumber(population)}</p>
        <div className={styles.info}>
          <p>Haz click al nombre para ver las actividades</p>
        </div>
      </div>

    </div>
  );
};

export default Card;

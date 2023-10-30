import React from 'react';
import Card from '../card/Card';
import styles from './Cards.module.css'; // Importa los estilos

const Cards = ({ countries }) => {
  console.log(`Estoy recibiendo la información data ${countries}`);

  if (!countries || !Array.isArray(countries)) {
    return <div>No se han encontrado países.</div>;
  }

  
  return (
    <div className={styles.cardsContainer}>
      {countries.map(({ id, name, flag_image, continents, capital, subregion, area, population }) => (
        <div key={id} className={styles.card}>
          <Card
            id={id}
            name={name}
            flag_image={flag_image}
            continents={continents}
            capital={capital}
            subregion={subregion}
            area={area}
            population={population}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
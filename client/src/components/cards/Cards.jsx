/* import React from 'react';
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

export default Cards; */

import React, { useState } from 'react';
import Card from '../card/Card';
import styles from './Cards.module.css'; // Importa los estilos

const Cards = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  if (!countries || !Array.isArray(countries)) {
    return <div>No se han encontrado países.</div>;
  }

  // Lógica para calcular los índices de los elementos a mostrar en la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = countries.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(countries.length / cardsPerPage);

  return (
    <div className={styles.cardsContainer}>
      {currentCards.map(({ id, name, flag_image, continents, capital, subregion, area, population }) => (
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
      {/* Botones para cambiar de página */}
      <div className={styles.footer}>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>   Página {currentPage} de {totalPages}   </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastCard >= countries.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Cards;

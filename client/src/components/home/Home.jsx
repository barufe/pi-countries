import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getCountries,getActivities,getCountriesByName,orderCountries,orderByPopulation,filterActivities,filterContinents,} from "../../redux/actions/actions";
import Cards from "../cards/Cards";
import NavBar from "../navBar/NavBar";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  const handleFilterByName = (name) => {
    setCurrentPage(1);
    dispatch(getCountriesByName(name));
  };

  const handleOrder = (event) => {
    setCurrentPage(1);
    dispatch(orderCountries(event));
  };

  const handleOrderByPopulation = (event) => {
    setCurrentPage(1);
    dispatch(orderByPopulation(event));
  };

  const handleFilter = (event) => {
    setCurrentPage(1);
    dispatch(filterContinents(event));
  };

  const handleFilterActivities = (event) => {
    setCurrentPage(1);
    dispatch(filterActivities(event));
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={styles.homeContainer}>
      <NavBar 
      onSearch={handleFilterByName} 
      onFilter={handleFilter} 
      onFilterActivities={handleFilterActivities} 
      onOrder={handleOrder} 
      onOrderByPopulation={handleOrderByPopulation}
      />
      
      {!filteredCountries.length > 0 || !Array.isArray(filteredCountries) 
      ? <div className={styles.error}> No se han encontrado países.</div> 
      : (<div>
          <Cards
            countries={filteredCountries}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            cardsPerPage={cardsPerPage}
          />
        <div className={styles.footer}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >Anterior
          </button>
          <span>
            Página {currentPage} de {Math.ceil(filteredCountries.length / cardsPerPage)}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage * cardsPerPage >= filteredCountries.length}
          >Siguiente</button>
        </div>
        </div>
        )}
    </div>
  );
};

export default Home;

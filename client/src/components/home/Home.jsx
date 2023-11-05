// Home.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCountries,
  getActivities,
  getCountriesByName,
  orderCountries,
  orderByPopulation,
  filterActivities,
  filterContinents,
} from "../../redux/actions/actions";
import Cards from "../cards/Cards";
import SearchBar from "../searchBar/SearchBar";
import styles from "./Home.module.css";


const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const [error, setError] = useState(false);

  const [aux, setAux] = useState(false);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities()); // Recibo mis actividades
  }, [dispatch]);

  const handleFilterByName = (name) => {
    dispatch(getCountriesByName(name));
    setCurrentPage(1); 
    aux ? setAux(false) : setAux(true);
  };

  const handleOrder = (event) => {
    dispatch(orderCountries(event));
    setCurrentPage(1); 
    aux ? setAux(false) : setAux(true);
  };

  const handleOrderByPopulation = (event) => {
    dispatch(orderByPopulation(event));
    setCurrentPage(1); 
    aux ? setAux(false) : setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterContinents(event));
    setCurrentPage(1); 
    aux ? setAux(false) : setAux(true);
  };

  const handleFilterActivities = (event) => {
    dispatch(filterActivities(event));
    setCurrentPage(1); 
    aux ? setAux(false) : setAux(true);
  };

  return (
    <div className={styles.homeContainer}>
      <h2>Estamos en home</h2>
      <SearchBar
        onSearch={handleFilterByName}
        onFilter={handleFilter}
        onFilterActivities={handleFilterActivities}
        onOrder={handleOrder}
        onOrderByPopulation={handleOrderByPopulation}
      />
      {error ? ( // Verifica si hay un error y muestra el mensaje correspondiente
        <div>No se han encontrado países con ese nombre.</div>
      ) : (
        <Cards
          countries={
            filteredCountries} currentPage={currentPage} setCurrentPage={setCurrentPage} cardsPerPage={cardsPerPage}
        />
      )}
    </div>
  );
};

export default Home;

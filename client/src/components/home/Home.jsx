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
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const [error, setError] = useState(false);

  const [aux, setAux] = useState(false);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities()); // Recibo mis actividades
  }, [dispatch]);

  const handleFilterByName = (name) => {
    dispatch(getCountriesByName(name));
    aux ? setAux(false) : setAux(true);
  };

  const handleOrder = (event) => {
    dispatch(orderCountries(event));
    aux ? setAux(false) : setAux(true);
  };

  const handleOrderByPopulation = (event) => {
    dispatch(orderByPopulation(event));
    aux ? setAux(false) : setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterContinents(event));
    aux ? setAux(false) : setAux(true);
  };
  const handleFilterActivities = (event) => {
    dispatch(filterActivities(event));
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
            filteredCountries.length > 0 ? filteredCountries : countries
          }
        />
      )}
    </div>
  );
};

export default Home;

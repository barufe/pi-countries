// Home.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCountries,
  orderCountries,
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
  }, [dispatch]);

  const handleOrder = (event) => {
    dispatch(orderCountries(event.target.value));
    aux ? setAux(false) : setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterContinents(event.target.value));
    aux ? setAux(false) : setAux(true);
  };

  const handleSearch = (name) => {
    if (name) {
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );
      setFilteredCountries(filtered);
      setError(filtered.length === 0); // Establece error si no hay coincidencias
    } else {
      setFilteredCountries([]);
      setError(false);
    }
  };

  return (
    <div className={styles.homeContainer}>
      <h2>Estamos en home</h2>
      <SearchBar onSearch={handleSearch} />

      <button>
        <Link to="/activity">Crear actividad</Link>
      </button>

      {/*ORDENAR ASC_DES DEBERIA IR AL SEARCHBAR */}
      <div>
        <select onChange={handleOrder} disabled={false}>
          <option value="none" hidden>
            Ordenar
          </option>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
      </div>

      {/* Dropdown para filtrar por continente */}
      <select onChange={handleFilter}>
        <option value="Todos">Todos los continentes</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="North America">Norte América</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">Sur América</option>
        {/* Agrega más opciones según tus datos */}
      </select>

      {/*FILTRAR POR CONTINENTE DEBERIA IR AL SEARCHBAR */}

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

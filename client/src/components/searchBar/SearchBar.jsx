// SearchBar.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";

const SearchBar = ({
  onSearch,
  onFilter,
  onFilterActivities,
  onOrder,
  onOrderByPopulation,
}) => {
  const [name, setName] = useState("");
  const activities = useSelector((state) => state.countriesWitchActivities);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    onSearch(name);
  };

  const handleOrder = (event) => {
    onOrder(event.target.value);
  };
  const handleOrderByPopulation = (event) => {
    onOrderByPopulation(event.target.value);
  };

  const handleFilter = (event) => {
    document.getElementById("filterActivity").selectedIndex = 0;
    document.getElementById("order").selectedIndex = 0;
    document.getElementById("orderPopulation").selectedIndex = 0;
    onFilter(event.target.value);
  };

  const handleFilterActivities = (event) => {
    document.getElementById("order").selectedIndex = 0;
    document.getElementById("orderPopulation").selectedIndex = 0;
    document.getElementById("filterContinent").selectedIndex = 0;

    onFilterActivities(event.target.value);
  };

  const activityOptions = Array.from(
    new Set(
      Array.isArray(activities)
        ? activities.flatMap((country) =>
            country.Activities.map((activity) => activity.name)
          )
        : []
    )
  );
  // Ordenar
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <input
            type="search"
            placeholder="Escribe un nombre"
            value={name}
            onChange={handleChange}
          />
        </li>
        <li>
          <button onClick={handleSearch}>Buscar</button>
        </li>
        <li>
          <select id="filterContinent" onChange={handleFilter}>
            <option value="none" hidden>
              Filtrar por continente
            </option>
            <option value="Todos">Todos los continentes</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="North America">Norte América</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">Sur América</option>
          </select>
        </li>
        <li>
          <select id="filterActivity" onChange={handleFilterActivities}>
            <option value="none" hidden>
              Filtrar por actividad
            </option>
            <option value="Todos">Todos</option>
            {activityOptions.map((activity, index) => (
              <option key={index} value={activity}>
                {activity}
              </option>
            ))}
          </select>
        </li>
        <li>
          <select id="order" onChange={handleOrder} disabled={false}>
            <option value="none" hidden>
              Ordenar por nombre
            </option>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
          </select>
        </li>
        <li>
          <select
            id="orderPopulation"
            onChange={handleOrderByPopulation}
            disabled={false}
          >
            <option value="none" hidden>
              Ordenar por población
            </option>
            <option value="mayor">Mayor</option>
            <option value="menor">Menor</option>
          </select>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/activity">Crear actividad</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SearchBar;

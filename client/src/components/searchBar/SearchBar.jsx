// SearchBar.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchBar = ({
  onSearch,
  onFilter,
  onFilterActivities,
  onOrder,
  onOrderByPopulation,
}) => {
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");

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
    onFilter(event.target.value);
  };

  const handleFilterActivities = (event) => {
    onFilterActivities(event.target.value);
  };
  const activityOptions = Array.from(
    new Set(
      activities.flatMap((country) =>
        country.Activities.map((activity) => activity.name)
      )
    )
  );

  // Ordenar

  return (
    <div>
      <input
        type="search"
        placeholder="Escribe un nombre"
        value={name}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Buscar</button>

      {/* Crear actividad */}
      <button>
        <Link to="/activity">Crear actividad</Link>
      </button>

      {/* Ordenar asc- des*/}
      <select onChange={handleOrder} disabled={false}>
        <option value="none" hidden>
          Ordenar
        </option>
        <option value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>
      </select>

      {/* Filtrar por continente */}
      <select onChange={handleFilter}>
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

      <select onChange={handleOrderByPopulation} disabled={false}>
        <option value="none" hidden>
          Ordenar por población
        </option>
        <option value="mayor">Mayor</option>
        <option value="menor">Menor</option>
      </select>

      <select id="activitySelector" onChange={handleFilterActivities}>
        <option value="none" hidden>
          Filtrar por actividad
        </option>
        <option value="Todas">Todas</option>
        {activityOptions.map((activity, index) => (
          <option key={index} value={activity}>
            {activity}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;

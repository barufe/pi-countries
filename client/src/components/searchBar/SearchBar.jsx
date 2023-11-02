// SearchBar.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';


const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState("");
  
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    onSearch(name);
  };
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
      <button><Link to="/activity">Crear actividad</Link></button>
      {/*  */}
    </div>
  );
};

export default SearchBar;

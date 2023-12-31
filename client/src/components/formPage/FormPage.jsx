import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { createActivity, getCountries } from "../../redux/actions/actions";
import validateForm from "./validation";
import styles from "./FormPage.module.css";

const FormPage = () => {
  const countries = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});
  const [activity, setActivity] = useState({
    name: "",
    difficulty: "1",
    duration: "01:00",
    season: "Verano",
    countries: [],
  });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleCountryChange = (e) => {
  const selectedCountry = e.target.value;
    const updatedCountries = activity.countries.includes(selectedCountry)
      ? activity.countries.filter((country) => country !== selectedCountry)
      : [...activity.countries, selectedCountry];
    setActivity({ ...activity, countries: updatedCountries });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.entries(errors).length === 0) {
      dispatch(createActivity(activity)); 
      navigate('/detail/activity');
    }
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    if (
      activity.name !== "" ||
      activity.duration !== "" ||
      activity.difficulty !== "" ||
      activity.season !== "" ||
      activity.countries.length !== 0
    ) {
      const activityValidated = validateForm(activity);
      setErrors(activityValidated); }
  }, [activity]);

  return (
    <div className={styles.formContainer}>
      <h2> Crear Actividad </h2>
      <form onSubmit={handleSubmit} className={styles.form}>

        <div>
          <label>Nombre:</label>
          <input type="text" name="name" value={activity.name} onChange={handleChange}/>
          {errors.name !== "" && <p className={styles.error}>{errors.name}</p>}
        </div>

        <div>
          <label>Dificultad:</label>
          <select name="difficulty" value={activity.difficulty} onChange={handleChange}>
            <option value="1">Muy facil</option>
            <option value="2">Facil</option>
            <option value="3">Medio</option>
            <option value="4">Dificil</option>
            <option value="5">Muy Dificil</option>
          </select>
          {errors.difficulty && (<p className={styles.error}>{errors.difficulty}</p>)}
        </div>
        
        <div>
          <label>Duración en horas:</label>
          <input type="time" name="duration" value={activity.duration} onChange={handleChange}/>
          {errors.duration && <p className={styles.error}>{errors.duration}</p>}
        </div>
        
        <div>
          <label>Temporada:</label>
          <select name="season" value={activity.season} onChange={handleChange}>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
          {errors.season && <p className={styles.error}>{errors.season}</p>}
        </div>

        <div className={styles.countryCheckboxes}>
          <label>Países:</label>
          {countries.slice().sort((a, b) => a.name.localeCompare(b.name)).map((country) => (
              <div key={country.id}>
                <input type="checkbox" id={country.id} value={country.id} checked={activity.countries.includes(country.id)} onChange={handleCountryChange}/>
                <label htmlFor={country.id}>{country.name}</label>
              </div>
            ))}
          {errors.countries && (<p className={styles.error}>{errors.countries}</p>)}
        </div>
          <button type="submit" onClick={handleSubmit}>Crear actividad turística</button>
      </form>
    </div>
  );
};

export default FormPage;
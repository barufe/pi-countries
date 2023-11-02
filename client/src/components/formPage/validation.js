const validateForm = (activity) => {
    const errors = {};
  
    if (activity.name === "") {
      errors.name = "El campo no puede estar vacío";
    }
    if (/^[a-zA-Z]+$/.test(activity.name)){
      errors.name = "No puede contener numeros ni simbolos"
    }
    if (activity.difficulty === "") {
      errors.difficulty = "El campo no puede estar vacío";
    }
    if (activity.duration === "") {
      errors.duration = "El campo no puede estar vacío";
    }
    if (activity.season === "") {
      errors.season = "El campo no puede estar vacío";
    }
    if (activity.countries.length === 0) {
      errors.countries = "Debe seleccionar al menos un país";
    }
  
    return errors;
  };
  
  export default validateForm;
  
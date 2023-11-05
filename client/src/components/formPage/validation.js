const validateForm = (activity) => {
  const errors = {};

  if (activity.name === "") {
    errors.name = "El campo no puede estar vacío";
  }
   if (!/^[a-zA-Z]+$/.test(activity.name)){
      errors.name = "No puede contener numeros ni simbolos"
  } 

  if (activity.duration === "00:00") {
    errors.duration = "Debe seleccionar mas tiempo";
  }

  if (activity.countries.length === 0) {
    errors.countries = "Debe seleccionar al menos un país";
  }

  return errors;
};

export default validateForm;

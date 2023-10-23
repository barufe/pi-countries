const { Country, Activity } = require("../db");

// Ruta para crear una actividad turística y asociarla con países
const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    console.log(name, difficulty, duration, season, countries);
    // Validar que se proporcionen los datos necesarios
    if (!name || !difficulty || !countries || countries.length === 0) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    // Crear la actividad en la base de datos
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    // Asociar la actividad con los países seleccionados
    if (countries && countries.length > 0) {
      const countryModels = await Country.findAll({ where: { id: countries } });
      await newActivity.setCountries(countryModels);
    }

    return res.status(201).json(newActivity);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Error al crear la actividad turística" });
  }
};

module.exports = postActivity;

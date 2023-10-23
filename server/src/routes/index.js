const { Router } = require("express");
const getCountries = require("../controller/getCountries");
const getCountriesById = require("../controller/getCountriesById");
const getCountryByName = require("../controller/getCountryByName");
const postActivity = require("../controller/postActivity");
const getActivities = require("../controller/getActivities")

const router = Router();
router.get("/countries", async (req, res) => {
  const name = req.query.name;
  console.log(name);
  try {
    if (name) {
      console.log("Entre a busqueda por nombre");
      const countries = await getCountryByName(name);
      countries.length > 0
        ? res.status(200).json(countries)
        : res.status(404).json({ error: "No se encontro información" });
    } else {
      console.log("Entre a busqueda por todo");
      const countries = await getCountries();
      countries.length > 0
        ? res.status(200).json(countries)
        : res.status(404).json({ error: "No se cargo la información" });
    }
  } catch (error) {
    res.status(500).json({ error: "No se pudo cargar la información" });
  }
});

router.get("/countries/:idPais", getCountriesById);
router.post("/activities", postActivity);
router.get("/activities", getActivities)

module.exports = router;

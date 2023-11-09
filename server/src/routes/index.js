const { Router } = require("express");
const getCountries = require("../controller/getCountries");
const getCountrieById = require("../controller/getCountrieById");
const getCountryByName = require("../controller/getCountryByName");
const postActivity = require("../controller/postActivity");
const getActivities = require("../controller/getActivities");

const router = Router();

router.get("/countries", async (req, res) => {
  const name = req.query.name;
  try {
    if (name) {
      const countries = await getCountryByName(name);
      countries
        ? res.status(200).json(countries)
        : res.status(404).json({ error: "No se encontro información" });
    } else {
      const countries = await getCountries();
      countries.length > 0
        ? res.status(200).json(countries)
        : res.status(404).json({ error: "No se cargo la información" });
    }
  } catch (error) {
    res.status(500).json({ error: "No se pudo cargar la información" });
  }
});

router.get("/countries/:idPais", getCountrieById);
router.post("/activities", postActivity);
router.get("/activities", getActivities);

module.exports = router;

const { Router } = require("express");
const getCountries = require("../controller/getCountries");

const router = Router();

router.get("/countries", getCountries);

module.exports = router;

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // Define el modelo 'Country'
  const Country = sequelize.define('Country', {
    id: {
      type: DataTypes.STRING, // cca3
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING, // name.official
      allowNull: false,
    },
    flag_image: {
      type: DataTypes.STRING, // flags.png
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING, // continents[]
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING, // capitalInfo.latlng []
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING, // subregion
      allowNull: false,
    },
    area: {
      type: DataTypes.INTEGER, // area
    },
    population: {
      type: DataTypes.INTEGER, //population
      allowNull: false,
    },
  }, { timestamps: false });
};
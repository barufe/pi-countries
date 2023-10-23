const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // Define el modelo 'Country'
  const Country = sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING, // cca3
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
      flag_image: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
      continents: {
        type: DataTypes.ARRAY(DataTypes.STRING), 
        allowNull: false,
      },
      capital: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        //  allowNull: false, // ME DICE QUE ES OBLIGATORIO PERO ALGUNO LO TRAE VACIO
      },
      subregion: {
        type: DataTypes.STRING, 
        //allowNull: false, // ME DICE QUE ES OBLIGATORIO PERO ALGUNO LO TRAE VACIO
      },
      area: {
        type: DataTypes.FLOAT, 
      },
      population: {
        type: DataTypes.INTEGER, 
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // Define el modelo 'Activity'
  const Activity = sequelize.define("Activity", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoincrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      allowNull: false,
    },
    duration: {
      type: DataTypes.FLOAT,
    },
    season: {
      type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
    },
  });
};

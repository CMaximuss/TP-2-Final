import { DataTypes, Model } from "sequelize";
import conexion from "../conexion/conexion.js";

class Productos extends Model {}

Productos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
  },
  {
    sequelize: conexion,
    modelName: "Productos",
  }
);

export default Productos;

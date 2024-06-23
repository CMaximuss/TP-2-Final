import { DataTypes, Model } from "sequelize";
import conexion from "../conexion/conexion.js";

class Productos extends Model {}

Productos.init(
  {
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
    modelName: "Producto",
  }
);

export default Productos;

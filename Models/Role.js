import { DataTypes, Model } from "sequelize";
import conexion from "../conexion/conexion.js";

class Role extends Model {}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      defaultValue:"user"
    },
  },
  {
    sequelize: conexion,
    modelName: "Role",
  }
);

export default Role;

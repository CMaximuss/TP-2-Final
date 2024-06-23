import { DataTypes, Model } from "sequelize";
import conexion from "../conexion/conexion.js";

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue:2
    },
  },
  {
    sequelize: conexion,
    modelName: "User",
  }
);

export default User;

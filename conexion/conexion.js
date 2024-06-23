import { Sequelize } from "sequelize";
import {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT,
  DB_PROT,
} from "../config/config.js";

const conexion = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: DB_PROT,
});

try {
  await conexion.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default conexion;

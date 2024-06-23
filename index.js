import express from "express";
import enrutador from "./rutas/enrutador.js";
import { notFound } from "./midlewares/notFound.js";
import conexion from "./conexion/conexion.js";
import { PORT } from "./config/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", enrutador);

app.use(notFound);

await conexion.sync({force:false});

app.listen(PORT, () => {
  console.log("server ok");
});

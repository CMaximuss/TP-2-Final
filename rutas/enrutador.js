import { Router } from "express";
import rutasProducto from "./rutasProducto.js";
import rutasUsuario from "./rutasUsuario.js";

const enrutador = Router();

enrutador.use("/usuarios", rutasUsuario);
enrutador.use("/productos", rutasProducto);

export default enrutador;

import { Router } from "express";
import UserControllers from "../Controllers/UserControllers.js";
const rutasUsuario = Router();

const userControllers = new UserControllers();

rutasUsuario.get("/",userControllers.mostrarUser);
rutasUsuario.get("/:id", userControllers.mostrarUserPorId);
rutasUsuario.post("/", userControllers.crearUser);
rutasUsuario.put("/:id", userControllers.actualizarUnUsuario);
rutasUsuario.delete("/:id", userControllers.eliminarUnUsuario);

export default rutasUsuario;

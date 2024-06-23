import { Router } from "express";
import UserControllers from "../Controllers/UserControllers.js";
const rutasUsuario = Router();

const userControllers = new UserControllers();

rutasUsuario.get("/",userControllers.mostrarUser);
rutasUsuario.get("/:id", (req, res) => {
  res.send("get  usuarios  por id");
});
rutasUsuario.post("/", userControllers.crearUser);
rutasUsuario.put("/:id", (req, res) => {
  res.send("put usuario ");
});
rutasUsuario.delete("/:id", (req, res) => {
  res.send("delete usuario ");
});

export default rutasUsuario;

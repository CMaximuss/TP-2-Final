import { Router } from "express";
import { log } from "../midlewares/log.js";
import ProductosControllers from "../Controllers/ProductosControllers.js";
//import conexion from "../conexion/conexion.js";
//console.log(`conexion:`, conexion)

const productosControllers = new ProductosControllers();
const rutasProducto = Router();

//rutasProducto.get("/", async (req, res) => {
//try {
//const query = "SELECT nombre, precio FROM  Productos";
 //const data = await conexion.query(query);
 //res.status(200).send({ success: true, message: data });
//} catch (error) {
//res.status(500).send({ success: false, message: error.message });
 //}
 //});
rutasProducto.get("/", productosControllers.mostrarProductos);

rutasProducto.get("/:id", (req, res, next) => {
  res.send("get  producto  por id");
});
rutasProducto.post("/", productosControllers.crearProducto);
rutasProducto.put("/:id", (req, res) => {
  res.send("put producto ");
});
rutasProducto.use(log);
rutasProducto.delete("/:id", (req, res) => {
  res.send("delete producto ");
});

export default rutasProducto;

import { Router } from "express";
import { log } from "../midlewares/log.js";
import ProductosControllers from "../Controllers/ProductosControllers.js";


const productosControllers = new ProductosControllers();
const rutasProducto = Router();

rutasProducto.get("/", productosControllers.mostrarProductos);
rutasProducto.get("/:id", productosControllers.obtenerUnProducto);
rutasProducto.post("/", productosControllers.crearProducto);
rutasProducto.put("/:id",  productosControllers.actualizarProducto);
rutasProducto.delete("/:id", productosControllers.eliminarUnProducto);

rutasProducto.use(log);


export default rutasProducto;

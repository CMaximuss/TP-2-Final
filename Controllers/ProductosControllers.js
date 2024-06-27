import {Productos} from "../Models/index.js";

class ProductosControllers {
  constructor() {}

  obtenerUnProducto= async (req, res) => {
    try {
      const { id } = req.params;
      
      // Busca el producto por su ID
      const producto = await Productos.findByPk(id);
      
      if (!producto) {
        return res.status(404).send({ success: false, message: 'Producto no encontrado' });
      }
      
      res.status(200).send({ success: true, data: producto });
    } catch (error) {
      console.error('Error al obtener producto:', error); 
      res.status(500).send({ success: false, message: error.message });
    }
  };


  mostrarProductos = async (req, res) => {
    try {
      const data = await Productos.findAll();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };

  crearProducto= async (req, res) => {
    try {
      const { nombre, precio, cantidad, descripcion } = req.body;
      
      const nuevoProducto = await Productos.create({
        nombre,
        precio,
        cantidad,
        descripcion,
      });
      
      res.status(201).send({ success: true, data: nuevoProducto });
    } catch (error) {
      console.error('Error al crear producto:', error); 
      res.status(500).send({ success: false, message: error.message });
    }
  };


actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, cantidad, descripcion } = req.body;
    
    // Busca el producto por su ID
    const producto = await Productos.findByPk(id);
    
    if (!producto) {
      return res.status(404).send({ success: false, message: 'Producto no encontrado' });
    }
    
    // Actualiza el producto
    producto.nombre = nombre;
    producto.precio = precio;
    producto.cantidad = cantidad;
    producto.descripcion = descripcion;
    
    // Guarda los cambios
    await producto.save();
    
    res.status(200).send({ success: true, message: 'Producto actualizado exitosamente', data: producto });
  } catch (error) {
    console.error('Error al actualizar producto:', error); 
    res.status(500).send({ success: false, message: error.message });
  };
}

eliminarUnProducto= async (req, res) => {
  try {
    const { id } = req.params;
    
    // Busca el producto por su ID
    const producto = await Productos.findByPk(id);
    
    if (!producto) {
      return res.status(404).send({ success: false, message: 'Producto no encontrado' });
    }
    
    // Elimina el producto
    await producto.destroy();
    
    res.status(200).send({ success: true, message: 'Producto eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).send({ success: false, message: error.message });
  }
};



}
export default ProductosControllers;

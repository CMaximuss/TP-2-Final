import { User, Role } from "../Models/index.js";

class UserControllers {
  constructor() {}

  mostrarUser = async (req, res) => {
    try {
      const data = await User.findAll({
        attributes: ["name", "roleId"],
        include: [
          {
            model: Role,
            attributes: ["name"],
          },
        ],
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
  mostrarUserPorId = async (req, res) => {
      try {
        const { id } = req.params;
        const usuario = await User.findByPk(id);
        if (!usuario) {
          return res.status(404).send({ success: false, message: 'Usuario no encontrado' });
        }
        res.status(200).send({ success: true, data: usuario });
      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }
    };

  crearUser = async (req, res) => {
    try {
      const { name, password, roleId } = req.body;
      const data = await User.create({
        name,
        password,
        roleId,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };



actualizarUnUsuario= async (req, res) => {
  try {
    const { id } = req.params;
    const { name, password, roleId } = req.body;

    const usuario = await User.findByPk(id);
    if (!usuario) {
      return res.status(404).send({ success: false, message: 'Usuario no encontrado' });
    }

    // Actualizar los campos del usuario
    usuario.name = name || usuario.name;
    usuario.password = password || usuario.password;
    usuario.roleId = roleId || usuario.roleId;

    // Guardar los cambios en la base de datos
    await usuario.save();

    res.status(200).send({ success: true, data: usuario });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

eliminarUnUsuario= async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await User.findByPk(id);
    if (!usuario) {
      return res.status(404).send({ success: false, message: 'Usuario no encontrado' });
    }

    // Eliminar el usuario de la base de datos
    await usuario.destroy();

    res.status(200).send({ success: true, message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

}

export default UserControllers;

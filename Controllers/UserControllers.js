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
      const data = await User.findAll();
      res.status(200).send({ success: true, message: data });
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
}

export default UserControllers;

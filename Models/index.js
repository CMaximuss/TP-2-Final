import Productos from "./Productos.js";
import User from "./User.js";
import Role from "./Role.js";

Role.hasMany(User, {
  foreignKey: "roleId",
});
User.belongsTo(Role, {
  foreignKey: "roleId",
});

export { Productos, User, Role };

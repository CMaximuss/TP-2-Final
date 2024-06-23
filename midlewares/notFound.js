export const notFound = (req, res, next) => {
  res.status(404).send({ success: false, message: "No se encontro la direccion" });
  next();
};

export const testPublication = (req, res) => {
  return res.status(200).send({
    message: "mensaje enviado desde el controlador publication",
  });
};

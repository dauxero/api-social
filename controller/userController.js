export const testUser = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde el controlador de user",
  });
};

export const register = async (req, res) => {
  try {
    const { name, last_name, email, password, nick } = req.body;

    //validacion datos obligatorios
    if (!name || !last_name || !email || !password || !nick) {
      return res.status(400).json({
        status: "error",
        message: "Falta datos por enviar",
      });
    }
  } catch (error) {
    console.log("Error en el registro de usuario", error);
    res.status(500).json({
      status: "error",
      message: "error en registrar usuarios",
    });
  }
};

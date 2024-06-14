import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bd_socialnet");
    console.log("Conectado correctamente a la BD: bd_socialnet");
  } catch (error) {
    console.log(error);
    throw new error("¡No se ha podido conectar a la base de datos!");
  }
};

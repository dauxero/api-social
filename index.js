// Importaciones
import { connection } from "./database/connection.js";
import express from "express";
import cors from "cors";
import UserRouter from "./router/user.js";
import FollowRouter from "./router/follow.js";
import PublicationRouter from "./router/publication.js";
// Mensaje de bienvenida
console.log("API NODE arriba");

// Conexión a la BD
connection();

// Crear servidor de Node
const app = express();
const puerto = 3900;

// Configurar cors: permite que las peticiones se hagan correctamente
app.use(cors());

// Conversión de datos (body a objetos JS)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar rutas
app.use("/api/user", UserRouter);
ape.use("/api/follow", FollowRouter);
ape.use("/api/publication" / PublicationRouter);
app.get("/test-route", (req, res) => {
  return res.status(200).json({
    id: 1,
    name: "Inés María",
    username: "inesmaoria",
  });
});

// Configurar el servidor para escuchar las peticiones HTTP
app.listen(puerto, () => {
  console.log("Servidor de NODE corriendo en el puerto", puerto);
});

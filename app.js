import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

import cliente  from "./routes/cliente.js";
import bus  from "./routes/bus.js";
import ciudad  from "./routes/ciudad.js";
import conductor  from "./routes/conductor.js";
import ruta  from "./routes/ruta.js";
// import tiquete  from "./routes/tiquete.js";
import vendedor  from "./routes/vendedor.js";

mongoose.connect(`${process.env.DB}`)
  .then(() => console.log('Connected!'));

const app = express();
app.use(express.json());
app.use(   "/api/cliente",  cliente)
app.use(   "/api/bus",  bus)
app.use(   "/api/ciudad",  ciudad)
app.use(   "/api/conductor",  conductor)
app.use(   "/api/ruta",  ruta)
// app.use(   "/api/tiquete",  tiquete)
app.use(   "/api/vendedor",  vendedor)

app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});

// admin:{type:mongoose.Schema.Types.Objectid, ref: "admin"}

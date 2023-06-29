import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import "./database/connectDb.js";
import cliente  from "./routes/cliente.js";

mongoose.connect(`${process.env.DB}`)
  .then(() => console.log('Connected!'));

const app = express();
app.use(express.json());
app.use(   "/api/cliente",  cliente)

app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});

// admin:{type:mongoose.Schema.Types.Objectid, ref: "admin"}

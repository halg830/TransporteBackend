import express from "express";
import 'dotenv/config'
import mongoose from "mongoose";
// import persona  from "./routes/persona.js";

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));
  
const app = express()
app.use(express.json())
// app.use(   "/api/persona",  persona)


app.listen(process.env.PORT,()=>{
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  
})

// admin:{type:mongoose.Schema.Types.Objectid, ref: "admin"}

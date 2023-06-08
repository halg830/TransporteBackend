import express from "express";
import 'dotenv/config'
import persona  from "./routes/persona.js";


const app = express()
app.use(express.json())
app.use(   "/api/persona"   ,  persona)


app.listen(process.env.PORT,()=>{
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  
})
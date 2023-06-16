import express from "express";
import 'dotenv/config'
import mongoose from "mongoose";
<<<<<<< HEAD
// import persona  from "./routes/persona.js";
=======
/* import persona  from "./routes/persona.js"; */
>>>>>>> origin/master

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));
  
const app = express()
app.use(express.json())
<<<<<<< HEAD
// app.use(   "/api/persona",  persona)
=======
/* app.use(   "/api/persona",  persona) */
>>>>>>> origin/master


app.listen(process.env.PORT,()=>{
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  
})

<<<<<<< HEAD
// admin:{type:mongoose.Schema.Types.Objectid, ref: "admin"}
=======
// admin:{type:mongoose.Schema.Types.Objectid, ref: "admin"}

/* 

*/
>>>>>>> origin/master

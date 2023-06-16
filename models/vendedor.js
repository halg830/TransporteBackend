import mongoose from "mongoose";

const Schema = mongoose.Schema

const vendedor = new Schema({
<<<<<<< HEAD
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    cedula: { type: String, required: true },
    telefono: { type: String, required: true },
    usuario: { type: String, required: true },
    contraseña: { type: String, required: true },
    estado: { type: Number, default: 1 },
    createAd: { type: Date, default: Date.now }
=======
    nombre:{type: String, required: true},
    apellido:{type: String, required: true},
    cedula:{type: String, required: true},
    telefono:{type: String, required: true},
    usuario:{type: String, required: true},
    contraseña:{type: String, required: true},
    estado:{type: Number, default:1},
    createAd:{type: Date, default:Date.now}
>>>>>>> origin/master
})

export default mongoose.model("vendedor", vendedor)
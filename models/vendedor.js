import mongoose from "mongoose";

const Schema = mongoose.Schema

const vendedor = new Schema({
    nombre: { type: String, required: true, minlength: 8},
    apellido: { type: String, required: true },
    cedula: { type: String, required: true, minlength:10, maxlength: 10},
    telefono: { type: String, required: true, minlength:10, maxlength: 10 },
    usuario: { type: String, required: true, minlength: 6 },
    contraseña: { type: String, required: true },
    estado: { type: Number, default: 1 },
    createAd: { type: Date, default: Date.now }
})

export default mongoose.model("vendedor", vendedor)
import mongoose from "mongoose";

const Schema = mongoose.Schema

const conductor = new Schema({
    nombre: { type: String, require: true },
    cedula: { type: String, require: true, maxlength: 10 },
    edad: { type: Number },
    experiencia: { type: String, require: true },
    papeles: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Boolean, default: true },
})

export default mongoose.model("conductor", conductor)
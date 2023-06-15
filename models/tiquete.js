import mongoose from "mongoose";

const Schema = mongoose.Schema

const tiquete = new Schema({
    tiempo_salida:{type: String, require: true},
    fecha_salida:{type: String, require: true, maxlength:10},
    vendedor:{type:mongoose.Schema.Types.Objectid, ref: "vendedor"},
    ruta:{type:mongoose.Schema.Types.Objectid, ref: "ruta"},
    createdAt:{type: Date, default: Date.now},
    estado:{type: Number, default: 1},
    cliente:{type:mongoose.Schema.Types.Objectid, ref: "cliente"}
});

export default mongoose.model("tiquete", tiquete)
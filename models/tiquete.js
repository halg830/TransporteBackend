import mongoose from "mongoose";

const Schema = mongoose.Schema

const tiquete = new Schema({
    tiempo_salida:{type: String, require: true},
    fecha_salida:{type: String, require: true, maxlength:10},
    id_cliente:{type: Number, require: true},
    id_vendedor:{type: Number, require: true},
    id_ruta:{type: Number, requiere: true},
    createdAt:{type: Date, default: Date.now},
    estado:{type: Boolean, default: true},
    /* cliente:{type:mongoose.Schema.Types.Objectid, ref: "cliente"} */
});

export default mongoose.model("tiquete", tiquete)
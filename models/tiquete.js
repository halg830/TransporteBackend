import mongoose from "mongoose";

const Schema = mongoose.Schema

const tiquete = new Schema({
    tiempo_salida:{type: String, require: true},
    fecha_salida:{type: String, require: true, maxlength:10},
    createdAt:{type: Date, default: Date.now},
    status:{type: Boolean}
    /* cliente:{type:mongoose.Schema.Types.Objectid, ref: "cliente"} */
});

export default mongoose.model("tiquete", tiquete)
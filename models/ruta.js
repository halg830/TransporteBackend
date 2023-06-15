import mongoose from "mongoose";

const Schema = mongoose.Schema

const ruta = new Schema({
    ciudad_origen:{type:mongoose.Schema.Types.Objectid, ref: "ciudad"},
    ciudad_destino:{type:mongoose.Schema.Types.Objectid, ref: "ciudad"},
    hora_salida: {type: Date, required: true},
bus:{type:mongoose.Schema.Types.Objectid, ref: "bus"}
})

export default mongoose.model("ruta", ruta)
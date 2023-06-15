import mongoose from "mongoose";

const Schema = mongoose.Schema

const ruta = new Schema({
    ciudad_origen:{type:mongoose.Schema.Types.Objectid, ref: "ciudad", require: true},
    ciudad_destino:{type:mongoose.Schema.Types.Objectid, ref: "ciudad", require: true},
    hora_salida: {type: Date, required: true},
bus:{type:mongoose.Schema.Types.Objectid, ref: "bus"}
})

export default mongoose.model("ruta", ruta)
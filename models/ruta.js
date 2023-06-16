import mongoose from "mongoose";

const Schema = mongoose.Schema

const ruta = new Schema({
<<<<<<< HEAD
    ciudad_origen: { type: mongoose.Schema.Types.Objectid, ref: "ciudad" },
    ciudad_destino: { type: mongoose.Schema.Types.Objectid, ref: "ciudad" },
    hora_salida: { type: Date, required: true },
    bus: { type: mongoose.Schema.Types.Objectid, ref: "bus" }
=======
    ciudad_origen:{type:mongoose.Schema.Types.Objectid, ref: "ciudad", require: true},
    ciudad_destino:{type:mongoose.Schema.Types.Objectid, ref: "ciudad", require: true},
    hora_salida: {type: Date, required: true},
bus:{type:mongoose.Schema.Types.Objectid, ref: "bus"}
>>>>>>> origin/master
})

export default mongoose.model("ruta", ruta)
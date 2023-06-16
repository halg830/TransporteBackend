import mongoose from "mongoose";

const Schema = mongoose.Schema

const bus = new Schema({
<<<<<<< HEAD
    empresa: { type: String, require: true },
    asiento: { type: Number, require: true },
    placa: { type: String, maxlength: 7 },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 },
    conductor: { type: mongoose.Schema.Types.Objectid, ref: "conductor" }
=======
    empresa:{type: String, require: true},
    asiento:{type: Number, require: true},
    placa:{type: String, maxlength:7},
    createdAt:{type: Date, default: Date.now},
    estado:{type: Number, default: 1},
    conductor:{type:mongoose.Schema.Types.Objectid, ref: "conductor"}
>>>>>>> origin/master
})

export default mongoose.model("bu", bus)
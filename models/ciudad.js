import mongoose from "mongoose";

const Schema = mongoose.Schema

const ciudad = new Schema({
    nombre: { type: String, required: true },
    estado: { type: Number, default: 1 },
    createAd: { type: Date, default: Date.now }
})

export default mongoose.model("ciudad", ciudad)          
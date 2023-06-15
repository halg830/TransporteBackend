import mongoose from "mongoose";

const Schema = mongoose.Schema

const ciudad = new Schema({
    nombre:{type: String, required: true},
    estado:{type: Boolean, default: true},
    createAd:{type: Date, default:Date.now}
})

export default mongoose.model("ciudad", ciudad)
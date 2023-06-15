import mongoose from "mongoose";

const Schema = mongoose.Schema

const bu = new Schema({
    empresa:{type: String, require: true},
    asiento:{type: Number, require: true},
    placa:{type: String, maxlength:7},
    createdAt:{type: Date, default: Date.now},
    status:{type: Boolean}
});

export default mongoose.model("bus", bu)
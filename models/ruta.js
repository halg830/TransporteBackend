import mongoose from "mongoose";

const Schema = mongoose.Schema

const ruta = new Schema({
    origen:{type: String, required: true},
    destino:{type: String,required:true},
    hora_salida: {type: Date, required: true}
})
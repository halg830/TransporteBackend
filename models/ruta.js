import mongoose from "mongoose";

const Schema = mongoose.Schema

const ruta = new Schema({
    origen:{type: String, required: true},
    destino:{type: String,required:true},
    hora_salida: {type: Date, required: true},
    bus:{
        empresa:{type: String, require: true},
        asiento:{type: Number, require: true},
        placa:{type: String, maxlength:7},
        conductor:{
            nombre:{type: String, require: true},
            cedula:{type: String, require: true, maxlength:10},
            edad:{type: Number},
            experiencia:{type: String, require: true},
            papeles:{type:String, require: true},
            createdAt:{type: Date, default: Date.now},
            estado:{type: Boolean, default: true},
        },
        createdAt:{type: Date, default: Date.now},
        estado:{type: Boolean, default: true},
    }
})

export default mongoose.model("ruta", ruta)
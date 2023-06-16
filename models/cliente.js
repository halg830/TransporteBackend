import mongoose from "mongoose";

const Schema = mongoose.Schema

const cliente = new Schema({
<<<<<<< HEAD
    nombre: { type: String, require: true },
    cedula: { type: String, require: true, maxlength: 10 },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
=======
    nombre:{type: String, require: true},
    cedula:{type: String, require: true, maxlength:10},
    email:{type: String, require: true},
    password:{type: String, require: true, minlength:8, maxlength:15},
    mayor:{type: Boolean, default: false},
    createdAt:{type: Date, default: Date.now},
    estado:{type: Number, default: 1}
>>>>>>> origin/master
});

export default mongoose.model("cliente", cliente)
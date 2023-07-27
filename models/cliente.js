import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Cliente = new Schema({
  nombre: { type: String, require: true },
  cedula: { type: String, require: true, minlength:7, maxlength: 10 },
  contrasena: {type: String, require: true, minlength:8, maxlength:15},
  createdAt: { type: Date, default: Date.now },
  estado: { type: Number, default: 1 },
});

export default mongoose.model("Cliente", Cliente);

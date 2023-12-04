import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Conductor = new Schema({
  nombre: { type: String, require: true },
  cedula: { type: String, unique:true, require: true, minlength: 7, maxlength: 10 },
  telefono: { type: String, unique:true, require: true, minlength: 10, maxlength: 10 },
  num_licencia: { type: String, unique:true, require: true, minlength:7, maxlength:10 },
  email: { type: String, unique:true, require: true },
  createdAt: { type: Date, default: Date.now },
  estado: { type: Number, default: 1 },
});

export default mongoose.model("Conductor", Conductor);

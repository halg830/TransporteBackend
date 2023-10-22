import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Conductor = new Schema({
  nombre: { type: String, require: true, maxlength: 15 },
  cedula: { type: String, unique:true, require: true, minlength: 7 ,maxlength: 10 },
  createdAt: { type: Date, default: Date.now },
  estado: { type: Number, default: 1 },
});

export default mongoose.model("Conductor", Conductor);

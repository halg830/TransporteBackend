import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Conductor = new Schema({
  nombre: { type: String, require: true },
  cedula: { type: String, require: true, minlength: 7 ,maxlength: 10 },
  createdAt: { type: Date, default: Date.now },
  estado: { type: Boolean, default: true },
});

export default mongoose.model("Conductor", Conductor);

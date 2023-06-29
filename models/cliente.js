import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Cliente = new Schema({
  nombre: { type: String, require: true },
  cedula: { type: String, require: true, maxlength: 10 },
  createdAt: { type: Date, default: Date.now },
  estado: { type: Number, default: 1 },
});

export default mongoose.model("Cliente", Cliente);

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Tiquete = new Schema({
  vendedor: { type: mongoose.Schema.Types.ObjectId, ref: "vendedor" },
  ruta: { type: mongoose.Schema.Types.ObjectId, ref: "ruta" },
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "cliente" },
  createdAt: { type: Date, default: Date.now },
  estado: { type: Number, default: 1 },
});

export default mongoose.model("Tiquete", Tiquete);

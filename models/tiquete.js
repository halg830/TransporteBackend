import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Tiquete = new Schema({
  vendedor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendedor" },
  ruta: { type: mongoose.Schema.Types.ObjectId, ref: "Ruta" },
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" },
  fecha_salida: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  estado: { type: Number, default: 1 },
});

export default mongoose.model("Tiquete", Tiquete);

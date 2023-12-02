import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Ruta = new Schema({
  ciudad_origen: { type: mongoose.Schema.Types.ObjectId, ref: "Ciudad" },
  ciudad_destino: { type: mongoose.Schema.Types.ObjectId, ref: "Ciudad" },
  hora_salida: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  estado: { type: Number, default: 1 },
});

export default mongoose.model("Ruta", Ruta);

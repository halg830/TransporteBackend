import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Ruta = new Schema({
  ciudad_origen: { type: mongoose.Schema.Types.ObjectId, ref: "Ciudad" },
  ciudad_destino: { type: mongoose.Schema.Types.ObjectId, ref: "Ciudad" },
  hora_salida: { type: Date, required: true },
  fecha_salida: { type: Date, required: true },
  valor: { type: Number, required: true, minlength: 4 },
  bus: { type: mongoose.Schema.Types.ObjectId, ref: "Bu" },
});

export default mongoose.model("Ruta", Ruta);

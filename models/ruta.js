import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Ruta = new Schema({
  ciudad_origen: { type: mongoose.Schema.Types.ObjectId, ref: "ciudad" },
  ciudad_destino: { type: mongoose.Schema.Types.ObjectId, ref: "ciudad" },
  hora_salida: { type: Date, required: true },
  fecha_salida: { type: Date, required: true },
  valor: { type: Number, required: true, minlength: 4 },
  bus: { type: mongoose.Schema.Types.ObjectId, ref: "bus" },
});

export default mongoose.model("Ruta", Ruta);

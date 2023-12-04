import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Bus = new Schema({
  empresa: { type: String, require: true },
  asiento: { type: Number, require: true },
  placa: { type: String, index: "text", unique:true, maxlength: 7, require: true },
  numero: {type: String, require:true},
  conductor: { type: mongoose.Schema.Types.ObjectId, ref: "Conductor", require: true },
  createdAt: { type: Date, default: Date.now },
  estado: { type: Number, default: 1 },
});

export default mongoose.model("Bu", Bus);

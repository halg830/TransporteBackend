import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Ciudad = new Schema({
  nombre: { type: String, index: "text", required: true, unique: true },
  estado: { type: Number, default: 1 },
  createAd: { type: Date, default: Date.now },
});

export default mongoose.model("Ciudad", Ciudad);

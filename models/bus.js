const Schema = mongoose.Schema

const bu = new Schema({
    empresa:{type: String, require: true},
    asiento:{type: Number, require: true},
    placa:{type: String, maxlength:7}
});
const Schema = mongoose.Schema

const cliente = new Schema({
    nombre:{type: String, require: true},
    cedula:{type: String, require: true, maxlength:10},
    mayor:{type: boolean, default: false}
});
const Schema = mongoose.Schema

const tiquete = new Schema({
    tiempo_salida:{type: String, require: true},
    fecha_salida:{type: String, require: true, maxlength:10}
});
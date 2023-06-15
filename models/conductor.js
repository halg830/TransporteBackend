const Schema = mongoose.Schema

const conductor = new Schema({
    nombre:{type: String, require: true},
    cedula:{type: String, require: true, maxlength:10},
    edad:{type: Boolean, default: false},
    experiencia:{type: String, require: true},
    papeles:{type:String, require: true},
}); 
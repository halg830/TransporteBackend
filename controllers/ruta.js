import Ruta from "../models/ruta.js";
import Ciudad from "../models/ciudad.js";

const httpRuta = {
  //GET
  getAllRuta: async (req, res) => {
    try {
        const ruta = await Ruta.find();
        res.json({ ruta });
    } catch (error) {
        res.status(400).json({ error });
    }
},

getRutacarRuta: async (req, res) => {
    try {
        const {cedula} = req.params
        const ruta = await Ruta.find({ cedula });
        // const ruta = await ruta.find({
        //     $and:[
        //         {cedula},
        //         {stado:1}
        //     ]
        // })v
        res.json({ ruta });
    } catch (error) {
        res.status(400).json({ error });
    }
},

getRutaId: async (req, res) => {
    try {
        const { id } = req.params
        const ruta = await Ruta.findById(id)
        
        res.json({ ruta });
    } catch (error) {
        res.status(400).json({ error })

    }
},

//POST
postRuta: async (req, res) => {
    try {
        const {ciudad_origen, ciudad_destino, hora_salida, fecha_salida, valor, bus} = req.body;

        const ruta = new Ruta({ciudad_origen, ciudad_destino, hora_salida, fecha_salida, valor, bus});
        await ruta.save(); 
        res.json({ruta})
    } catch (error) {
        res.status(400).json({ error })
    }
},


//PUT
putRuta: async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, apellido, telefono, contrasena } = req.body

        const salt = bcryptjs.genSaltSync()
        const newContrasena = bcryptjs.hashSync(contrasena, salt)

        const ruta = await Ruta.findByIdAndUpdate(id, { nombre, apellido, telefono, newContrasena }, { new: true });
        res.json({ ruta })
    } catch (error) {
        res.status(400).json({ error })

    }

},

putRutaInactivar: async (req, res) => {
    try {
        const { id } = req.params
        const ruta = await Ruta.findByIdAndUpdate(id, { estado: 0 }, { new: true })
        res.json({ ruta })
    } catch (error) {
        res.status(400).json({ error })

    }
},
putRutaActivar: async (req, res) => {
    try {
        const { id } = req.params
        const ruta = await Ruta.findByIdAndUpdate(id, { estado: 1 }, { new: true })
        res.json({ ruta })
    } catch (error) {
        res.status(400).json({ error })

    }
},



//DELETE
deleteRuta: async (req, res) => {
    try {
        const { cedula } = req.params
        const ruta = await Ruta.findOneAndDelete({ cedula })
        res.json({ ruta })
    } catch (error) {
        res.status(400).json({ error })
    }

},

deleteRutaId: async () => {
    try {
        const { id } = req.params
        const ruta = await Ruta.findByIdAndDelete(id)
        res.json({ ruta })
    } catch (error) {

    }
},
};

export default httpRuta;

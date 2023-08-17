import tiquete from "../models/tiquete.js";
import Tiquete from "../models/tiquete.js"

const httpTiquete = {

    getAllTiquete: async (req, res) => {
        try {
            const tiquete = await Tiquete.find();
            res.json({ tiquete });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    getTiqueteCedula: async (req, res) => {
        try {
            const {cedula} = req.params
            const tiquete = await Tiquete.find({ cedula });
            // const tiquete = await tiquete.find({
            //     $and:[
            //         {cedula},
            //         {stado:1}
            //     ]
            // })v
            res.json({ tiquete });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    getTiqueteId: async (req, res) => {
        try {
            const { id } = req.params
            const tiquete = await Tiquete.findById(id)
            
            res.json({ tiquete });
        } catch (error) {
            res.status(400).json({ error })

        }
    },

    getTiquetesVendidos: async(req,res)=>{
        try {
            const {id} = req.params
            const vendedor = id
            const tiquetes = await Tiquete.find({vendedor})

            if(!tiquetes) res.json({msg: "El vendedor no ha realizado ninguna venta."})
 
            res.json({tiquetes})
            
        } catch (error) {
            console.log(error)
            res.status(400).json({error})
        }
    },

    getFiltroFechas: async(req,res)=>{
        try {
            const {fechaA, fechaB} = req.params

            const fechas = await Tiquete.find({
                    $or:[
                        {createdAt:fechaA},
                        {createdAt:fechaB}
                    ]
                })

            res.json(fechas)
            
        } catch (error) {
            res.status(400).json({error})
        }
    },

    //POST
    postTiquete: async (req, res) => {
        try {
            const { vendedor, ruta, cliente } = req.body;
            const tiquete = new Tiquete({ vendedor, ruta, cliente });
      
            await tiquete.save();

            res.json({ tiquete });
        } catch (error) {
            res.status(400).json({ error });
        }
    },


    //PUT
    putTiquete: async (req, res) => {
        try {
            const { id } = req.params
            const { nombre, apellido, telefono, contrasena } = req.body

            const salt = bcryptjs.genSaltSync()
            const newContrasena = bcryptjs.hashSync(contrasena, salt)

            const tiquete = await Tiquete.findByIdAndUpdate(id, { nombre, apellido, telefono, newContrasena }, { new: true });
            res.json({ tiquete })
        } catch (error) {
            res.status(400).json({ error })

        }

    },

    putTiqueteInactivar: async (req, res) => {
        try {
            const { id } = req.params
            const tiquete = await Tiquete.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ tiquete })
        } catch (error) {
            res.status(400).json({ error })

        }
    },
    putTiqueteActivar: async (req, res) => {
        try {
            const { id } = req.params
            const tiquete = await Tiquete.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ tiquete })
        } catch (error) {
            res.status(400).json({ error })

        }
    },



    //DELETE
    deleteTiquete: async (req, res) => {
        try {
            const { cedula } = req.params
            const tiquete = await Tiquete.findOneAndDelete({ cedula })
            res.json({ tiquete })
        } catch (error) {
            res.status(400).json({ error })
        }

    },

    deleteTiqueteId: async (req, res) => {
        try {
            const { id } = req.params
            const tiquete = await Tiquete.findByIdAndDelete(id)
            res.json({ tiquete })
        } catch (error) {

        }
    },
};
export default httpTiquete;
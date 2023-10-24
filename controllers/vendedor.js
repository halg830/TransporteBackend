import Vendedor from "../models/vendedor.js";
import bcryptjs from "bcrypt"
import { generarJWT } from "../miderwars/validar-jwt.js";

const httpVendedor = {

    //GET
    getAllVendedor: async (req, res) => {
        try {
            const vendedor = await Vendedor.find();
            res.json({ vendedor });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    getVendedorCedula: async (req, res) => {
        try {
            const {cedula} = req.params
            const vendedor = await Vendedor.find({ cedula });
            // const vendedor = await vendedor.find({
            //     $and:[
            //         {cedula},
            //         {stado:1}
            //     ]
            // })v
            res.json({ vendedor });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    getVendedorId: async (req, res) => {
        try {
            const { id } = req.params
            const vendedor = await Vendedor.findById(id)
            
            res.json({ vendedor });
        } catch (error) {
            res.status(400).json({ error })

        }
    },

    //POST
    postVendedor: async (req, res) => {
        try {
            const { nombre, apellido, cedula, telefono, usuario, contrasena } = req.body;
            const vendedor = new Vendedor({ nombre, apellido, cedula, telefono, usuario, contrasena });

            const salt = bcryptjs.genSaltSync()
            vendedor.contrasena = bcryptjs.hashSync(contrasena, salt)
      
            await vendedor.save();

            res.json({ vendedor });
        } catch (error) {
            res.status(400).json({ error });
        }
    },


    //PUT
    putVendedor: async (req, res) => {
        try {
            const { id } = req.params
            const { nombre, apellido, telefono, contrasena } = req.body

            const salt = bcryptjs.genSaltSync()
            const newContrasena = bcryptjs.hashSync(contrasena, salt)

            const vendedor = await Vendedor.findByIdAndUpdate(id, { nombre, apellido, telefono, newContrasena }, { new: true });
            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })

        }

    },

    putVendedorInactivar: async (req, res) => {
        try {
            const { id } = req.params
            const vendedor = await Vendedor.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })

        }
    },
    putVendedorActivar: async (req, res) => {
        try {
            const { id } = req.params
            const vendedor = await Vendedor.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })

        }
    },



    //DELETE
    deleteVendedor: async (req, res) => {
        try {
            const { cedula } = req.params
            const vendedor = await Vendedor.findOneAndDelete({ cedula })
            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })
        }

    },

    deleteVendedorId: async () => {
        try {
            const { id } = req.params
            const vendedor = await Vendedor.findByIdAndDelete(id)
            res.json({ vendedor })
        } catch (error) {

        }
    },

    login: async (req, res) => {
        const { usuario, contrasena } = req.body;
    
        try {
            const vendedor = await Vendedor.findOne({ usuario })
            
    
            if (!vendedor) {
                return res.status(400).json({
                    msg: "Vendedor / Password no son correctos"
                })
            }
    
            if (vendedor.estado === 0) {
                return res.status(400).json({
                    msg: "Vendedor Inactivo"
                })
            }
    
            const validPassword = bcryptjs.compareSync(contrasena, vendedor.contrasena);
            if (!validPassword) {
                return res.status(401).json({
                    msg: "Vendedor / Password no son correctos"
                })
            } 
    
            const token = await generarJWT(vendedor.id);
    
            res.json({
                vendedor,
                token
            })
    
        } catch (error) {
            return res.status(500).json({
                msg: "Hable con el WebMaster"
            })
        }
    },
};
export default httpVendedor;

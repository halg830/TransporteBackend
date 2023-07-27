import Vendedor from "../models/vendedor.js";

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
        } catch (error) {
            res.status(400).json({ error })

        }
    },

    //POST
    postVendedor: async (req, res) => {
        try {
            const { nombre, cedula, contrasena } = req.body;
            const vendedor = new Vendedor({ nombre, cedula, contrasena });

            const salt = ""

            vendedor.save();

            res.json({ vendedor });
        } catch (error) {
            res.status(400).json({ error });
        }
    },


    //PUT
    putVendedor: async () => {
        try {
            const { id } = req.params
            const { nombre, edad } = req.body
            const vendedor = await Vendedor.findByIdAndUpdate(id, { nombre, edad }, { new: true });
            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })

        }

    },

    putVendedorInactivar: async () => {
        try {
            const { id } = req.params
            const vendedor = await Vendedor.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })

        }
    },
    putVendedorActivar: async () => {
        try {
            const { id } = req.params
            const vendedor = await Vendedor.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })

        }
    },



    //DELETE
    deleteVendedor: async () => {
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
            const vendedor = await Vendedor.findOneAndDelete(id)
            res.json({ vendedor })
        } catch (error) {

        }
    },
};
export default httpVendedor;

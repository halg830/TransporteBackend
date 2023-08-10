import Bus from "../models/bus.js";

const httpbus = {
    //GET
    getAllBus: async (req, res) => {
        try {
            const bus = await Bus.find();
            res.json({ bus });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    getBuscarBus: async (req, res) => {
        try {
            const {cedula} = req.params
            const bus = await Bus.find({ cedula });
            // const bus = await bus.find({
            //     $and:[
            //         {cedula},
            //         {stado:1}
            //     ]
            // })v
            res.json({ bus });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    getBusId: async (req, res) => {
        try {
            const { id } = req.params
            const bus = await Bus.findById(id)
            
            res.json({ bus });
        } catch (error) {
            res.status(400).json({ error })

        }
    },

    //POST
    postNuevoBus: async (req, res) => {
        try {
            const {empresa, asiento, placa, conductor} = req.body;
            const bus = new Bus({empresa, asiento, placa, conductor});
            await bus.save(); 
            res.json({bus})
        } catch (error) {
            res.status(400).json({ error })
        }
    },


    //PUT
    putBus: async (req, res) => {
        try {
            const { id } = req.params
            const { nombre, apellido, telefono, contrasena } = req.body

            const salt = bcryptjs.genSaltSync()
            const newContrasena = bcryptjs.hashSync(contrasena, salt)

            const bus = await Bus.findByIdAndUpdate(id, { nombre, apellido, telefono, newContrasena }, { new: true });
            res.json({ bus })
        } catch (error) {
            res.status(400).json({ error })

        }

    },

    putBusInactivar: async (req, res) => {
        try {
            const { id } = req.params
            const bus = await Bus.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ bus })
        } catch (error) {
            res.status(400).json({ error })

        }
    },
    putBusActivar: async (req, res) => {
        try {
            const { id } = req.params
            const bus = await Bus.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ bus })
        } catch (error) {
            res.status(400).json({ error })

        }
    },



    //DELETE
    deleteBus: async (req, res) => {
        try {
            const { cedula } = req.params
            const bus = await Bus.findOneAndDelete({ cedula })
            res.json({ bus })
        } catch (error) {
            res.status(400).json({ error })
        }

    },

    deleteBusId: async () => {
        try {
            const { id } = req.params
            const bus = await Bus.findByIdAndDelete(id)
            res.json({ bus })
        } catch (error) {

        }
    },
} 

export default httpbus;
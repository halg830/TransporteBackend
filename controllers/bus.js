import Bus from "../models/bus.js";

const httpbus = {
    //GET
    getBuses: async (req, res) => {
        try {
            const buses = await Bus.find()
            res.json(buses)
        } catch (error) {
            res.status(400).json({ error })
        }
    },


    //POST

    getBuscarBus: async (req, res) => {
        try {
            const {nombre}= req.params
            const buses = await Bus.find(nombre)
            res.json(buses)
        } catch (error) {
            res.status(400).json({ error })
        }
    },

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

        geteliminarBus: async (req, res) => {
        try {
            const {nombre}= req.params
            const buses = await Bus.findOneAndDelete(nombre)
            res.json(buses)
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    // putBusInactivar: async () => {
    //     try {
    //         const { id } = req.params
    //         const bus = await Bus.findByIdAndUpdate(id, { estado: 0 }, { new: true })
    //         res.json({ bus })
    //     } catch (error) {
    //         res.status(400).json({ error })

    //     }
    // },

    // putBusActivar: async () => {
    //     try {
    //         const { id } = req.params
    //         const bus = await Bus.findByIdAndUpdate(id, { estado: 1 }, { new: true })
    //         res.json({ bus })
    //     } catch (error) {
    //         res.status(400).json({ error })

    //     }
    // },


} 

export default httpbus;
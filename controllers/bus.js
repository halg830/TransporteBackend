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

    postbuscarBus: async (req, res) => {
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
            bus.save();
            res.json({bus})
        } catch (error) {
            res.status(400).json({ error })
        }
    }

} 

export default httpbus;
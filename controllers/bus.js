import bus from "../models/bus.js";

const httpbus = {
    //GET
    getBuses: async (req, res) => {
        try {
            const buses = await bus.find()
            res.json(buses)
        } catch (error) {
            res.status(400).json({ error })
        }
    },


    //POST

    postbuscarBus: async (req, res) => {
        try {
            const {nombre}= req.params
            const buses = await bus.find(nombre)
            res.json(buses)
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    postnuevoBus: async (req, res) => {
        try {
            const {empresa, asiento, placa, createdAt, estado, conductor} = req.body;
            const bus = new bus({nombre, estado});
            bus.save();

            res.json(bus)
        } catch (error) {
            res.status(400).json({ error })
        }
    }

} 

export default httpbus;
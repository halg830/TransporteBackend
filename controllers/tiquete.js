import Tiquete from "../models/tiquete.js"

const httpTiquete = {

    //GET
    getAllTiquete: async (req, res) => {
        try {
            const tiquete = await Tiquete.find();
            res.json({ tiquete });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    getTiqueteId: async (req, res) => {
        try {
            const { id } = req.params
            const tiquete = await Tiquete.findById(id)
            res.json({tiquete})
        } catch (error) {
            res.status(400).json({ error })

        }
    },

    //POST
    postTiquete: async (req, res) => {
        try {
            const { vendedor, cliente, ruta } = req.body;
            const tiquete = new Tiquete({ vendedor, cliente, ruta });

            const salt = ""

            vendedor.save();

            res.json({ tiquete });
        } catch (error) {
            res.status(400).json({ error });
        }
    },


    //PUT
    putTiquete: async () => {
        try {
            const { id } = req.params
            const { ruta, cliente, vendedor} = req.body
            const tiquete = await Tiquete.findByIdAndUpdate(id, { ruta, cliente, vendedor}, { new: true });
            res.json({ tiquete })
        } catch (error) {
            res.status(400).json({ error })

        }

    },

    putTiqueteInactivar: async () => {
        try {
            const { id } = req.params
            const tiquete = await Tiquete.findByIdAndUpdate(id, { estado: 0 }, { new: true })
            res.json({ tiquete })
        } catch (error) {
            res.status(400).json({ error })

        }
    },
    putTiqueteActivar: async () => {
        try {
            const { id } = req.params
            const tiquete = await Tiquete.findByIdAndUpdate(id, { estado: 1 }, { new: true })
            res.json({ tiquete })
        } catch (error) {
            res.status(400).json({ error })

        }
    },
};
export default httpTiquete;
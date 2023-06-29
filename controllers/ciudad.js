import Ciudad from "../models/ciudad.js";

const httpCiudad = {
    //GET
    getCiudades: async (req, res) => {
        try {
            const ciudades = await Ciudad.find()
            res.json(ciudades)
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    postCiudad: async (req, res) => {
        try {
            const {nombre}= req.params
            const ciudad = await Ciudad.find(nombre)
            res.json(ciudad)
        } catch (error) {
            res.status(400).json({ error })
        }
    },


    //POST
    postCiudades: async (req, res) => {
        try {
            const {nombre, estado} = req.body;
            const ciudad = new Ciudad({nombre, estado});
            ciudad.save();

            res.json(ciudad)
        } catch (error) {
            res.status(400).json({ error })
        }
    }
} 

export default httpCiudad;
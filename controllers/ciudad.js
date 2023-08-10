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
            const {nombre}= req.body
            const ciudad = new Ciudad({nombre}) 

            await ciudad.save()

            res.json({ciudad})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
} 

export default httpCiudad;
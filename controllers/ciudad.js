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

    putCiudadInactivar: async (req, res) => {
        try {
          const { id } = req.params;
          const ciudad = await Ciudad.findByIdAndUpdate(id, { estado: 0 }, { new: true });
          res.json({ciudad})
        } catch (error) {
          res.status(400).json({ error });
        }
      },
      putCiudadActivar: async (req, res) => {
        try {
          const { id } = req.params;
          const ciudad = await Ciudad.findByIdAndUpdate(id, { estado: 1 }, { new: true });
          res.json({ciudad})
        } catch (error) {
          res.status(400).json({ error });
        }
      },
} 

export default httpCiudad;
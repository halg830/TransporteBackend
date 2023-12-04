import helpersGeneral from "../helpers/general.js";
import Ciudad from "../models/ciudad.js";

const httpCiudad = {
  //GET
  getCiudades: async (req, res) => {
    try {
      const ciudades = await Ciudad.find();
      res.json(ciudades);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  getCiudadId: async (req, res) => {
    try {
      const { id } = req.params;
      const ciudad = await Ciudad.findById(id);

      res.json(ciudad);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  postCiudad: async (req, res) => {
    try {
      const { nombre } = await helpersGeneral.eliminarEspacios(req.body);
      const mayus = await helpersGeneral.primeraMayuscula(nombre)
      const ciudad = new Ciudad({ nombre:mayus });

      await ciudad.save();

      res.json(ciudad);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putCiudad: async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre } = await helpersGeneral.eliminarEspacios(req.body);
      const mayus = await helpersGeneral.primeraMayuscula(nombre)
      const ciudad = await Ciudad.findByIdAndUpdate(
        id,
        { nombre:mayus },
        { new: true }
      );

      res.json(ciudad);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putCiudadInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const ciudad = await Ciudad.findByIdAndUpdate(
        id,
        { estado: 0 },
        { new: true }
      );
      res.json(ciudad);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  putCiudadActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const ciudad = await Ciudad.findByIdAndUpdate(
        id,
        { estado: 1 },
        { new: true }
      );
      res.json(ciudad);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  deleteAll: async (req, res) => {
    try {
      const ciudad = await Ciudad.deleteMany({});
      res.json({ msg: "Se borro todo" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

export default httpCiudad;

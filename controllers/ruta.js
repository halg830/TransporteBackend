import helpersGeneral from "../helpers/general.js";
import bus from "../models/bus.js";
import Ruta from "../models/ruta.js";

const httpRuta = {
  //GET
  getAllRuta: async (req, res) => {
    try {
      const rutas = await Ruta.find();
      const rutasPopulatePromesas = rutas.map(async (e) => {
        return await Ruta.findById(e._id)
          .populate("ciudad_origen")
          .populate("ciudad_destino")
      });

      const rutasPopulate = await Promise.all(rutasPopulatePromesas);

      res.json({ rutasPopulate });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  },

  getRutacarRuta: async (req, res) => {
    try {
      const { cedula } = req.params;
      const ruta = await Ruta.find({ cedula });
      // const ruta = await ruta.find({
      //     $and:[
      //         {cedula},
      //         {stado:1}
      //     ]
      // })v
      res.json({ ruta });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getRutaId: async (req, res) => {
    try {
      const { id } = req.params;
      const ruta = await Ruta.findById(id);

      res.json({ ruta });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  /* getRutasBus: async (req, res) => {
    try {
      const { id } = req.params;
      const bus = id;
      const rutas = await Ruta.find({ bus });

      if (!rutas)
        res.json({ msg: "El vendedor no ha realizado ninguna venta." });

      res.json({ rutas });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  }, */

  //POST
  postRuta: async (req, res) => {
    try {
      const {
        ciudad_origen,
        ciudad_destino,
        hora_salida,
      } = await helpersGeneral.eliminarEspacios(req.body)

      const ruta = new Ruta({
        ciudad_origen,
        ciudad_destino,
        hora_salida,
      });
      await ruta.save();
      const rutasPopulate = await Ruta.findById(ruta._id)
        .populate("ciudad_origen")
        .populate("ciudad_destino")

      res.json({ rutasPopulate });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  //PUT
  putRuta: async (req, res) => {
    try {
      const {id} = req.params
      const {
        ciudad_origen,
        ciudad_destino,
        hora_salida,
      } = await helpersGeneral.eliminarEspacios(req.body)

      const ruta = await Ruta.findByIdAndUpdate(
        id,
        {
          ciudad_origen,
          ciudad_destino,
          hora_salida,
        },
        { new: true }
      );

      const rutasPopulate = await Ruta.findById(ruta._id)
        .populate("ciudad_origen")
        .populate("ciudad_destino")

      res.json({ rutasPopulate });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  },

  putRutaInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const ruta = await Ruta.findByIdAndUpdate(
        id,
        { estado: 0 },
        { new: true }
      );
      const rutasPopulate = await Ruta.findById(ruta._id)
        .populate("ciudad_origen")
        .populate("ciudad_destino")

      res.json({ rutasPopulate });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  putRutaActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const ruta = await Ruta.findByIdAndUpdate(
        id,
        { estado: 1 },
        { new: true }
      );
      const rutasPopulate = await Ruta.findById(ruta._id)
        .populate("ciudad_origen")
        .populate("ciudad_destino")

      res.json({ rutasPopulate });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  //DELETE
  deleteRuta: async (req, res) => {
    try {
      const { cedula } = req.params;
      const ruta = await Ruta.findOneAndDelete({ cedula });
      res.json({ ruta });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  deleteRutaId: async (req, res) => {
    try {
      const { id } = req.params;
      const ruta = await Ruta.findByIdAndDelete(id);
      res.json({ ruta });
    } catch (error) {}
  },

  deleteAll: async (req, res) => {
    try {
      const ruta = await Ruta.deleteMany({});
      res.json({ msg: 'Se borro todo'});
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

export default httpRuta;

import Tiquete from "../models/tiquete.js";

const httpTiquete = {
  getAllTiquete: async (req, res) => {
    try {
      const tiquete = await Tiquete.find();
      const tiquetePopulatePromesas = tiquete.map(async (e) => {
        return await Tiquete.findById(e._id)
          .populate("cliente")
          .populate({ path: "ruta", populate: [{ path: "bus"}, { path: "ciudad_origen"}, { path: "ciudad_destino"}] })
          .populate("vendedor");
      });

      const tiquetePopulate = await Promise.all(tiquetePopulatePromesas);

      res.json({ tiquetePopulate });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  },

  getTiqueteCedula: async (req, res) => {
    try {
      const { cedula } = req.params;
      const tiquete = await Tiquete.find({ cedula });
      // const tiquete = await tiquete.find({
      //     $and:[
      //         {cedula},
      //         {stado:1}
      //     ]
      // })v
      const tiquetePopulate = await Tiquete.findById(tiquete._id)
        .populate("cliente")
        .populate("vendedor")
        .populate({ path: "ruta", populate: [{ path: "bus"}, { path: "ciudad_origen"}, { path: "ciudad_destino"}]});

      res.json({ tiquetePopulate });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getTiqueteId: async (req, res) => {
    try {
      const { id } = req.params;
      const tiquete = await Tiquete.findById(id);

      const tiquetePopulate = await Tiquete.findById(tiquete._id)
        .populate("cliente")
        .populate("vendedor")
        .populate({ path: "ruta", populate: [{ path: "bus"}, { path: "ciudad_origen"}, { path: "ciudad_destino"}]});

      res.json({ tiquetePopulate });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getTiquetesVendidos: async (req, res) => {
    try {
      const { id } = req.params;
      const vendedor = id;
      const tiquetes = await Tiquete.find({ vendedor });

      if (!tiquetes)
        res.json({ msg: "El vendedor no ha realizado ninguna venta." });

      res.json({ tiquetes });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  },

  getFiltroFechas: async (req, res) => {
    try {
      const { fechaA, fechaB } = req.params;

      const fechas = await Tiquete.find({
        $or: [{ createdAt: fechaA }, { createdAt: fechaB }],
      });

      res.json(fechas);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getAsientosOcupados: async(req, res)=>{
    try {
      const {id, fecha_salida} = req.params //Id de la ruta

      const asientos = await Tiquete.find({ $and: [{ruta:id}, {fecha_salida}]})

      res.json(asientos)
    } catch (error) {
      res.status(400).json({error})
    }
  },

  getContinuarVenta: async(req, res)=>{
    try {
      const ticketsBd = await Tiquete.find()

      const tiquetePopulatePromesas = ticketsBd.map(async (e) => {
        return await Tiquete.findById(e._id)
          .populate({ path: "ruta", populate: [{ path: "bus"}, { path: "ciudad_origen"}, { path: "ciudad_destino"}] })
      });

      const tiquetePopulate = await Promise.all(tiquetePopulatePromesas);

      const rutas = tiquetePopulate.map(t=>{return{ruta: t.ruta, fecha_salida:t.fecha_salida}})
      res.json(rutas)
    } catch (error) {
      res.status(400).json({error})
    }
  },

  //POST
  postTiquete: async (req, res) => {
    try {
      const { vendedor, ruta, cliente, fecha_salida, num_asiento } = req.body;
      const tiquete = new Tiquete({ vendedor, ruta, cliente, fecha_salida, num_asiento });

      await tiquete.save();

      const tiquetePopulate = await Tiquete.findById(tiquete._id)
        .populate("cliente")
        .populate("vendedor")
        .populate({ path: "ruta", populate: [{ path: "bus"}, { path: "ciudad_origen"}, { path: "ciudad_destino"}] });

      res.json({ tiquetePopulate });
    } catch (error) { 
        console.log(error);
      res.status(400).json({ error });
    }
  },

  //PUT
  putTiquete: async (req, res) => {
    try {
      const { id } = req.params;
      const { vendedor, ruta, cliente, fecha_salida, asiento } = req.body;

      const tiquete = await Tiquete.findByIdAndUpdate(
        id,
        { vendedor, ruta, cliente, fecha_salida, asiento },
        { new: true }
      );
      const tiquetePopulate = await Tiquete.findById(tiquete._id)
        .populate("cliente")
        .populate("vendedor")
        .populate({ path: "ruta", populate: [{ path: "bus"}, { path: "ciudad_origen"}, { path: "ciudad_destino"}]});

      res.json({ tiquetePopulate });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  putTiqueteInactivar: async (req, res) => {
    try {
      const { id } = req.params;
      const tiquete = await Tiquete.findByIdAndUpdate(
        id,
        { estado: 0 },
        { new: true }
      );
      const tiquetePopulate = await Tiquete.findById(tiquete._id)
        .populate("cliente")
        .populate("vendedor")
        .populate({ path: "ruta", populate: [{ path: "bus"}, { path: "ciudad_origen"}, { path: "ciudad_destino"}]});

      res.json({ tiquetePopulate });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  putTiqueteActivar: async (req, res) => {
    try {
      const { id } = req.params;
      const tiquete = await Tiquete.findByIdAndUpdate(
        id,
        { estado: 1 },
        { new: true }
      );
      const tiquetePopulate = await Tiquete.findById(tiquete._id)
        .populate("cliente")
        .populate("vendedor")
        .populate({ path: "ruta", populate: [{ path: "bus"}, { path: "ciudad_origen"}, { path: "ciudad_destino"}]});

      res.json({ tiquetePopulate });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  //DELETE
  deleteTiquete: async (req, res) => {
    try {
      const { cedula } = req.params;
      const tiquete = await Tiquete.findOneAndDelete({ cedula });
      res.json({ tiquete });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  deleteTiqueteId: async (req, res) => {
    try {
      const { id } = req.params;
      const tiquete = await Tiquete.findByIdAndDelete(id);
      res.json({ tiquete });
    } catch (error) {}
  },
};
export default httpTiquete;

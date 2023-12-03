import Tiquete from "../models/tiquete.js";
import Ruta from "../models/ruta.js";
import Vendedor from "../models/vendedor.js";
import Cliente from "../models/cliente.js";
import Bus from "../models/bus.js";

const helpersTiquete = {
  validarAsiento: async (num_asiento, req) => {
    const { ruta, bus, fecha_salida } = req.req.body;

    console.log("r", ruta);
    const divFecha = fecha_salida.split("T");
    console.log(divFecha);

    const f1 = new Date(divFecha[0] + "T00:00:00.000Z");
    const f2 = new Date(divFecha[0] + "T23:59:59.000Z");

    const buscar = await Tiquete.findOne({
      ruta,
      bus,
      fecha_salida: { $gte: f1, $lte: f2 },
    })
      .populate("ruta")
      .populate("bus");

    console.log("b", buscar);

    console.log(num_asiento);

    if (buscar) {
      const num_asiento_buscar = buscar.num_asiento;
      const asiento_bus = buscar.bus.asiento;
      if (num_asiento_buscar === num_asiento)
        throw new Error(`Asiento ${num_asiento} ya está ocupado`);
      if (asiento_bus < num_asiento || num_asiento < 0)
        throw new Error(`Asiento erróneo`);
    }
  },

  rutaActiva: async (id) => {
    const ruta = await Ruta.findOne({ _id: id });

    console.log(ruta);
    if (ruta.estado === 0) {
      throw new Error("La ruta esta inactiva.");
    }
  },
  vendedorActivo: async (id) => {
    const vendedor = await Vendedor.findOne({ _id: id });

    console.log(vendedor);
    if (vendedor.estado === 0) {
      throw new Error("El vendedor esta inactivo.");
    }
  },
  clienteActivo: async (id) => {
    const cliente = await Cliente.findOne({ _id: id });

    console.log(cliente);
    if (cliente.estado === 0) {
      throw new Error("El cliente esta inactivo.");
    }
  },
  busActivo: async (id) => {
    const bus = await Bus.findOne({ _id: id });

    console.log(bus);
    if (bus.estado === 0) {
      throw new Error("El bus esta inactivo.");
    }
  },
};

export default helpersTiquete;

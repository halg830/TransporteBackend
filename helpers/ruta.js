import Ciudad from "../models/ciudad.js";
import Bus from '../models/bus.js'

const helpersRuta = {
  ciudadRepetida: async (ciudad_origen, req) => {
    const ciudad_destino = req.req.body.ciudad_destino;

    if (ciudad_origen === ciudad_destino) {
      throw new Error(`El destino no puede ser la misma ciudad`);
    }
  },

  ciudadActiva: async (id) => {
    const ciudad = await Ciudad.findOne({ _id: id });

    console.log(ciudad);
    if (ciudad.estado === 0) {
      throw new Error("La ciudad esta inactiva.");
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

export default helpersRuta;

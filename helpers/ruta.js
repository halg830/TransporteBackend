import Ciudad from "../models/ciudad.js";
import Bus from "../models/bus.js";
import ruta from "../models/ruta.js";

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

  rutaRepetida: async (hora_salida, req) => {
    const { ciudad_origen, ciudad_destino, _id } = req.req.body;

    const divFecha = hora_salida.split("T");
    console.log(divFecha);
    const defaultFecha = "1969-12-31T" + divFecha[1];

    const buscar = await ruta.findOne({
      ciudad_origen,
      ciudad_destino,
      hora_salida: defaultFecha,
    });

    console.log('br', buscar);

    if (buscar) {
      if (buscar._id != _id && req.req.method === "PUT")
        throw new Error("La ruta ya esta registrada en la base de datos.");
      else if (req.req.method === "POST")
        throw new Error("La ruta ya esta registrada en la base de datos.");
    }
  },
};

export default helpersRuta;

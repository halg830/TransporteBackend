import Ruta from "../models/ruta.js";

const helpersRuta = {
  ciudadRepetida: async (ciudad_origen, req) => {
    const ciudad_destino = req.req.body.ciudad_destino;

    if (ciudad_origen === ciudad_destino) {
      throw new Error(`El destino no puede ser la misma ciudad`);
    }
  },
};

export default helpersRuta;

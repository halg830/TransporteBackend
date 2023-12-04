import Ciudad from "../models/ciudad.js";
import helpersGeneral from "./general.js";

const helpersCiudad = {
  existeNombre: async (nombre, req) => {
    if (nombre) {

      const existe = await Ciudad.findOne({ $text: { $search: nombre } });
      if (existe) {
        if (req.req.method === "PUT") {
          throw new Error(
            `Ya existe ese nombre en la base de datos!!! ${nombre}`
          );
        } else if (req.req.method === "POST")
          throw new Error(
            `Ya existe ese nombre en la base de datos!!! ${nombre}`
          );
      }
    }
  },
};

export default helpersCiudad;

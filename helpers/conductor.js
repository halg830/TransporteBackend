import Conductor from "../models/conductor.js";
import helpersGeneral from "./general.js";

const helpersConductor = {
  existeCedula: async (cedula, req) => {
    if (cedula) {
      const existe = await Conductor.findOne({ cedula });
      if (existe) {
        if (req.req.method === "PUT" && req.req.body._id != existe._id) {
          throw new Error(
            `Ya existe esa cedula en la base de datos!!! ${cedula}`
          );
        } else if (req.req.method === "POST")
          throw new Error(
            `Ya existe ese cedula en la base de datos!!! ${cedula}`
          );
      }
    }
  },

  existeTelefono: async (telefono, req) => {
    console.log("a", telefono);

    const existe = await Conductor.findOne({ telefono });
    if (existe) {
      if (req.req.method === "PUT" && req.req.body._id != existe._id) {
        throw new Error(`Ya existe ese telefono en la base de datos!!! `);
      } else if (req.req.method === "POST") {
        throw new Error(`Ya existe ese telefono en la base de datos!!! `);
      }
    }
  },
  existeLicencia: async (num_licencia, req) => {
    console.log("a", num_licencia);

    const existe = await Conductor.findOne({ num_licencia });
    if (existe) {
      if (req.req.method === "PUT" && req.req.body._id != existe._id) {
        throw new Error(`Ya existe ese número de licencia en la base de datos!!! `);
      } else if (req.req.method === "POST") {
        throw new Error(`Ya existe ese número de licencia en la base de datos!!! `);
      }
    }
  },

  licenciaCedula: async(num_licencia,req)=>{
    const {cedula} = req.req.body

    if(num_licencia!=cedula){
      throw new Error(`La licencia debe ser igual a la cedula!!! `);
    }
  },

  existeEmail: async (email, req) => {
    console.log("a", email);
    const emailRegExp = new RegExp(`^${await helpersGeneral.quitarTildes(email)}$`, 'i');

    const existe = await Conductor.findOne({ email: { $regex: emailRegExp } });
    if (existe) {
      if (req.req.method === "PUT" && req.req.body._id != existe._id) {
        console.log("h");
        throw new Error(`Ya existe ese email en la base de datos!!! `);
      } else if (req.req.method === "POST") {
        console.log("h2");

        throw new Error(`Ya existe ese email en la base de datos!!! `);
      }
    }
  },

  validarEmail: async (email) => {
    console.log("z");
    console.log(email);
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
      throw new Error("Email no válido. Ejemplo: usuario@example.com");
    }
  },
};
export default helpersConductor;

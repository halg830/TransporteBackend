import Cliente from "../models/cliente.js";

const helpersCliente = {
  existeClienteById: async (id, req) => {
    const existe = await Cliente.findById(id);

    if (!existe) {
      throw new Error(`El id no existe ${id}`);
    }

    req.req.clienteUpdate = existe;
  },

  existeCedula: async (cedula, req) => {
    console.log("x", cedula)
    if (cedula) {
      const existe = await Cliente.findOne({ cedula });

      console.log("e", existe)
      console.log(req.req)
      if (existe) {
        if (req.req.method === "PUT" && req.req.body._id!=existe._id) {
          throw new Error(
            `Ya existe esa cedula en la base de datos!!! ${cedula}`
          );
        }
        throw new Error(
          `Ya existe ese cedula en la base de datos!!! ${email}`
        );
      }
    }
  },

  existeEmail: async (email, req) => {
    if (email) {
      const existe = await Cliente.findOne({ email });
      if (existe) {
        if (req.req.method === "PUT" && req.req.body._id!=existe._id) {
          throw new Error(
            `Ya existe ese email en la base de datos!!! ${email}`
          );
        }

        throw new Error(
          `Ya existe ese email en la base de datos!!! ${email}`
        );
      }
    }
  },

  validarEmail: async (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
      throw new Error('Email no válido. Ejemplo: usuario@example.com')
    } 
  },
};
export default helpersCliente;

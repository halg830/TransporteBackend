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
      console.log(req.req.usuario.cedula)
      if (existe) {
        if (req.req.method === "PUT") {
          if (existe.cedula !== req.req.usuario.cedula)
            throw new Error(
              `Ya existe ese serial en la base de datos!!! ${cedula}`
            );
        } else {
          throw new Error(
            `Ya existe esa cedula en la base de datos!!! ${cedula}`
          );
        }
      }

      return
    }
  },

  existeEmail: async (email, req) => {
    if (email) {
      const existe = await Cliente.findOne({ email });
      if (existe) {
        if (req.req.method === "PUT") {
          if (existe.email !== req.req.cliente.email)
            throw new Error(
              `Ya existe ese serial en la base de datos!!! ${email}`
            );
        } else {
          throw new Error(
            `Ya existe ese email en la base de datos!!! ${email}`
          );
        }
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

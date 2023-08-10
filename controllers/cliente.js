import Cliente from "../models/cliente.js"
import bcryptjs from "bcrypt"
import { generarJWT } from "../miderwars/validar-jwt.js";

const httpCliente = {
  //GET
  getAllCliente: async (req, res) => {
    try {
      const cliente = await Cliente.find();
      res.json({ cliente });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getClienteCedula: async (req, res) => {
    try {
      const { cedula } = req.params
      const cliente = await Cliente.find({ cedula });
      // const vendedor = await vendedor.find({
      //     $and:[
      //         {cedula},
      //         {stado:1}
      //     ]
      // })v
      res.json({ cliente });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  getClienteId: async (req, res) => {
    try {
      const { id } = req.params
      const cliente = await Cliente.findById(id)

      res.json({ cliente });
    } catch (error) {
      res.status(400).json({ error })

    }
  },

  //POST
  postCliente: async (req, res) => {
    try {
      const { nombre, cedula, email, contrasena } = req.body;
      const cliente = new Cliente({ nombre, cedula, email, contrasena });

      const salt = bcryptjs.genSaltSync()
      cliente.contrasena = bcryptjs.hashSync(contrasena, salt)

      await cliente.save();

      res.json({ cliente });
    } catch (error) {
      res.status(400).json({ error });
    }
  },


  //PUT
  putCliente: async (req, res) => {
    try {
      const { id } = req.params
      const { nombre, edad } = req.body
      const cliente = await Cliente.findByIdAndUpdate(id, { nombre, edad }, { new: true });
      res.json({ cliente })
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  putClienteInactivar: async (req, res) => {
    try {
      const { id } = req.params
      const cliente = await Cliente.findByIdAndUpdate(id, { estado: 0 }, { new: true })
      res.json({ cliente })
    } catch (error) {
      res.status(400).json({ error })

    }
  },
  putClienteActivar: async (req, res) => {
    try {
      const { id } = req.params
      const cliente = await Cliente.findByIdAndUpdate(id, { estado: 1 }, { new: true })
      res.json({ cliente })
    } catch (error) {
      res.status(400).json({ error })

    }
  },



  //DELETE
  deleteCliente: async (req, res) => {
    try {
      const { cedula } = req.params
      const cliente = await Cliente.findOneAndDelete({ cedula })
      res.json({ cliente })
    } catch (error) {
      res.status(400).json({ error })
    }

  },

  deleteClienteId: async () => {
    try {
      const { id } = req.params
      const cliente = await Cliente.findOneAndDelete(id)
      res.json({ cliente })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
};
export default httpCliente;

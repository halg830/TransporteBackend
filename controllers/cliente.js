import Cliente from "../models/cliente.js"
import bcryptjs from "bcrypt"

const httpCliente = {


  //GET
  getAllCliente: async (req, res) => {
    try {
      const clientes = await Cliente.find();
      res.json({ clientes });
    } catch (error) {
      res.status(400).json({ error });
    }
  }, 
  
  getClienteCedula: async (req, res) => {
    try {
      const cliente = await cliente.find({ cedula });
      // const cliente = await cliente.find({
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
      const cliente = await cliente.findById(id)
    } catch (error) {

    }
  },

  //POST
  postCliente: async (req, res) => {
    try {
      const {nombre, email, cedula, contrasena} = req.body;
      const cliente = new Cliente({nombre, email, cedula, contrasena});

      const salt = bcryptjs.genSaltSync()
      cliente.contrasena = bcryptjs.hashSync(contrasena, salt)

      await cliente.save();

      res.json({ cliente });
    } catch (error) {
      res.json({ error });
    }
  },


  //PUT
  putCliente: async () =>{
    const {id}= req.params
    const {nombre,edad} = req.body
    const cliente = await
    cliente.findByIdAndUpdate(id,{nombre,edad},{new:true});
  },

  putclienteInactivar: async () => { 
    try {
      const {id} =req.params
      const cliente = await cliente.findByIdAndUpdate(id,{estado:0},{new:true})
      res.json({cliente})
    } catch (error) {
      
    }
  },
  putclienteActivar: async () => { 
    try {
      const {id} =req.params
      const cliente = await cliente.findByIdAndUpdate(id,{estado:1})
      res.json({cliente})
    } catch (error) {
      
    }
  },



  //DELETE
  deleteCliente: async () => {
    const { cedula } = req.params
    const cliente = await cliente.findOneAndDelete({ cedula })
    res.json({ cliente })
  },

  deleteClienteId: async () => {
    try {
      const { id } = req.params
      const cliente = await cliente.findOneAndDelete(id)
      res.json({ cliente })
    } catch (error) {
      
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
        const cliente = await Cliente.findOne({ email })
        if (!cliente) {
            return res.status(400).json({
                msg: "Cliente / Password no son correctos"
            })
        }

        if (cliente.estado === 0) {
            return res.status(400).json({
                msg: "Cliente Inactivo"
            })
        }

        const validPassword = bcryptjs.compareSync(password, cliente.password);
        if (!validPassword) {
            return res.status(401).json({
                msg: "Cliente / Password no son correctos"
            })
        }

        // const token = await generarJWT(cliente.id);

        /* res.json({
            cliente,
            token
        }) */

        res.json({msg: "hola"})

    } catch (error) {
        return res.status(500).json({
            msg: "Hable con el WebMaster"
        })
    }
},
  
};
export default httpCliente;

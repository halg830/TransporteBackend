const httpCliente = {
  getCliente: async (req, res) => {
    try {
      const clientes = await clientes.find();
      res.json({ clientes });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  getClienteCedula: async (req, res) => {
    try {
      const cliente = await cliente.find(cedula);
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
  postCliente: async (req, res) => {
    try {
      const {} = req.body;
      const cliente = new cliente({});
      cliente.save();

      res.json({ cliente });
    } catch (error) {
      res.json({ error });
    }
  },
  putcliente: async () => {},

  deleteCliente: async () => {},
};
export default httpCliente;

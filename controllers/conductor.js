import Conductor from "../models/conductor.js";

const httpConductor = {

  //GET
  getConductor: async (req, res) => {
    try {
      const conductor = await Conductor.find();
      res.json({ conductor });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  
  getConductorCedula: async (req, res) => {
    try {
      const conductor = await Conductor.find(cedula);
      res.json({ conductor });
    } catch (error) {
      res.status(400).json({ error });
    }
  },


  //POST
  postConductor: async (req, res) => {
    try {
      const {nombre,cedula} = req.body;
      const conductor = new Conductor({nombre,cedula});
      conductor.save();

      res.json({ conductor });
    } catch (error) {
      res.json({ error });
    }
  },


  //PUT
  putConductor: async () => {},


  //DELETE
  deleteConductor: async () => {},
};
export default httpConductor;

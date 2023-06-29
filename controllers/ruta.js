import Ruta from "../models/ruta.js";
import Ciudad from "../models/ciudad.js";

const httpRuta = {
  postRuta: async (req, res) => {
    try {
      const { hora_salida, fecha_salida, valor } = req.body;

      Ciudad.findOne({})
        .populate("ciudad_destino")
        .exec((err, resultado) => {
          if (err) {
            res.json({err});
          } else {
            // Acceder a los datos de la ciudad destino
            const ciudadDestino = resultado.ciudad_destino;
            res.json({ ciudadDestino });
          }
        });

      
    } catch (error) {}
  },
};

export default httpRuta;

import { Router } from "express";
import httpRuta from "../controllers/ruta.js";
import { check } from "express-validator";
import { mongo } from "mongoose";
import { validarCampos } from "../miderwars/validar.js";
import helpersRuta from "../helpers/ruta.js"


const router = new Router();

router.get("/cargar", httpRuta.getAllRuta);

router.get("/rutasBus/:id", httpRuta.getRutasBus)

router.post(
  "/nuevo",
  [
    check("ciudad_origen", "ciudad duplicada").custom(helpersRuta.ciudadRepetida),
    check("ciudad_origen", "Debe indicar el id de la ciudad de origen.").isMongoId(),
    check("ciudad_destino", "Debe indicar el id de la ciudad de destino.").isMongoId(),
    check("hora_salida", "La hora es obligatoria").notEmpty(),
    // check("hora_salida", "Debe escribir el formato correcto").isDate(),
    check("fecha_salida", "La fecha es obligatoria").notEmpty(),
    // check("fecha_salida", "Debe escribir el formato correcto").isDate(),
    check("valor", "El valor es obligatoria").notEmpty(),
    check("bus", "Debe indicar el id del bus").isMongoId(),
    validarCampos
  ],
  httpRuta.postRuta
);

router.put("/editar", httpRuta.putRuta)

router.put("/inactivar/:id", httpRuta.putRutaInactivar)

router.put("/activar/:id", httpRuta.putRutaActivar)

export default router
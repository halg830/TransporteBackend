import { Router } from "express";
import httpRuta from "../controllers/ruta.js";
import { check } from "express-validator";
import { mongo } from "mongoose";
import { validarCampos } from "../miderwars/validar.js";
import helpersRuta from "../helpers/ruta.js"
import helpersGeneral from "../helpers/general.js";
import { validarJWT } from "../miderwars/validar-jwt.js";

const router = new Router();

router.get("/all", validarJWT, httpRuta.getAllRuta);

router.get("/buscar/:id", validarJWT, httpRuta.getRutasBus)

router.post(
  "/guardar",
  [
    check("ciudad_origen", "ciudad duplicada").custom(helpersRuta.ciudadRepetida),
    check("ciudad_origen", "Debe indicar el id de la ciudad de origen.").isMongoId(),
    check("ciudad_destino", "Debe indicar el id de la ciudad de destino.").isMongoId(),
    check("hora_salida", "La hora es obligatoria").notEmpty(),
    // check("hora_salida", "Debe escribir el formato correcto").isDate(),
    
    // check("fecha_salida", "Debe escribir el formato correcto").isDate(),
    check("valor", "El valor es obligatorio").notEmpty(),
    check('valor', 'El tipo de dato debe ser númerico').isNumeric(),
    check("bus", "Debe indicar el id del bus").isMongoId(),
    validarCampos, validarJWT,
  ],
  httpRuta.postRuta
);

router.put("/editar/:id",[
  check("ciudad_origen", "ciudad duplicada").custom(helpersRuta.ciudadRepetida),
  check("ciudad_origen", "Debe indicar el id de la ciudad de origen.").isMongoId(),
  check("ciudad_destino", "Debe indicar el id de la ciudad de destino.").isMongoId(),
  check("hora_salida", "La hora es obligatoria").notEmpty(),
  // check("hora_salida", "Debe escribir el formato correcto").isDate(),
  
  // check("fecha_salida", "Debe escribir el formato correcto").isDate(),
  check("valor", "El valor es obligatorio").notEmpty(),
  check('valor', 'El tipo de dato debe ser númerico').isNumeric(),
  check("bus", "Debe indicar el id del bus").isMongoId(),
  validarCampos, validarJWT,
], httpRuta.putRuta)

router.put("/inactivar/:id", validarJWT, httpRuta.putRutaInactivar)

router.put("/activar/:id", validarJWT, httpRuta.putRutaActivar)

router.delete("/borrar/:id", validarJWT, httpRuta.deleteRutaId)
router.delete("/borrarAll", validarJWT, httpRuta.deleteAll)
export default router
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
    check('ciudad_origen').custom(helpersRuta.ciudadActiva),
    check('ciudad_destino').custom(helpersRuta.ciudadActiva),
    check("hora_salida", "La hora es obligatoria").notEmpty(),
    validarCampos, validarJWT,
  ],
  httpRuta.postRuta
);

router.put("/editar/:id",[
  check("ciudad_origen", "ciudad duplicada").custom(helpersRuta.ciudadRepetida),
  check("ciudad_origen", "Debe indicar el id de la ciudad de origen.").isMongoId(),
  check('ciudad_origen').custom(helpersRuta.ciudadActiva),
  check("ciudad_destino", "Debe indicar el id de la ciudad de destino.").isMongoId(),
  check('ciudad_destino').custom(helpersRuta.ciudadActiva),
  check("hora_salida", "La hora es obligatoria").notEmpty(),
  validarCampos, validarJWT,
], httpRuta.putRuta)

router.put("/inactivar/:id", validarJWT, httpRuta.putRutaInactivar)

router.put("/activar/:id", validarJWT, httpRuta.putRutaActivar)

router.delete("/borrar/:id", validarJWT, httpRuta.deleteRutaId)
router.delete("/borrarAll", validarJWT, httpRuta.deleteAll)
export default router
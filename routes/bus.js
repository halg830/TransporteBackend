import { Router } from "express";
import httpBus from "../controllers/bus.js";
import { check } from "express-validator";
import { mongo } from "mongoose";
import { validarCampos } from "../miderwars/validar.js";
import helpersBus from "../helpers/bus.js"
import helpersGeneral from '../helpers/general.js'
import { validarJWT } from "../miderwars/validar-jwt.js";

const router = new Router();

router.get("/all", validarJWT, httpBus.getAllBus);

router.get("/buscar/:id",validarJWT, httpBus.getBusId);

router.post(
  "/guardar",
  [
    check('numero', 'Por favor ingrese el número de bus').not().isEmpty(),
    check("empresa", "debe especificar la empresa").not().isEmpty(),
    check('empresa').custom(helpersGeneral.verificarEspacios),
    check('empresa').custom(helpersBus.numeroEmpresa),
    check("asiento", "debe especificar el asiento").not().isEmpty(),
    check("asiento", "El asiento debe ser un número").isNumeric(),
    // check("asiento", "El número de asiento no puede ser mayor a 40").custom(helpersBus.comprobarCantAsientos),
    check("placa", "debe especificar el asiento").not().isEmpty(),
    check('placa').custom(helpersGeneral.verificarEspacios),
    check("placa", "la placa no puede tener mas de 7 caracteres").isLength({
      max: 7
    }),
    check("placa", "La placa ya esta registrada").custom(helpersBus.existePlaca),
    check("conductor", "debe especificar el nombre del conductor").not().isEmpty(),
    check('conductor', 'Id de vendedor no válida').isMongoId(),
    check('conductor').custom(helpersGeneral.verificarEspacios),
    check('conductor').custom(helpersBus.conductorActivo),
    validarCampos,
    validarJWT,
  ], httpBus.postNuevoBus);

router.put("/editar/:id", [
  check("empresa", "debe especificar la empresa").not().isEmpty(),
    check('empresa').custom(helpersGeneral.verificarEspacios),
    check('empresa').custom(helpersBus.numeroEmpresa),
    check("asiento", "debe especificar el asiento").not().isEmpty(),
    check("asiento", "El asiento debe ser un número").isNumeric(),
    // check("asiento", "El número de asiento no puede ser mayor a 40").custom(helpersBus.comprobarCantAsientos),
    check("conductor", "debe especificar el nombre del conductor").not().isEmpty(),
    check('conductor', 'Id de vendedor no válida').isMongoId(),
    check('conductor').custom(helpersGeneral.verificarEspacios),
    check('conductor').custom(helpersBus.conductorActivo),
    check("placa", "debe especificar el asiento").not().isEmpty(),
    check('placa').custom(helpersGeneral.verificarEspacios),
    check("placa", "la placa no puede tener mas de 7 caracteres").isLength({
      max: 7
    }),
    check("placa", "La placa ya esta registrada").custom(helpersBus.existePlaca),
    validarCampos,
    validarJWT,
], httpBus.putBus)

router.put("/activar/:id", validarJWT, httpBus.putBusActivar)
router.put("/inactivar/:id", validarJWT, httpBus.putBusInactivar)
router.delete("/borrar/:id", validarJWT, httpBus.deleteBusId)
router.delete("/borrarAll", validarJWT, httpBus.deleteAll)
export default router 

import { Router } from "express";
import httpBus from "../controllers/bus.js";
import { check } from "express-validator";
import { mongo } from "mongoose";
import { validarCampos } from "../miderwars/validar.js";
import helpersBus from "../helpers/bus.js"
import helpersGeneral from '../helpers/general.js'

const router = new Router();

router.get("/all", httpBus.getAllBus);

router.get("/buscar/:id", httpBus.getBusId);

router.post(
  "/guardar",
  [
    check("empresa", "debe especificar la empresa").not().isEmpty(),
    check('empresa').custom(helpersGeneral.verificarEspacios),
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
    check('conductor').custom(helpersGeneral.verificarEspacios),
    validarCampos
  ], httpBus.postNuevoBus);

router.put("/editar/:id", [
  check("empresa", "debe especificar la empresa").not().isEmpty(),
    check('empresa').custom(helpersGeneral.verificarEspacios),
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
    check('conductor').custom(helpersGeneral.verificarEspacios),
    validarCampos
], httpBus.putBus)

router.put("/activar/:id", httpBus.putBusActivar)
router.put("/inactivar/:id", httpBus.putBusInactivar)
router.delete("/borrar/:id", httpBus.deleteBusId)
router.delete("/borrarAll", httpBus.deleteAll)
export default router 

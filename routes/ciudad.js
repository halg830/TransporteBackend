import { Router } from "express";
import httpCiudad from "../controllers/ciudad.js"
import {validarCampos} from "../miderwars/validar.js"
import { check } from "express-validator";
import { mongo } from "mongoose";
import helpersCiudad from "../helpers/ciudad.js";
import helpersGeneral  from "../helpers/general.js";

const router = new Router();

router.get("/all", httpCiudad.getCiudades);

router.get("/buscar/:id", httpCiudad.getCiudadId)

router.post(
  "/guardar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check('nombre').custom(helpersGeneral.verificarEspacios),
    check("nombre").custom(helpersCiudad.existeNombre),
    validarCampos,
  ],
  httpCiudad.postCiudad
);

router.put("/editar/:id", [
  check("nombre", "El nombre es obligatorio").not().isEmpty(),
  check('nombre').custom(helpersGeneral.verificarEspacios),
  check("nombre").custom(helpersCiudad.existeNombre),
  validarCampos,
], httpCiudad.putCiudad)

router.put("/activar/:id", httpCiudad.putCiudadActivar)
router.put("/inactivar/:id", httpCiudad.putCiudadInactivar)
router.delete("/borrarAll", httpCiudad.deleteAll)
export default router

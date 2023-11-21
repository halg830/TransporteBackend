import { Router } from "express";
import httpCiudad from "../controllers/ciudad.js"
import {validarCampos} from "../miderwars/validar.js"
import { check } from "express-validator";
import { mongo } from "mongoose";
import helpersCiudad from "../helpers/ciudad.js";
import helpersGeneral  from "../helpers/general.js";
import { validarJWT } from "../miderwars/validar-jwt.js";

const router = new Router();

router.get("/all", validarJWT, httpCiudad.getCiudades);

router.get("/buscar/:id", httpCiudad.getCiudadId)

router.post(
  "/guardar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check('nombre').custom(helpersGeneral.verificarEspacios),
    check("nombre").custom(helpersCiudad.existeNombre),
    validarCampos, validarJWT,
  ],
  httpCiudad.postCiudad
);

router.put("/editar/:id", [
  check("nombre", "El nombre es obligatorio").not().isEmpty(),
  check('nombre').custom(helpersGeneral.verificarEspacios),
  check("nombre").custom(helpersCiudad.existeNombre),
  validarCampos, validarJWT,
], httpCiudad.putCiudad)

router.put("/activar/:id", validarJWT, httpCiudad.putCiudadActivar)
router.put("/inactivar/:id", validarJWT, httpCiudad.putCiudadInactivar)
router.delete("/borrarAll", validarJWT, httpCiudad.deleteAll)
export default router

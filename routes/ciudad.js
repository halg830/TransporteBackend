import { Router } from "express";
import httpCiudad from "../controllers/ciudad.js"
import {validarCampos} from "../miderwars/validar.js"
import { check } from "express-validator";
import { mongo } from "mongoose";
import helpersCiudad from "../helpers/ciudad.js";

const router = new Router();

router.get("/cargar", httpCiudad.getCiudades);

router.post(
  "/guardar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("nombre").custom(helpersCiudad.existeNombre),
    validarCampos,
  ],
  httpCiudad.postCiudad
);

export default router

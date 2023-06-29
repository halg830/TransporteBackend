import { Router } from "express";
import httpCiudad from "../controllers/ciudad.js"
import {validarCampos} from "../miderwars/validar.js"
import { check } from "express-validator";
import { mongo } from "mongoose";

const router = new Router();

router.get("/cargar", httpCiudad.getCiudades);
router.post("/buscar", httpCiudad.postCiudad);

router.post(
  "/guardar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("estado", "tiene que especificar el estado").not().isEmpty(),
    validarCampos,
  ],
  httpCiudad.postCiudades
);

export default router

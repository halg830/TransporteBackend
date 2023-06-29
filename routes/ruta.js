import { Router } from "express";
import httpRuta from "../controllers/ruta.js";
import { check } from "express-validator";
import { mongo } from "mongoose";
import { validarCampos } from "../miderwars/validar.js";


const router = new Router();

router.post(
  "/ruta",
  [
    check("hora_salida", "La hora es obligatoria").notEmpty(),
    check("fecha_salida", "La fecha es obligatoria").notEmpty(),
    check("valor", "El valor es obligatoria").notEmpty(),
  ],
  httpRuta.postRuta
);

export default router
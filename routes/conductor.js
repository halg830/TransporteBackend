import { Router } from "express";
import httpConductor from "../controllers/conductor.js";
import { check } from "express-validator";
import {validationResult} from "express-validator"
import { mongo } from "mongoose";
import { validarCampos } from "../miderwars/validar.js";

const router = new Router();

router.post(
  "/hola",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("nombre", "Minimo 8 caracteres").isLength({ min: 8 }),
    check("cedula", "La cedula es obligatoria").notEmpty(),
    check("cedula", "Tiene que tener 10 digitos ").isLength({ min: 10, max: 10 }),
    validarCampos
  ],
);

export default router
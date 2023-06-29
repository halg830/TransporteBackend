import { Router} from "express";
import httpCliente from "../controllers/cliente.js";
import { check } from "express-validator";
/* import {validarCampos} from "../" */
import { mongo } from "mongoose";

const router = new Router();

router.get("/allClientes", httpCliente.getAllCliente)

router.get("/cliente/:cedula", httpCliente.getClienteCedula)

router.post(
  "/guardar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("nombre", "Mínimo 8 caracteres").isLength({ min: 8 }),
    check("cedula", "La cedula es obligatoria").notEmpty(),
    check("cedula", "Tiene que tener 10 digitos").isLength({ min: 10, max: 10 }),
  ], httpCliente.postCliente
  );

export default router
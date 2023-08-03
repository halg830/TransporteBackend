import { Router } from "express";
import httpCliente from "../controllers/cliente.js";
import { check } from "express-validator";
import { validarCampos } from "../miderwars/validar.js";
import { mongo } from "mongoose";
import { validarJWT } from "../miderwars/validar-jwt.js"


const router = new Router();

router.get("/allClientes", validarJWT, httpCliente.getAllCliente);

router.get("/cliente/:cedula", validarJWT, httpCliente.getClienteCedula);

router.post("/login", httpCliente.login)

router.post(
  "/guardar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("nombre", "Mínimo 8 caracteres").isLength({ min: 8 }),
    check("cedula", "La cedula es obligatoria").notEmpty(),
    check("cedula", "Tiene que tener 10 digitos").isLength({
      min: 10,
      max: 10,
    }),
    validarCampos
  ],
  httpCliente.postCliente
  );

router.put("/editar/:cedula",
[
  check("nombre", "El nombre es obligatorio").not().isEmpty(),
  check("nombre", "Mínimo 8 caracteres").isLength({ min: 8 }),
  /* check("cedula", "La cedula es obligatoria").notEmpty(),
  check("cedula", "Tiene que tener 10 digitos").isLength({
    min: 10,
    max: 10,
  }),
  validarCampos */
],
httpCliente.putCliente
)

router.delete("eliminar/:cedula", validarJWT, httpCliente.deleteCliente)

export default router;

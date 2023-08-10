import { Router } from "express";
import httpVendedor from "../controllers/vendedor.js";
import { check } from "express-validator";
import {validarCampos} from "../miderwars/validar.js"
import { mongo } from "mongoose";
// import {helpers} from
import { validarJWT } from "../miderwars/validar-jwt.js";

const router = new Router();

router.get("/allVendedor", httpVendedor.getAllVendedor);

router.get("/buscar/:cedula",validarJWT, httpVendedor.getVendedorCedula);

router.get("/buscarId/:id", validarJWT, httpVendedor.getVendedorId)

router.delete("/eliminar/:cedula", validarJWT, httpVendedor.deleteVendedor);

router.delete("/eliminar/:id", validarJWT, httpVendedor.deleteVendedor);

router.post("/login", httpVendedor.login)

router.post(
  "/agregar",
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("nombre", "El nombre debe tener minimo 8 caracteres").isLength({min: 8}),
    check("apellido", "El apellido es obligatorio").notEmpty(),
    check("cedula", "La cedula es obligatorio").notEmpty(),
    check("cedula", "La cedula debe tener 10 digitos").isLength({max: 10,min: 10}),
    check("telefono", "El numero es obligatorio").notEmpty(),
    check("telefono", "El numero debe tener 10 digitos").isLength({max: 10,min: 10}),
    check("usuario", "El usuario es obligatorio").notEmpty(),
    check("usuario", "El usuario debe tener 6 digitos o más").isLength({min: 6}),
    check("contrasena", "La contraseña es obligatoria").notEmpty(),
    check("contrasena","La contraseña debe tener al menos 8 caracteres").isLength({ min: 8 }),
    validarCampos
  ],
  httpVendedor.postVendedor
);

router.put("/modificar/:id",[
  check("nombre", "El nombre es obligatorio").notEmpty(),
  check("nombre", "El nombre debe tener minimo 8 caracteres").isLength({min: 8}),
  check("apellido", "El apellido es obligatorio").notEmpty(),
  check("telefono", "El numero es obligatorio").notEmpty(),
  check("telefono", "El numero debe tener 10 digitos").isLength({max: 10,min: 10}),
  check("contrasena", "La contraseña es obligatoria").notEmpty(),
  check("contrasena","La contraseña debe tener al menos 8 caracteres").isLength({ min: 8 }),
  validarCampos
], validarJWT, httpVendedor.putVendedor)

router.put("/desactivar/:id", validarJWT, httpVendedor.putVendedorInactivar)

router.put("/activar/:id", httpVendedor.putVendedorActivar)

export default router 
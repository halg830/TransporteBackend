import { Router } from "express";
import httpCliente from "../controllers/cliente.js";
import { check } from "express-validator";
import { validarCampos } from "../miderwars/validar.js";

const router = new Router();

router.get("/allClientes", httpCliente.getAllCliente);

router.get("/cliente/:cedula", httpCliente.getClienteCedula);

router.get("/cliente/:id", httpCliente.getClienteId)

router.post(
  "/guardar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("nombre", "Mínimo 8 caracteres").isLength({ min: 8 }),
    check("cedula", "La cedula es obligatoria").notEmpty(),
    check("cedula", "Tiene que tener 10 digitos").isLength({min: 10, max: 10,}),
    check("email", "El correo electrónico es obligatorio").notEmpty(),
    check("email", "Formato de correo electrónico inválido").isEmail(),
    check("contrasena", "La contraseña es obligatoria").notEmpty(),
    check("contrasena","La contraseña debe tener al menos 8 caracteres").isLength({ min: 8 }),
    validarCampos 
  ],
  httpCliente.postCliente
  );

router.put("/editar/:id",httpCliente.putCliente);

router.put("/inactivar/:id", httpCliente.putClienteInactivar)

router.put("/activar/:id", httpCliente.putClienteActivar)

router.delete("/eliminar/:cedula", httpCliente.deleteCliente)

router.delete("/eliminar/:id", httpCliente.deleteClienteId)

export default router;

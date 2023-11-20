import { Router } from "express";
import httpCliente from "../controllers/cliente.js";
import { check } from "express-validator";
import { validarCampos } from "../miderwars/validar.js";
import { mongo } from "mongoose";
import helpersCliente from "../helpers/cliente.js"
import { helpersGeneral } from "../helpers/general.js";

const router = new Router();

router.get("/all", httpCliente.getAllCliente);

router.get("/buscarCC/:cedula", httpCliente.getClienteCedula);

router.get("/buscar/:id", httpCliente.getClienteId)
 
router.post(
  "/guardar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check('nombre').custom(helpersGeneral.verificarEspacios),
    check("nombre", "Máximo 15 caracteres").isLength({ max: 15 }),
    check("cedula", "La cedula es obligatoria").notEmpty(),
    check('cedula').custom(helpersGeneral.verificarEspacios),
    check("cedula", "Tiene que tener 10 digitos").isLength({
      min: 8,
      max: 10,
    }),
    check("cedula", "La cedula esta duplicada").custom(helpersCliente.existeCedula),
    check('email', "El email es requerido").notEmpty(),
    check('email').custom(helpersGeneral.verificarEspacios),
    check("email", "El email debe contener el símbolo @").custom(helpersCliente.validarEmail),
    check("email", "El email ya existe").custom(helpersCliente.existeEmail),
    validarCampos 
  ],
  httpCliente.postCliente
  );  

router.put("/editar/:id", [
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check('nombre').custom(helpersGeneral.verificarEspacios),
    check("nombre", "Máximo 15 caracteres").isLength({ max: 15 }),
    check("cedula", "La cedula es obligatoria").notEmpty(),
    check('cedula').custom(helpersGeneral.verificarEspacios),
    check("cedula", "Tiene que tener 10 digitos").isLength({
      min: 8,
      max: 10,
    }),
    check("cedula", "La cedula esta duplicada").custom(helpersCliente.existeCedula),
    check('email', "El email es requerido").notEmpty(),
    check('email').custom(helpersGeneral.verificarEspacios),
    check("email", "El email debe contener el símbolo @").custom(helpersCliente.validarEmail),
    check("email", "El email ya existe").custom(helpersCliente.existeEmail),
    validarCampos 
  ],
    validarCampos
],httpCliente.putCliente);

router.put("/inactivar/:id", httpCliente.putClienteInactivar)

router.put("/activar/:id", httpCliente.putClienteActivar)

router.delete("/eliminar/:cedula", httpCliente.deleteCliente)

router.delete("/borrar/:id", httpCliente.deleteClienteId)

export default router;

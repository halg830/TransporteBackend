import { Router } from "express";
import httpConductor from "../controllers/conductor.js";
import { check } from "express-validator";
import {validationResult} from "express-validator"
import { mongo } from "mongoose";
import { validarCampos } from "../miderwars/validar.js";
import helpersConductor from "../helpers/conductor.js";

const router = new Router();

router.get("/cargar", httpConductor.getAllConductor)

router.post("/agregar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("nombre", "El nombre debe solo puede tener 15 caracteres").isLength({max: 15}),
    check("cedula", "La cedula es obligatoria").notEmpty(),
    check("cedula", "Tiene que tener 10 digitos ").isLength({ min: 10, max: 10 }),
    check("cedula").custom(helpersConductor.existeCedula),
    validarCampos
  ], httpConductor.postConductor
);

router.get("/buscar/:cedula", httpConductor.getConductorCedula);

router.get("/buscarId/:id",  httpConductor.getConductorId)

router.put("/modificar/:id",[
  check("nombre", "El nombre es obligatorio").notEmpty(),
  check("nombre", "El nombre debe solo puede tener 15 caracteres").isLength({max: 15}),
  validarCampos
],  httpConductor.putConductor)

router.put("/desactivar/:id", httpConductor.putConductorInactivar)

router.put("/activar/:id", httpConductor.putConductorActivar)

router.delete("/eliminar/:cedula",  httpConductor.deleteConductor);

router.delete("/eliminar/:id",  httpConductor.deleteConductorId);


export default router
import { Router } from "express";
import httpConductor from "../controllers/conductor.js";
import { check } from "express-validator";
import {validationResult} from "express-validator"
import { mongo } from "mongoose";
import { validarCampos } from "../miderwars/validar.js";

const router = new Router();

router.get("/cargar", httpConductor.getAllConductor)

router.post("/agregar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("nombre", "Minimo 8 caracteres").isLength({ min: 8 }),
    check("cedula", "La cedula es obligatoria").notEmpty(),
    check("cedula", "Tiene que tener 10 digitos ").isLength({ min: 10, max: 10 }),
    validarCampos
  ], httpConductor.postConductor
);

router.get("/buscar/:cedula", httpConductor.getConductorCedula);

router.get("/buscarId/:id",  httpConductor.getConductorId)

router.delete("/eliminar/:cedula",  httpConductor.deleteConductor);

router.put("/modificar/:id",[
  check("nombre", "El nombre es obligatorio").notEmpty(),
  check("nombre", "El nombre debe tener minimo 8 caracteres").isLength({min: 8}),
  validarCampos
],  httpConductor.putConductor)

router.put("/desactivar/:id", httpConductor.putConductorInactivar)

router.put("/activar/:id", httpConductor.putConductorActivar)



export default router
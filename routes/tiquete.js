import { Router } from "express";
import httpTiquete from "../controllers/tiquete.js";
import { check } from "express-validator";
import { mongo } from "mongoose";
import { validarCampos } from "../miderwars/validar.js";

const router = new Router();

router.get("/buscar", httpTiquete.getAllTiquete)

router.post("/agregar", httpTiquete.postTiquete);

router.get("/buscar/:cedula", httpTiquete.getTiqueteCedula);

router.get("/buscarId/:id",  httpTiquete.getTiqueteId)

router.delete("/eliminar/:cedula",  httpTiquete.deleteTiquete);

router.put("/modificar/:id",  httpTiquete.putTiquete)

router.put("/desactivar/:id", httpTiquete.putTiqueteInactivar)

router.put("/activar/:id", httpTiquete.putTiqueteActivar)


export default router
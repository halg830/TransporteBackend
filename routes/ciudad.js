import { Router } from "express";
import httpCiudad from "../controllers/ciudad.js"
import { check } from "express-validator";

const router = new Router();

router.get("/cargar", httpCiudad.getCiudades);

router.post(
  "/guardar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("estado", "tiene que especificar el estado").not().isEmpty(),
  
  ],
  httpCiudad.postCiudades
);

export default router

import { Router } from "express";
import httpBus from "../controllers/bus.js";
import { check } from "express-validator";
import { mongo } from "mongoose";

const router = new Router();

router.get("/buses", httpBus.getBuses);

router.get("/buscarbus", httpBus.getBuscarBus);

router.post(
  "/nuevobus",
  [
    check("empresa", "debe especificar la empresa").not().isEmpty(),
    check("asiento", "debe especificar el asiento").not().isEmpty(),
    check("placa", "debe especificar el asiento").not().isEmpty(),
    check("placa", "la placa no puede tener mas de 7 caracteres").isLength({
      max: 7
    }),
    check("conductor", "debe especificar el nombre del conductor").not().isEmpty(),
  ], httpBus.postNuevoBus);

export default router 

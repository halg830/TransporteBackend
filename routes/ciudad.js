import { Router } from "express";
import httpCiudad from "../controllers/ciudad.js"
import { check } from "express-validator";
import { Router, Router } from "express";
import httpConductor from "../controllers/conductor.js";
import { check } from "express-validator";
import { mongo } from "mongoose";

const router = new Router();

router.post(
  "/actualizar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("estado", "tiene que especificar el estado").not().isEmpty(),
  ],
  httpCiudad.postCiudad
);

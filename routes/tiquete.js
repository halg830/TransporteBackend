import { Router } from "express";
import httpTiquete from "../controllers/tiquete.js";
import { check } from "express-validator";
import { mongo } from "mongoose";
import { validarCampos } from "../miderwars/validar.js";
import helpersTiquete from "../helpers/tiquete.js";
import { validarJWT } from "../miderwars/validar-jwt.js";

const router = new Router();

router.get("/all", validarJWT, httpTiquete.getAllTiquete);

router.get("/buscar/:id", validarJWT, httpTiquete.getTiqueteId);

router.get("/filtrarFechas/:fechaA/:fechaB", validarJWT, httpTiquete.getFiltroFechas);

router.get(
  "/asientosOcupados/:id/:fecha_salida", validarJWT,
  httpTiquete.getAsientosOcupados
);

router.get("/continuarVenta", validarJWT, httpTiquete.getContinuarVenta);

router.post(
  "/guardar",
  [
    check("num_asiento", "Debe ingresar un asiento").notEmpty(),
    check("num_asiento", "Debe ingresar un asiento").custom(
      helpersTiquete.validarAsiento
    ),
    check("vendedor", "Debe ingresar el id del vendedor").isMongoId(),
    check("ruta", "Debe ingresar el id del ruta").isMongoId(),
    check("cliente", "Debe ingresar el id del cliente").isMongoId(),
    check("fecha_salida", "La fecha es obligatoria").notEmpty(),
    validarCampos, validarJWT,
  ],
  httpTiquete.postTiquete
);

// router.get("/buscar/:cedula", httpTiquete.getTiqueteCedula);

// router.get("/buscar/:id",  httpTiquete.getTiqueteId)

router.delete("/borrar/:id", validarJWT, httpTiquete.deleteTiqueteId);

router.put(
  "/editar/:id",
  [
    check("num_asiento", "Debe ingresar un asiento").notEmpty(),
    check("num_asiento", "Debe ingresar un asiento").custom(
      helpersTiquete.validarAsiento
    ),
    check("vendedor", "Debe ingresar el id del vendedor").isMongoId(),
    check("ruta", "Debe ingresar el id del ruta").isMongoId(),
    check("cliente", "Debe ingresar el id del cliente").isMongoId(),
    check("fecha_salida", "La fecha es obligatoria").notEmpty(),
    validarCampos, validarJWT,
  ],
  httpTiquete.putTiquete
);

router.put("/inactivar/:id", validarJWT, httpTiquete.putTiqueteInactivar);

router.put("/activar/:id", validarJWT, httpTiquete.putTiqueteActivar);
router.delete("/borrarAll", validarJWT, httpTiquete.deleteAll)
export default router;

import { Router, Router } from "express";
import httpVendedor from "../controllers/vendedor.js";
import { check } from "express-validator";
import { mongo } from "mongoose";

const router = new Router

router.post('/vendedor',[
    check("nombre","El nombre es obligatorio").notEmpty(),
    check("nombre","El nombre debe tener minimo 8 caracteres").isLength({min:8}),
    check("apellido", "El apellido es obligatorio").notEmpty(),
    check("cedula", "La cedula es obligatorio").notEmpty(),
    check("cedula", "La cedula debe tener 10 digitos").isLength({max:10, min:10}),
    check("telefono", "El numero es obligatorio").notEmpty(),
    check("telefono", "El numero debe tener 10 digitos").isLength({max:10, min:10}),
], httpVendedor.postVendedor)
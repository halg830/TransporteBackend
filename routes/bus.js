import { Router, Router } from "express";
import httpBus from "../controllers/bus.js";
import { check } from "express-validator";
import { mongo } from "mongoose";

const router = new Router

router.get('/hola',[
    
    check("empresa", "debe especificar la empresa").not().isEmpty(),


    check("asiento", "debe especificar el asiento").not().isEmpty(),


    check("placa", "debe especificar el asiento").not().isEmpty(),
    check("placa","la placa no puede tener mas de 7 caracteres").isLength({max:10}),


    check("createdAt", "debe especificar la fecha").not().isEmpty(),


    check("estado", "estado invalido").not().isEmpty(),


    check("conductor", "debe especificar el nombre del conductor").not().isEmpty(),

], httpBus.getbus)
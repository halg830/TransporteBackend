import { Router, Router } from "express";
import httpRuta from "../controllers/ruta.js";
import { check } from "express-validator";
import { mongo } from "mongoose";

const router = new Router

router.get('/ruta',[
    check("nombre","El nombre es obligatorio").not().isEmpty()
], httpRuta.getRuta)
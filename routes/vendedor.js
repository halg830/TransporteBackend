import { Router, Router } from "express";
import httpVendedor from "../controllers/vendedor.js";
import { check } from "express-validator";
import { mongo } from "mongoose";

const router = new Router

router.post('/vendedor',[
    check("nombre","El nombre es obligatorio").not().isEmpty(),
    check("nombre","minimo 8 caracteres").isLength(),


], httpCliente.getcliente)
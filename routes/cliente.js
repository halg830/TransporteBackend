import { Router, Router } from "express";
import httpCliente from "../controllers/cliente.js";
import { check } from "express-validator";
import { mongo } from "mongoose";

const router = new Router

router.get('/hola',[
    check("nombre","El nombre es obligatorio").not().isEmpty(),
    check("nombre","minimo 8 caracteres").isLength(),
    // validarid
    check("cliente").isMongoId()
], httpCliente.getcliente)
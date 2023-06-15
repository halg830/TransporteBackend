import { Router, Router } from "express";
import httpCliente from "../controllers/cliente.js";
import { check } from "express-validator";
import { mongo } from "mongoose";

const router = new Router

router.get('/hola',[
    check("nombre","El nombre es obligatorio").not().isEmpty(),
    check("nombre","Minimo 8 caracteres").isLength({ min: 8 }),
    check("cedula","La cedula es obligatoria").notEmpty(),
    check("cedula","Tiene que tener 10 digitos "),isLength({min:10,max:10}),
    check("email","Email es necesario").notEmpty(),
    check("email","email es incorrecto").isEmail(),
    check("password","password requerida").notEmpty(),
    check("password","password incorrecta").isLength({min: 8}).matches("/[a-zA-Z]/").matches("/[0-9]/"),
    check("mayor","")
    // check("cliente").isMongoId()
], httpCliente.getcliente)
import { Router } from "express";
import httpTiquete from "../controllers/tiquete.js";
import { check } from "express-validator";
import { mongo } from "mongoose";

const router = new Router();

router.post("/tiquete", [], httpRuta.getRuta);

export default router
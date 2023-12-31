import jwt from "jsonwebtoken"
import Vendedor from "../models/vendedor.js";

const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: "4h"//4h
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("No se pudo generar el token")
            } else {
                resolve(token)
            }
        })
    })
}

const validarJWT = async (req, res, next) => {
    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            error: "No hay token en la peticion"
        })
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        let usuario = await Vendedor.findById(uid);

        if (!usuario) {
            return res.status(401).json({
                error: "Token no válido, no existe usuario"//- usuario no existe DB
            })
        }


        if (usuario.estado == 0) {
            return res.status(401).json({
                error: "Token no válido, usuario inactivo" //- usuario con estado: false
            })
        }
        req.Vendedor=usuario

        next();

    } catch (error) {
        res.status(401).json({
            error: "Token no valido"
        })
    }
}


export { generarJWT, validarJWT }
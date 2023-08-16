import Ciudad from '../models/ciudad.js'

const helpersCiudad = {
    existeNombre: async (nombre, req) => {
        if (nombre) {
            const existe = await Cliente.findOne({ nombre })
            if (existe) {
                if (req.req.method === "PUT") {
                    if (existe.nombre !== req.req.usuario.nombre)
                        throw new Error(`Ya existe ese serial en la base de datos!!! ${nombre}`)

                } else {
                    throw new Error(`Ya existe ese nombre en la base de datos!!! ${nombre}`)
                }
            }
        }
    },
}

export default helpersCiudad
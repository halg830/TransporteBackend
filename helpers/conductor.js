import Cliente from "../models/cliente.js"


const helpersCliente = {
    existeClienteById: async (id, req) => {
        const existe = await Cliente.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }

        req.req.clienteUpdate = existe

    },

    existeCedula: async (cedula, req) => {
        if (cedula) {
            const existe = await Cliente.findOne({ cedula })
            if (existe) {
                if (req.req.method === "PUT") {
                    if (existe.cedula !== req.req.holder.cedula)
                        throw new Error(`Ya existe ese serial en la base de datos!!! ${cedula}`)

                } else {
                    throw new Error(`Ya existe esa cedula en la base de datos!!! ${cedula}`)
                }
            }
        }
    },

    verificarCedula: () => {
        return async (req, res, next) => {
            const existe = await Cedula.findOne({ cedula: req.body.cedula });

            if (!existe) {
                return res.status(401).json({ msg: `La cedula no está registrada` });
            }

            next();
        }
    },

    existeEmail: async (email, req) => {
        if (email) {
            const existe = await Holder.findOne({ email })
            if (existe) {
                if (req.req.method === "PUT") {
                    if (existe.email !== req.req.holder.email)
                        throw new Error(`Ya existe ese serial en la base de datos!!! ${email}`)

                } else {
                    throw new Error(`Ya existe ese email en la base de datos!!! ${email}`)
                }
            }
        }
    },



}
export default helpersCliente
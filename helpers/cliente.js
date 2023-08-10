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

    existeEmail: async (email, req) => {
        if (email) {
            const existe = await Cliente.findOne({ email })
            if (existe) {
                if (req.req.method === "PUT") {
                    if (existe.email !== req.req.cliente.email)
                        throw new Error(`Ya existe ese serial en la base de datos!!! ${email}`)

                } else {
                    throw new Error(`Ya existe ese email en la base de datos!!! ${email}`)
                }
            }
        }
    },



}
export default helpersCliente
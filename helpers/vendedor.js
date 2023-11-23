import Vendedor from "../models/vendedor.js"


const helpersVendedor = {
    existeVendedorById: async (id, req) => {
        const existe = await Vendedor.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }

        req.req.vendedorUpdate = existe

    },

    existeCedula: async (cedula, req) => {
        if (cedula) {
            const existe = await Vendedor.findOne({ cedula })
            if (existe) {
                if (req.req.method === "PUT") {
                   
                    throw new Error(`Ya existe esa cedula en la base de datos!!! ${cedula}`)
                }
            }
        }
    },

    existeUsuario: async (usuario, req) => {
        if (usuario) {
            const existe = await Vendedor.findOne({ usuario })
            if (existe) {
                if (req.req.method === "PUT") {
                
                    throw new Error(`Ya existe ese usuario en la base de datos!!! ${usuario}`)
                }
            }
        }
    },
}
export default helpersVendedor
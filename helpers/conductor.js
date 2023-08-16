import Conductor from "../models/conductor.js"


const helpersConductor = {

    existeCedula: async (cedula, req) => {
        if (cedula) {
            const existe = await Conductor.findOne({ cedula })
            if (existe) {
                if (req.req.method === "PUT") {
                    if (existe.cedula !== req.req.holder.cedula)
                        throw new Error(`Ya existe ese serial en la base de datos!!! ${cedula}`)

                } else {
                    throw new Error(`Ya existe esa cedula en la base de datos!!! ${cedula}`)
                }
            }
        }
    }

}
export default helpersConductor
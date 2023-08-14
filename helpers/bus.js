import Bus from "../models/bus.js"

const helpersBus = {
    comprobarCantAsientos: async (asiento)=>{
        
        if(asiento>40){
            throw new Error("El número de asientos debe ser igual o inferior a 40")
        }

    },

    existePlaca: async (placa)=>{
        const existe = await Bus.findOne({placa})

        if(existe){
            throw new Error("La placa ya esta registrada en la base de datos.")
        }
    }
}

export default helpersBus
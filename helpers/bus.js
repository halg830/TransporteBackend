import Bus from "../models/bus.js"

const helpersBus = {
    comprobarCantAsientos: async (asiento)=>{
        
        if(asiento>40){
            throw new Error("El número de asientos debe ser igual o inferior a 40")
        }

    }
}

export default helpersBus
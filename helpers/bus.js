import Bus from "../models/bus.js"
import Conductor from '../models/conductor.js'

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
    },

    conductorActivo: async(conductor)=>{
        const conductor = await Conductor.findOne({id: conductor})

        if(conductor && conductor?.estado===0){
         throw new Error('El conductor esta inactivo.')
        }

        throw new Error('El conductor no existe en la base de datos.')
    }
}

export default helpersBus
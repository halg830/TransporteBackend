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

    conductorActivo: async(id)=>{
        const conductor = await Conductor.findOne({id})

        console.log(conductor);
        if(conductor.estado===0){
         throw new Error('El conductor esta inactivo.')
        }
    }
}

export default helpersBus
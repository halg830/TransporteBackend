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
        const conductor = await Conductor.findOne({_id: id})

        console.log(conductor);
        if(conductor.estado===0){
         throw new Error('El conductor esta inactivo.')
        }
    },

    numeroEmpresa: async(empresa,req)=>{
        const bus = await Bus.find({empresa})

        console.log(bus);
        if(bus){
            if(bus.numero===req.req.body.numero && req.req.method === "PUT"){
                throw new Error('La empresa ya cuenta con ese número de bus')
            }else if(req.req.method==='POST'){
                throw new Error('La empresa ya cuenta con ese número de bus')
            }
        }
    }
}

export default helpersBus
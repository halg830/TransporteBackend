import Bus from "../models/bus.js"
import Conductor from '../models/conductor.js'
import helpersGeneral from "./general.js";

const helpersBus = {
    comprobarCantAsientos: async (asiento)=>{
        
        if(asiento>40){
            throw new Error("El número de asientos debe ser igual o inferior a 40")
        }

    },

    existePlaca: async (placa,req)=>{
        const placaRegExp = new RegExp(`^${await helpersGeneral.quitarTildes(placa)}$`, 'i');
        const existe = await Bus.findOne({ placa: { $regex: placaRegExp } })
        console.log("e",existe);
        const {_id} = req.req.body
        if(existe){
            if(existe._id!=_id && req.req.method === "PUT")
            throw new Error("La placa ya esta registrada en la base de datos.")
            else if(req.req.method === "POST")
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
        const bus = await Bus.findOne({empresa})

        console.log("a",bus);
        if(bus){
            if(bus._id!=req.req.body._id && req.req.method === "PUT"){
                throw new Error('La empresa ya cuenta con ese número de bus')
            }else if(req.req.method==='POST'){
                throw new Error('La empresa ya cuenta con ese número de bus')
            }
        }
    }
}

export default helpersBus
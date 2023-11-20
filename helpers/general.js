export const helpersGeneral = {
    verificarEspacios: async(val)=>{
        if(typeof val === 'string'){
            if(val.trim()==='') throw new Error ('Solo espacios no permitidos')
        }
    }
}
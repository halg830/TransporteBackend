export const helpersGeneral = {
    verificarEspacios: async(val, req)=>{
        console.log(req.req.body);
        if(typeof val === 'string'){
            if(val.trim()==='') throw new Error ('Solo espacios no permitidos')
        }
    }
}
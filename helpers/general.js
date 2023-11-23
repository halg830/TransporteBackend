const helpersGeneral = {
    verificarEspacios: async(val)=>{
        // console.log("z",req.req.body);
        console.log(val);
        if(typeof val === 'string'){
            if(val.trim()==='') throw new Error ('Solo espacios no permitidos')
        }
    }
}

export default helpersGeneral
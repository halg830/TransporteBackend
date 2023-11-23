import Tiquete from "../models/tiquete.js"

const helpersTiquete = {
    validarAsiento: async (num_asiento, req)=>{
        const ruta = req.req.body.ruta

        console.log("r", ruta);
        
        const buscar = await Tiquete.findOne({ruta}).populate({ path: "ruta", populate: { path: "bus"}})

        console.log("b", buscar);

        console.log(num_asiento);

        if(buscar){
            const num_asiento_buscar = buscar.num_asiento
            const asiento_bus = buscar.ruta.bus.asiento
            if(num_asiento_buscar===num_asiento) throw new Error(`Asiento ${num_asiento} ya está ocupado`)
            if(asiento_bus<num_asiento || num_asiento<0 ) throw new Error(`Asiento erróneo`)

        }
    },
}

export default helpersTiquete
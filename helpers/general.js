const helpersGeneral = {
  verificarEspacios: async (val) => {
    // console.log("z",req.req.body);
    console.log(val);
    console.log("h", val);
    if (typeof val === "string") {
      if (val.trim() === "") throw new Error("Solo espacios no permitidos");
    }
  },
  eliminarEspacios: async (body) => {
    const nuevoObjeto = {};

    Object.entries(body).forEach(([clave, valor]) => {
      if (typeof valor === "string") {
        nuevoObjeto[clave] = valor.trim();
      } else {
        nuevoObjeto[clave] = valor;
      }
    });

    return nuevoObjeto;
  },
};

export default helpersGeneral;

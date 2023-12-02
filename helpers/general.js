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
    Object.values(body).forEach((e) => {
      if (typeof e === "string") {
        e.trim();
      }
    });
  },
};

export default helpersGeneral;

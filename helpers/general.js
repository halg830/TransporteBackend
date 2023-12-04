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

  quitarTildes: async (texto) => {
    const tildes = {
      á: "a",
      é: "e",
      í: "i",
      ó: "o",
      ú: "u",
      ü: "u",
      Á: "A",
      É: "E",
      Í: "I",
      Ó: "O",
      Ú: "U",
      Ü: "U",
      ñ: "n",
      Ñ: "N",
    };

    return texto.replace(
      /[áéíóúüÁÉÍÓÚÜñÑ]/g,
      (match) => tildes[match] || match
    );
  },
  primeraMayuscula: async(cadena) => {
    console.log("C",cadena);
    const mayus = cadena.toLowerCase()
    return mayus.charAt(0).toUpperCase() + mayus.slice(1);
  },
};

export default helpersGeneral;

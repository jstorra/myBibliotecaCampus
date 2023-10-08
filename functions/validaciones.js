export const validacionDato = ({ nombreCampo, valor, tipoEsperado }) => {
    if (valor.constructor.name.toLowerCase() === "string") valor = valor.trim()
    if (nombreCampo === "email" && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor)) throw new Error('El correo no es válido.')
    if (!valor) throw new Error(`El campo '${nombreCampo.split("Id")[0].toUpperCase()}' no está definido.`);
    if (tipoEsperado === "date") {
        valor = new Date(valor);
        if (isNaN(valor.getTime()) || !(valor.getFullYear() <= 2040)) throw new Error('La fecha no es válida.');
    }
    if (valor.constructor.name.toLowerCase() !== tipoEsperado.toLowerCase()) throw new Error(`El campo '${nombreCampo.split("Id")[0].toUpperCase()}' tiene un formato inválido.`);
    return { [nombreCampo]: valor.constructor.name.toLowerCase() === "date" ? valor.toISOString().split('T')[0] : valor };
}

export const validacionObj = (obj) => {
  if (obj.constructor.name.toLowerCase() !== "object" || Object.keys(obj).length === 0) throw new Error('Usuario envie datos por favor.');
}

export const validacionIds = async ({obj, uri}) => {
  let ids = ["autorId", "categoriaId", "editorialId", "estadoId", "usuarioId", "libroId"]
  for (let key in obj){
    if (ids.includes(key)) {
      let res = await fetch(`${uri}/${key.split("I")[0]+"s"}/${obj[key]}`)
      if (!res.ok) throw new Error(`El/la ${key.split("I")[0].toUpperCase()} no existe.`)
    }
  }
}

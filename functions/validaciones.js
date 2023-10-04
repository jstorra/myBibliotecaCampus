export const validacionDato = ({ nombreCampo, valor, tipoEsperado }) => {
    if (!valor) throw new Error(`El campo '${nombreCampo}' no está definido.`);
    if (tipoEsperado === "date") {
        valor = new Date(valor);
        if (isNaN(valor.getTime()) || !(valor.getFullYear() <= 2040)) throw new Error('La fecha no es válida.');
    }
    if (valor.constructor.name.toLowerCase() !== tipoEsperado.toLowerCase()) throw new Error(`El campo '${nombreCampo}' tiene un formato inválido.`);
    return { [nombreCampo]: valor.constructor.name.toLowerCase() === "date" ? valor.toISOString().split('T')[0] : valor };
}
export const validacionObj = (obj) => {
  if (obj.constructor.name.toLowerCase() !== "object" || Object.keys(obj).length === 0) throw new Error('Usuario envie datos por favor.');
}

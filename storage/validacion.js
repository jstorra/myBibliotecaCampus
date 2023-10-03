export const validacion = ({ nombreCampo, valor, tipoEsperado }) => {
    if (!nombreCampo) throw new Error(`El campo ${nombreCampo} no esta definido`)
    if (tipoEsperado == "number") {
        if (!(valor.constructor.name.toLowerCase() == "number")) {
            throw new Error(`El tipo de dato de ${nombreCampo} no cumple con el formato`)
        }
    }
    if (tipoEsperado == "string") {
        if (!(valor.constructor.name.toLowerCase() == "string")) {
            throw new Error(`El tipo de dato de ${nombreCampo} no cumple con el formato`)
        }
    }
    if (tipoEsperado == "date") {

        if (!(valor.constructor.name.toLowerCase() == "string")) {
            throw new Error(`El tipo de dato de ${nombreCampo} no cumple con el formato`)
        }
    }
}

// console.log(validaciones())
// let tabla = { "nombre": "string", "edad": "number" };
// console.log(Object.entries(tabla))

// let obj = {
//     "nombre": "Pepito", "edad": 15, "religion": "catolico", "hijo": "julian"
// }

// let fecha = new Date();
// console.log(!isNaN(fecha.getTime()))
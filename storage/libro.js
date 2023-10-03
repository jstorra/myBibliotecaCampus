import uri from "../config.js";
import { getAll, getOne, post, deleteOne, putOne } from "../functions/solicitudes.js"
import { validacionDato, validacionObj } from "../functions/validaciones.js";
const endpoint = "/libro/";
const primaryKey = { id: "number" };
const tabla = {
  autorId: "number",
  categoriaId: "number",
  editorialId: "number",
  fechaLanzamiento: "date",
  titulo: "string",
  isbn: "string",
  numPaginacion: "number",
  estadoId: "number",
};

console.log(await getAll({uri, endpoint}))
console.log(await getOne({uri, endpoint, id}));
obj = {
  autorId: 2,
  categoriaId: 5,
  editorialId: 2,
  fechaLanzamiento: "2039-10-02",
  titulo: "La maquina del tiempo",
  isbn: "63796",
  numPaginacion: 100,
  estadoId: 1
}
console.log(await post({obj, tabla}));


const deleteOne = async (id) => {
  if (typeof id !== "number") return { status: 400, message: `El dato Id: ${id} no cumple con el formato` };
  config.method = "DELETE";
  await fetch(`${uri}${endpoint}${id}`, config);
};

const putOne = async (obj = {}) => {
  let body = {};
  try {
    validacionObj(obj)
    validacionDato({
      nombreCampo: Object.keys(primaryKey)[0],
      valor: obj.id,
      tipoEsperado: Object.values(primaryKey)[0]
    });
    let data = await getOne(obj.id)
    obj = {...data, ...obj}
    Object.entries(tabla).forEach((e) =>
      Object.assign(
        body,
        validacionDato({ nombreCampo: e[0], valor: obj[e[0]], tipoEsperado: e[1] })
      )
    );
  } catch (error) { return { status: 400, message: error.message }; }
  config.method = "PUT";
  config.body = JSON.stringify(body);
  await fetch(`${uri}${endpoint}${obj.id}`, config);
};

// console.log(await getAll());




// console.log(
//   await putOne({
//     id: 1,
//     autorId: 1,
//     categoriaId: 1,
//     editorialId: 1,
//     fechaLanzamiento: "2040-10-02",
//     titulo: "Celestina",
//     isbn: "67890",
//     numPaginacion: 250,
//     estadoId: 1
//   })
// );

// console.log(await deleteOne(1));

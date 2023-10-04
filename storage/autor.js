import uri from "../config.js";
import { getAll, getOne, post, putOne, deleteOne} from "../functions/solicitudes.js";
const endpoint = "/autor/";
const tabla = {
    nombre: "string",
    apellido: "string",
    nacionalidad: "string"
};
// console.log(await getAll({uri, endpoint}))
// console.log(await getOne({id, uri, endpoint}));
// console.log(await deleteOne({id: 1, uri, endpoint}));

// FOR TEST POST
// const obj = {nombre: "ricardo",apellido: "gomez",nacionalidad: "colombiano"};
// console.log(await post({obj, tabla, uri, endpoint}));

// FOR TEST PUT
// const obj = {id: 1,nombre: "ricardo",apellido: "gomez",nacionalidad: "español"}
// console.log(await putOne({obj, tabla, uri, endpoint}));

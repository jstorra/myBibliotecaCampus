import uri from "../config.js";
import { getAll, getOne, post, putOne, deleteOne} from "../functions/solicitudes.js";
const endpoint = "/editorial/";
const tabla = {
    nombre: "string",
    direccion: "string",
    telefono: "string"
};
// console.log(await getAll({uri, endpoint}))
// console.log(await getOne({id, uri, endpoint}));
// console.log(await deleteOne({id: 1, uri, endpoint}));

// FOR TEST POST
// const obj = {nombre:"drama",direccion: "calle 1#02-56",telefono: "3172660389"};
// console.log(await post({obj, tabla, uri, endpoint}));

// FOR TEST PUT
// const obj = {id: 1,direccion: "via guatiguara :)"}
// console.log(await putOne({obj, tabla, uri, endpoint}));

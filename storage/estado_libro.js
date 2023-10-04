import uri from "../config.js";
import { getAll, getOne, post, putOne, deleteOne} from "../functions/solicitudes.js";
const endpoint = "/estado_libro/";
const tabla = {
    nombre: "string",
    descripcion: "string"
};
// console.log(await getAll({uri, endpoint}))
// console.log(await getOne({id, uri, endpoint}));
// console.log(await deleteOne({id: 2, uri, endpoint}));

// FOR TEST POST
// const obj = {nombre:"mantenimiento",descripcion: "Se encuentra en mantenimiento el libro La maquina del tiempo"};
// console.log(await post({obj, tabla, uri, endpoint}));

// FOR TEST PUT
// const obj = {id: 1,nombre: "reserva",descripcion: "Se encuentra en reserva el libro La maquina del tiempo"}
// console.log(await putOne({obj, tabla, uri, endpoint}));

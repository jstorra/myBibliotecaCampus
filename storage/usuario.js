import uri from "../config.js";
import { getAll, getOne, post, putOne, deleteOne} from "../functions/solicitudes.js";
const endpoint = "/usuario/";
const tabla = {
    nombre: "string",
    apellido: "string",
    direccion: "string",
    telefono: "string",
    email: "string"
};
// console.log(await getAll({uri, endpoint}))
// console.log(await getOne({id, uri, endpoint}));
// console.log(await deleteOne({id: 1, uri, endpoint}));

// FOR TEST POST
// const obj = {nombre: "mauricio",apellido: "duran",direccion: "no me la conteis",telefono: "3213779030",email: "nose@gmail.com"};
// console.log(await post({obj, tabla, uri, endpoint}));

// FOR TEST PUT
// const obj = {id: 1,nombre: "juan",apellido: "duran",direccion: "no me la conteis",telefono: "3213779030",email: "nose@gmail.com"}
// console.log(await putOne({obj, tabla, uri, endpoint}));

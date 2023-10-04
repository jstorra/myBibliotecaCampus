import uri from "../config.js";
import { getAll, getOne, post, putOne, deleteOne} from "../functions/solicitudes.js";
const endpoint = "/reserva/";
const tabla = {
    usuarioId: "number",
    libroId: "number",
    fechaReserva: "date",
    fechaReservaFin: "date",
    estado: "string"
};
// console.log(await getAll({uri, endpoint}))
// console.log(await getOne({id, uri, endpoint}));
// console.log(await deleteOne({id: 1, uri, endpoint}));

// FOR TEST POST
// const obj = {usuarioId: 1,libroId: 1,fechaReserva: "2039-10-02",fechaReservaFin: "2040-10-02",estado: "mantenimiento"};
// console.log(await post({obj, tabla, uri, endpoint}));

// FOR TEST PUT
// const obj = {id: 1,usuarioId: 1,libroId: 1,fechaPrestamo: "2039-10-02",fechaDevolucion: "2040-10-02",estado: "reservado"}
// console.log(await putOne({obj, tabla, uri, endpoint}));
import uri from "../config.js";
import { getAll, getOne, post, putOne, deleteOne} from "../functions/solicitudes.js";
const endpoint = "/categoria/";
const tabla = {
    nombre: "string"
};
// console.log(await getAll({uri, endpoint}))
// console.log(await getOne({id, uri, endpoint}));
// console.log(await deleteOne({id: 1, uri, endpoint}));

// FOR TEST POST
// const obj = {autorId: 2,categoriaId: 5,editorialId: 2,fechaLanzamiento: "2039-10-02",titulo: "La maquina del tiempo",isbn: "63796",numPaginacion: 100,estadoId: 1};
// console.log(await post({obj, tabla, uri, endpoint}));

// FOR TEST PUT
// const obj = {id: 1,autorId: 1,categoriaId: 1,editorialId: 1,fechaLanzamiento: "2040-10-02",titulo: "Celestina",isbn: "67890",numPaginacion: 250,estadoId: 1}
// console.log(await putOne({obj, tabla, uri, endpoint}));
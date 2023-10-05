import crud from "../functions/crud.js"
const endpoint = "/editorials/";
const tabla = {
    nombre: "string",
    direccion: "string",
    telefono: "string"
};
const c = crud({ endpoint, tabla })
export default c

// console.log(await c.getAll())
// console.log(await c.getOne());
// console.log(await c.getRelationships())
// console.log(await c.deleteOne());

// FOR TEST POST
// const obj = {nombre:"drama",direccion: "calle 1#02-56",telefono: "3172660389"};
// console.log(await c.post(obj));

// FOR TEST PUT
// const obj = {id: 1,direccion: "via guatiguara :)",telefono: "12341245235"}
// console.log(await c.putOne(obj));

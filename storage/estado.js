import crud from "../functions/crud.js"
const endpoint = "/estados/";
const tabla = {
    nombre: "string",
    descripcion: "string"
};
const c = crud({ endpoint, tabla })
export default c

// console.log(await c.getAll())
// console.log(await c.getOne());
// console.log(await c.deleteOne());

// FOR TEST POST
// const obj = {nombre:"mantenimiento",descripcion: "Se encuentra en mantenimiento el libro La maquina del tiempo"};
// console.log(await c.post(obj));

// FOR TEST PUT
// const obj = {id: 1,nombre: "reserva",descripcion: "Se encuentra en reserva el libro La maquina del tiempo"}
// console.log(await c.putOne(obj));

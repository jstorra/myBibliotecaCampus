import crud from "../functions/crud.js"
const endpoint = "/autors/";
const tabla = {
    nombre: "string",
    apellido: "string",
    nacionalidad: "string"
};
const c = crud({ endpoint, tabla })
export default c

// console.log(await c.getAll())
// console.log(await c.getOne());
// console.log(await c.deleteOne());

// FOR TEST POST
// const obj = {nombre: "ricardo",apellido: "gomez",nacionalidad: "colombiano"};
// console.log(await c.post(obj));

// FOR TEST PUT
// const obj = {id: 1,nombre: "ricardo",apellido: "gomez",nacionalidad: "español"}
// console.log(await c.putOne(obj));

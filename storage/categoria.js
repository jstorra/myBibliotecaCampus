import crud from "../functions/crud.js"
const endpoint = "/categorias/";
const tabla = {
    nombre: "string"
};
const c = crud({ endpoint, tabla })
export default c

// console.log(await c.getAll())
// console.log(await c.getOne());
// console.log(await c.getRelationships())
// console.log(await c.deleteOne());

// FOR TEST POST
// const obj = {nombre: "horror"};
// console.log(await c.post(obj));

// FOR TEST PUT
// const obj = {id: 1, nombre: "horror"}
// console.log(await c.putOne(obj));

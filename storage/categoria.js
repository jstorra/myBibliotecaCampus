import crud from "../functions/crud.js"
const endpoint = "/categoria/";
const tabla = {
    nombre: "string"
};
const c = crud({ endpoint, tabla })
export default c

// console.log(await c.getAll())
// console.log(await c.getOne());
// console.log(await c.deleteOne());

// FOR TEST POST
// const obj = {nombre: "drama"};
// console.log(await c.post(obj));

// FOR TEST PUT
// const obj = {id: 1, nombre: "horror"}
// console.log(await c.putOne(obj));

import crud from "../functions/crud.js"
const endpoint = "/usuarios/";
const tabla = {
    nombre: "string",
    apellido: "string",
    direccion: "string",
    telefono: "string",
    email: "string"
};
const c = crud({ endpoint, tabla })
export default c

// console.log(await c.getAll())
// console.log(await c.getOne());
// console.log(await c.deleteOne());

// FOR TEST POST
// const obj = {nombre: "mauricio",apellido: "duran",direccion: "no me la conteis",telefono: "3213779030",email: "nose@gmail.com"};
// console.log(await c.post(obj));

// FOR TEST PUT
// const obj = {id: 1,nombre: "juan",apellido: "duran",direccion: "no me la conteis",telefono: "3213779030",email: "nose@gmail.com"}
// console.log(await c.putOne(obj));

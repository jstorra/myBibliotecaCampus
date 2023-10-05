import crud from "../functions/crud.js"
const endpoint = "/prestamo/";
const tabla = {
    usuarioId: "number",
    libroId: "number",
    fechaPrestamo: "date",
    fechaDevolucion: "date",
    estado: "string"
};
const c = crud({ endpoint, tabla })
export default c

// console.log(await c.getAll())
// console.log(await c.getOne());
// console.log(await c.getRelationships())
// console.log(await c.deleteOne());

// FOR TEST POST
// const obj = {usuarioId: 1,libroId: 1,fechaPrestamo: "2039-10-02",fechaDevolucion: "2040-10-02",estado: "mantenimiento"};
// console.log(await c.post(obj));

// FOR TEST PUT
// const obj = {id: 1,usuarioId: 1,libroId: 1,fechaPrestamo: "2039-10-02",fechaDevolucion: "2040-10-02",estado: "reservado"}
// console.log(await c.putOne(obj));

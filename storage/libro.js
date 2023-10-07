import crud from "../functions/crud.js"
const endpoint = "/libros/";
const tabla = {
    autorId: "number",
    categoriaId: "number",
    editorialId: "number",
    fechaLanzamiento: "date",
    titulo: "string",
    isbn: "string",
    numPaginacion: "number",
    estadoId: "number"
};
const c = crud({ endpoint, tabla })
export default c

// console.log(await c.getAll())
// console.log(await c.getOne(1));
// console.log(await c.getRelationships())
// console.log(await c.deleteOne());

// FOR TEST POST
// const obj = {autorId: 2,categoriaId: 5,editorialId: 2,fechaLanzamiento: "2039-10-02",titulo: "La maquina del tiempo",isbn: "63796",numPaginacion: 100,estadoId: 1};
// console.log(await c.post(obj));

// FOR TEST PUT
// const obj = {id: 1,autorId: 1,categoriaId: 1,editorialId: 1,fechaLanzamiento: "2040-10-02",titulo: "Celestina",isbn: "67890",numPaginacion: 250,estadoId: 1}
// console.log(await c.putOne(obj));

import crud from "../functions/crud.js"
const endpoint = "/reserva/";
const tabla = {
    usuarioId: "number",
    libroId: "number",
    fechaReserva: "date",
    fechaReservaFin: "date",
    estado: "string"
};
const foreignKeys = [usuarioId, libroId]
const c = crud({ endpoint, tabla })
export default c

// console.log(await c.getAll())
// console.log(await c.getOne());
// console.log(await c.deleteOne());

// FOR TEST POST
// const obj = {usuarioId: 1,libroId: 1,fechaReserva: "2039-10-02",fechaReservaFin: "2040-10-02",estado: "mantenimiento"};
// console.log(await c.post(obj));

// FOR TEST PUT
// const obj = {id: 1,usuarioId: 1,libroId: 2,fechaReserva: "2039-10-02",fechaReservaFin: "2040-10-02",estado: "reservado"}
// console.log(await c.putOne(obj));

const getRelationships = async({ endpoint, foreignKeys })=>{
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.'}
    if (!foreignKeys) return { status: 400, message: 'Envía las foreignKeys por favor.'}
    let res = await (await fetch(`${uri}${endpoint}`)).json();
    res = await Promise.all(res.map(async(data)=>{
        let [cat, aut] = await Promise.all([getOneCategoria(data.categoriaId), getOneAutor(data.autorId)])
        data.categoriaId = cat;
        data.autorId = aut;
        return data;
    }))
    return res;
}

// console.log(await getRelationships())
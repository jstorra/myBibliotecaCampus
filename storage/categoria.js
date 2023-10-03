import env from "../config.js";
const uri = `${env.ssl + env.hostName}:${env.port}`
const config = {method: undefined, headers: {"content-type": "application/json"}}

const getAll = async () => {
    config.method = "GET"
    let res = await (await fetch(`${uri}/categoria`, config)).json()
    return res
}

const post = async (obj = {nombre: "nombre"}) => {
    let {nombre} = obj
    if (!nombre) return {status: 400, message: 'Falta el dato: nombre'};
    if (typeof nombre !== 'string') return {status: 400, message: `El dato 'Nombre: ${nombre}' no cumple con el formato`};
    config.method = "POST"
    config.body = JSON.stringify(obj)
    await fetch(`${uri}/categoria`, config)
}

const deleteOne = async (id) =>{
    if(typeof id !== 'number') return {status: 400, message: `El dato 'Id: ${id}' no cumple con el formato`};
    config.method = "DELETE";
    await fetch(`${uri}/categoria/${id}`, config)
}

const putOne = async (obj = {id: "id", nombre: "nombre"}) => {
    let {id, nombre} = obj
    if (!id) return {status: 400, message: 'Falta el dato: id'};
    if (!nombre) return {status: 400, message: 'Falta el dato: nombre'};
    if (typeof id !== 'number') return {status: 400, message: `El dato 'Id: ${id}' no cumple con el formato`};
    if (typeof nombre !== 'string') return {status: 400, message: `El dato 'Nombre: ${nombre}' no cumple con el formato`};
    config.method = "PUT"
    config.body = JSON.stringify(obj)
    await fetch(`${uri}/categoria/${id}`, config)
}

// console.log(await getAll());

// console.log(await post({nombre: "ciencia-ficcion"}));

// console.log(await deleteOne(3));

// console.log(await putOne({id: 3, nombre: "ciencia-ficcion"}));

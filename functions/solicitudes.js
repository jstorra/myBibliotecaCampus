import uri from "../config.js";
import { validacionDato, validacionObj, validacionIds } from "../functions/validaciones.js";
const config = { headers: { "content-type": "application/json" } };

const getAll = async ({ endpoint } = {}) => {
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.' }
    const res = await (await fetch(`${uri}${endpoint}`)).json()
    const data = res.map((e) => Object.keys(e).length > 0 ? e: { message: 'No hay datos para mostrar.' })
    return data
}

const getOne = async ({ id, endpoint } = {}) => {
    if (!id) return { status: 400, message: 'Envía el Id por favor.' }
    if (typeof id !== 'number') return { status: 400, message: 'El Id tiene un formato inválido.' }
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.' }
    let res = await fetch(`${uri}${endpoint}${id}`)
    if (res.status === 404) return { status: res.status, message: res.statusText }
    res = await res.json()
    return Object.keys(res).length > 1 ? res : { message: 'No hay datos para mostrar.' }
}

const getRelationships = async({ endpoint })=>{
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.' }
    let res = await (await fetch(`${uri}${endpoint}`)).json();
    let foreignKeys = []
    res.forEach(data => {Object.keys(data).forEach(key => {{ if (key.includes("Id") && !foreignKeys.includes(key)) foreignKeys.push(key) }})})
    let query = `${uri}${endpoint}?`
    foreignKeys.forEach(key => query += `_expand=${key.split("I")[0]}&`)
    res = await (await fetch(query)).json()
    res = res.map(obj => {
        let data = {...obj}
        foreignKeys.forEach(fkey => {
            data[fkey] = data[fkey.split("I")[0]]
            delete data[fkey.split("I")[0]]
        })
        return data
    })
    return res;
}

const getRelationshipsOne = async({ id, endpoint })=>{
    if (!id) return { status: 400, message: 'Envía el Id por favor.'}
    if (typeof id !== 'number') return { status: 400, message: 'El Id tiene un formato inválido.'}
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.' }
    let res = await (await fetch(`${uri}${endpoint}`)).json();
    let foreignKeys = []
    res.forEach(data => {Object.keys(data).forEach(key => {{ if (key.includes("Id") && !foreignKeys.includes(key)) foreignKeys.push(key) }})})
    let query = `${uri}${endpoint}${id}?`
    foreignKeys.forEach(key => query += `_expand=${key.split("I")[0]}&`)
    res = await (await fetch(query)).json()
    foreignKeys.forEach(fkey => {
        res[fkey] = res[fkey.split("I")[0]]
        delete res[fkey.split("I")[0]]
    })
    return res;
}

const post = async ({ obj, tabla = {}, endpoint } = {}) => {
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.'}
    let body = {};
    try {
        validacionObj(obj)
        validacionObj(tabla)
        Object.entries(tabla).forEach((e) => Object.assign(body,validacionDato({ nombreCampo: e[0], valor: obj[e[0]], tipoEsperado: e[1] })));
        await validacionIds({ obj, uri })
    } catch (error) { return { status: 400, message: error.message } }
    config.method = "POST";
    config.body = JSON.stringify(body);
    let res = await fetch(`${uri}${endpoint}`, config);
    if (res.status === 201 || res.status === 404) return { status: res.status, message: res.statusText }
}

const putOne = async ({ obj, tabla = {}, endpoint } = {}) => {
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.' }
    let body = {};
    try {
        validacionObj(obj)
        validacionObj(tabla)
        validacionDato({ nombreCampo: "id", valor: obj.id, tipoEsperado: "number" });
        let data = await getOne({ id: obj.id, uri, endpoint })
        obj = {...data, ...obj}
        Object.entries(tabla).forEach((e) => Object.assign(body,validacionDato({ nombreCampo: e[0], valor: obj[e[0]], tipoEsperado: e[1] })));
        await validacionIds({ obj, uri })
    } catch (error) { return { status: 400, message: error.message } }
    config.method = "PUT";
    config.body = JSON.stringify(body);
    let res = await fetch(`${uri}${endpoint}${obj.id}`, config);
    if (res.status === 200 || res.status === 404) return { status: res.status, message: res.statusText }
}

const deleteOne = async ({ id, endpoint } = {}) => {
    if (!id) return { status: 400, message: 'Envía el Id por favor.'}
    if (typeof id !== 'number') return { status: 400, message: 'El Id tiene un formato inválido.'}
    if (!endpoint) return { status: 400, message: 'Envía el Endpoint por favor.'}
    config.method = "DELETE";
    let res = await fetch(`${uri}${endpoint}${id}`, config);
    if (res.status === 200 || res.status === 404) return { status: res.status, message: res.statusText }
}

export default { getAll, getOne, getRelationships, getRelationshipsOne, post, putOne, deleteOne }

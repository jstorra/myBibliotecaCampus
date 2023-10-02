import env from "../config.js";
const uri = `${env.ssl + env.hostName}:${env.port}`;
const config = {method: undefined, headers: {"content-type": "application/json"}};

export const getAll = async()=>{
    config.method = "GET";
    let res = await (await fetch(`${uri}/libro`, config)).json();
    return res;
}

export const post = async (obj = {autorId:"autorId", categoriaId: "categoriaId", editorialId: "editorialId", fechaLanzamiento:"fechaLanzamiento", titulo: "titulo", isbn: "isbn", numPaginacion: "numPaginacion", estadoId: "estadoId"}) =>{

    const {autorId, categoriaId, editorialId, fechaLanzamiento, titulo, isbn, numPaginacion, estadoId} = obj;

    if(!autorId) return {status: 400, message: 'Falta el dato: autorId'};
    if(!categoriaId) return {status: 400, message: 'Falta el dato: categoriaId'};
    if(!editorialId) return {status: 400, message: 'Falta el dato: editorialId'};
    if(!fechaLanzamiento) return {status: 400, message: 'Falta el dato: fechaLanzamiento}'};
    if(!titulo) return {status: 400, message: 'Falta el dato: titulo'};
    if(!isbn) return {status: 400, message: 'Falta el dato: isbn'};
    if(!numPaginacion) return {status: 400, message: 'Falta el dato: numPaginacion'};
    if(!estadoId) return {status: 400, message: 'Falta el dato: estadoId'};

    let date = new Date(fechaLanzamiento);

    if(!(date && date.getFullYear()<=2040)) return {status: 400, message: `El dato 'Fecha: ${fechaLanzamiento}' no cumple con el formato`};
    if(typeof autorId !== 'number') return {status: 400, message: `El dato '${autorId}' no cumple con el formato`};
    if(typeof categoriaId !== 'number') return {status: 400, message: `El dato '${categoriaId}' no cumple con el formato`};
    if(typeof editorialId !== 'number') return {status: 400, message: `El dato '${editorialId}' no cumple con el formato`};
    if(typeof titulo !== 'string') return {status: 400, message: `El dato '${titulo}' no cumple con el formato`};
    if(typeof isbn !== 'string') return {status: 400, message: `El dato '${isbn}' no cumple con el formato`};
    if(typeof numPaginacion !== 'number') return {status: 400, message: `El dato '${numPaginacion}' no cumple con el formato`};
    if(typeof estadoId !== 'number') return {status: 400, message: `El dato '${estadoId}' no cumple con el formato`};
    config.method = "POST";
    config.body = JSON.stringify(obj);
    await fetch(`${uri}/libro`, config);
}

export const deleteOne = async(id)=>{
    if(typeof id !== 'number') return {status: 400, message: `El datos '${id}' no cumple con el formato`};
    config.method = "DELETE";
    await fetch(`${uri}/libro/${id}`, config)
}

export const putOne = async (obj = {id:"Id", autorId:"autorId", categoriaId: "categoriaId", editorialId: "editorialId", fechaLanzamiento:"fechaLanzamiento", titulo: "titulo", isbn: "isbn", numPaginacion: "numPaginacion", estadoId: "estadoId"}) => {

    const {id, autorId, categoriaId, editorialId, fechaLanzamiento, titulo, isbn, numPaginacion, estadoId} = obj;

    if(!id) return {status: 400, message: 'Falta el dato: Id'}
    if(!autorId) return {status: 400, message: 'Falta el dato: autorId'};
    if(!categoriaId) return {status: 400, message: 'Falta el dato: categoriaId'};
    if(!editorialId) return {status: 400, message: 'Falta el dato: editorialId'};
    if(!fechaLanzamiento) return {status: 400, message: 'Falta el dato: fechaLanzamiento}'};
    if(!titulo) return {status: 400, message: 'Falta el dato: titulo'};
    if(!isbn) return {status: 400, message: 'Falta el dato: isbn'};
    if(!numPaginacion) return {status: 400, message: 'Falta el dato: numPaginacion'};
    if(!estadoId) return {status: 400, message: 'Falta el dato: estadoId'};

    let date = new Date(fechaLanzamiento);

    if(typeof id !== 'number') return {status: 400, message: `El dato 'Id: ${id}' no cumple con el formato`};
    if(!(date && date.getFullYear()<=2040)) return {status: 400, message: `El dato 'Fecha: ${fechaLanzamiento}' no cumple con el formato`};
    if(typeof autorId !== 'number') return {status: 400, message: `El dato 'autorId: ${autorId}' no cumple con el formato`};
    if(typeof categoriaId !== 'number') return {status: 400, message: `El dato 'categoriaId: ${categoriaId}' no cumple con el formato`};
    if(typeof editorialId !== 'number') return {status: 400, message: `El dato 'editorialId: ${editorialId}' no cumple con el formato`};
    if(typeof titulo !== 'string') return {status: 400, message: `El dato 'titulo: ${titulo}' no cumple con el formato`};
    if(typeof isbn !== 'string') return {status: 400, message: `El dato 'isbn: ${isbn}' no cumple con el formato`};
    if(typeof numPaginacion !== 'number') return {status: 400, message: `El dato 'numPaginacion: ${numPaginacion}' no cumple con el formato`};
    if(typeof estadoId !== 'number') return {status: 400, message: `El dato 'estadoId: ${estadoId}' no cumple con el formato`};

    config.method = "PUT";
    config.body = JSON.stringify(obj);
    await fetch(`${uri}/libro/${id}`, config);
}

// console.log(await putOne({id: 1, autorId: 1, categoriaId: 1, editorialId: 1, fechaLanzamiento: "2040-10-02", titulo: "Celestina", isbn: "67890", numPaginacion: 250, estadoId: 1}));
// console.log(await post({autorId: 1, categoriaId: 1, editorialId: 1, fechaLanzamiento: "2040-10-02", titulo: "Celestina", isbn: "67890", numPaginacion: 250, estadoId: 1}));
// console.log(await getAll());
// console.log(await deleteOne(1));



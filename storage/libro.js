import env from "../config.js";
const uri = `${env.ssl + env.hostName}:${env.port}`;
const config = {method: undefined, headers: {"content-type": "application/json"}};

const getAll = async()=>{
    config.method = "GET";
    let res = await (await fetch(`${uri}/libro`, config)).json();
    return res;
}

const post = async (obj = {autorId:"autorId", categoriaId: "categoriaId", editorialId: "editorialId", fechaLanzamiento:"fechaLanzamiento", titulo: "titulo", isbn: "isbn", numPaginacion: "numPaginacion", estadoId: "estadoId"}) =>{

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
    if(typeof autorId !== 'number') return {status: 400, message: `El dato 'AutorId: ${autorId}' no cumple con el formato`};
    if(typeof categoriaId !== 'number') return {status: 400, message: `El dato 'CategoriaId: ${categoriaId}' no cumple con el formato`};
    if(typeof editorialId !== 'number') return {status: 400, message: `El dato 'EditorialId: ${editorialId}' no cumple con el formato`};
    if(typeof titulo !== 'string') return {status: 400, message: `El dato 'Titulo: ${titulo}' no cumple con el formato`};
    if(typeof isbn !== 'string') return {status: 400, message: `El dato 'Isbn: ${isbn}' no cumple con el formato`};
    if(typeof numPaginacion !== 'number') return {status: 400, message: `El dato 'NumPaginacion: ${numPaginacion}' no cumple con el formato`};
    if(typeof estadoId !== 'number') return {status: 400, message: `El dato 'EstadoId: ${estadoId}' no cumple con el formato`};
    config.method = "POST";
    config.body = JSON.stringify(obj);
    await fetch(`${uri}/libro`, config);
}

const deleteOne = async(id)=>{
    if(typeof id !== 'number') return {status: 400, message: `El dato 'Id: ${id}' no cumple con el formato`};
    config.method = "DELETE";
    await fetch(`${uri}/libro/${id}`, config)
}

const putOne = async (obj = {id:"Id", autorId:"autorId", categoriaId: "categoriaId", editorialId: "editorialId", fechaLanzamiento:"fechaLanzamiento", titulo: "titulo", isbn: "isbn", numPaginacion: "numPaginacion", estadoId: "estadoId"}) => {

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
    if(typeof autorId !== 'number') return {status: 400, message: `El dato 'AutorId: ${autorId}' no cumple con el formato`};
    if(typeof categoriaId !== 'number') return {status: 400, message: `El dato 'CategoriaId: ${categoriaId}' no cumple con el formato`};
    if(typeof editorialId !== 'number') return {status: 400, message: `El dato 'EditorialId: ${editorialId}' no cumple con el formato`};
    if(typeof titulo !== 'string') return {status: 400, message: `El dato 'Titulo: ${titulo}' no cumple con el formato`};
    if(typeof isbn !== 'string') return {status: 400, message: `El dato 'Isbn: ${isbn}' no cumple con el formato`};
    if(typeof numPaginacion !== 'number') return {status: 400, message: `El dato 'NumPaginacion: ${numPaginacion}' no cumple con el formato`};
    if(typeof estadoId !== 'number') return {status: 400, message: `El dato 'EstadoId: ${estadoId}' no cumple con el formato`};

    config.method = "PUT";
    config.body = JSON.stringify(obj);
    await fetch(`${uri}/libro/${id}`, config);
}

// console.log(await getAll());

// console.log(await post({autorId: 2, categoriaId: 5, editorialId: 2, fechaLanzamiento: "2016-12-09", titulo: "La maquina del tiempo", isbn: "63796", numPaginacion: 100, estadoId: 1}));

// console.log(await putOne({id: 1, autorId: 1, categoriaId: 1, editorialId: 1, fechaLanzamiento: "2040-10-02", titulo: "Celestina", isbn: "67890", numPaginacion: 250, estadoId: 1}));

// console.log(await deleteOne(1));

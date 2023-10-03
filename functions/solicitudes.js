const config = { headers: { "content-type": "application/json" } };
export const getAll = async ({uri, endpoint}) => await (await fetch(`${uri}${endpoint}`)).json();
export const getOne = async ({uri, endpoint, id}) => await (await fetch(`${uri}${endpoint}${id}`)).json();

export const post = async ({obj = {}, tabla}) => {
    let body = {};
    try {
        validacionObj(obj)
        Object.entries(tabla).forEach((e) =>
        Object.assign(
            body,
            validacionDato({ nombreCampo: e[0], valor: obj[e[0]], tipoEsperado: e[1] })
        )
        );
    } catch (error) { return { status: 400, message: error.message }; }
    config.method = "POST";
    config.body = JSON.stringify(body);
    await fetch(`${uri}${endpoint}`, config);
}


export const putOne = async () => {
    
}

export const deleteOne = async () => {

}
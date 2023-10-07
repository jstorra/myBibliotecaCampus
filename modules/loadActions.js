import { libroTable } from './loadTables.js'
import libro from '../storage/libro.js'

export const libroActions = async () => {
    const form = document.querySelector("form")
    const inpFecha = document.querySelector("#inpFecha")
    inpFecha.addEventListener("focus", () => {
        inpFecha.type="date"
    })
    form.addEventListener("submit", async (e)=> {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        Object.keys(data).forEach( async key => {
            if (key === "numPaginacion") data[key] = Number(data[key])
            if (key.includes("Id") && !isNaN(data[key].split(".")[0])){
                data[key] = Number(data[key].split(".")[0])
            }
        })
        let res = await libro.post(data)
        res.status === 201 ? alert(`!! El libro se ha registrado !!`) : alert(`${res.message}`)
    })
    libroTable(await libro.getRelationships())
}

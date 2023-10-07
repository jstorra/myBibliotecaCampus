
import { libroMain } from './views/loadMain.js'
import libro from './storage/libro.js'
import uri from './config.js'
const content = document.querySelector("#content")

addEventListener("DOMContentLoaded", async ()=> {
    content.insertAdjacentHTML("beforeend", await libroMain())
    const form = document.querySelector(".card-form")
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
})


import { libroTable } from './loadTables.js'
import libro from '../storage/libro.js'

export const libroAction = async () => {
    const form = document.querySelector("form")
    const inpFecha = document.querySelector("#inpFecha")
    inpFecha.addEventListener("focus", () => {
        inpFecha.type="date"
    })
    form.addEventListener("submit", async (e)=> {
        e.preventDefault()
        const btnSubmit = document.querySelector(".btnSubmit")
        const data = Object.fromEntries(new FormData(e.target))
        Object.keys(data).forEach( async key => {
            if (key === "numPaginacion") data[key] = Number(data[key])
            if (key.includes("Id") && !isNaN(data[key].split(".")[0])){
                data[key] = Number(data[key].split(".")[0])
            }
        })
        if (btnSubmit.value === "actualizar" && btnSubmit.getAttribute("data-edit")){
            data["id"] = Number(btnSubmit.dataset.edit)
            let res = await libro.putOne(data)
            res.status === 200 ? alert(`!! El libro se ha actualizado !!`) : alert(`${res.message}`)
        } else {
            let res = await libro.post(data)
            res.status === 201 ? alert(`!! El libro se ha registrado !!`) : alert(`${res.message}`)
        }
    })
    libroTable(await libro.getRelationships())
    btnsModificarAction(document.querySelectorAll(".btnModificar"))
    btnsEliminarAction(document.querySelectorAll(".btnEliminar"))
}

const btnsEliminarAction = (btns) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => await libro.deleteOne(Number(btn.dataset.del)))
    })
}

const btnsModificarAction = (btns) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const res = await libro.getRelationshipsOne(Number(btn.dataset.mod))
            document.querySelector(".btnSubmit").value = "actualizar"
            document.querySelector(".btnSubmit").setAttribute("data-edit", btn.dataset.mod)
            document.querySelector(".btnSubmit").style.backgroundColor = "orange"
            const inputs = document.querySelectorAll("input[name]");
            Object.keys(res).forEach(key => {
                inputs.forEach(input => {
                    if (key === input.getAttribute("name")){
                        if (key === "autorId" || key === "usuarioId"){
                            input.value = `${res[key].id}. ${res[key].nombre} ${res[key].apellido}`
                        }
                        else if (key.includes("Id")){
                            input.value = `${res[key].id}. ${res[key].nombre}`
                        } else {
                            input.value = res[key]
                        }
                    }
                })
            })
            await libro.putOne(Number(btn.dataset.mod))
        })
    })
}

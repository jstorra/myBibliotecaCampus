import t from './loadTables.js'
import b from "./btnsActions.js"

const libroAction = async (libro) => {
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
    t.libroTable(await libro.getRelationships())
    b.libroBtnsEliminar({ btns: document.querySelectorAll(".btnEliminar"), libro})
    b.libroBtnsModificar({ btns: document.querySelectorAll(".btnModificar"), libro })
}

const categoriaAction = async (categoria) => {
    const form = document.querySelector("form")
    form.addEventListener("submit", async (e)=> {
        e.preventDefault()
        const btnSubmit = document.querySelector(".btnSubmit")
        const data = Object.fromEntries(new FormData(e.target))
        if (btnSubmit.value === "actualizar" && btnSubmit.getAttribute("data-edit")){
            data["id"] = Number(btnSubmit.dataset.edit)
            let res = await categoria.putOne(data)
            res.status === 200 ? alert(`!! La categoria se ha actualizado !!`) : alert(`${res.message}`)
        } else {
            let res = await categoria.post(data)
            res.status === 201 ? alert(`!! La categoria se ha registrado !!`) : alert(`${res.message}`)
        }
    })
    t.categoriaTable(await categoria.getAll())
    b.categoriaBtnsEliminar({ btns: document.querySelectorAll(".btnEliminar"), categoria})
    b.categoriaBtnsModificar({ btns: document.querySelectorAll(".btnModificar"), categoria})
}

const editorialAction = async (editorial) => {
    const form = document.querySelector("form")
    form.addEventListener("submit", async (e)=> {
        e.preventDefault()
        const btnSubmit = document.querySelector(".btnSubmit")
        const data = Object.fromEntries(new FormData(e.target))
        if (btnSubmit.value === "actualizar" && btnSubmit.getAttribute("data-edit")){
            data["id"] = Number(btnSubmit.dataset.edit)
            let res = await editorial.putOne(data)
            res.status === 200 ? alert(`!! La editorial se ha actualizado !!`) : alert(`${res.message}`)
        } else {
            let res = await editorial.post(data)
            res.status === 201 ? alert(`!! La editorial se ha registrado !!`) : alert(`${res.message}`)
        }
    })
    t.editorialTable(await editorial.getAll())
    b.editorialBtnsEliminar({ btns: document.querySelectorAll(".btnEliminar"), editorial})
    b.editorialBtnsModificar({ btns: document.querySelectorAll(".btnModificar"), editorial})
}

const estadoAction = async (estado) => {
    const form = document.querySelector("form")
    form.addEventListener("submit", async (e)=> {
        e.preventDefault()
        const btnSubmit = document.querySelector(".btnSubmit")
        const data = Object.fromEntries(new FormData(e.target))
        if (btnSubmit.value === "actualizar" && btnSubmit.getAttribute("data-edit")){
            data["id"] = Number(btnSubmit.dataset.edit)
            let res = await estado.putOne(data)
            res.status === 200 ? alert(`!! El estado se ha actualizado !!`) : alert(`${res.message}`)
        } else {
            let res = await estado.post(data)
            res.status === 201 ? alert(`!! El estado se ha registrado !!`) : alert(`${res.message}`)
        }
    })
    t.estadoTable(await estado.getAll())
    b.estadoBtnsEliminar({ btns: document.querySelectorAll(".btnEliminar"), estado})
    b.estadoBtnsModificar({ btns: document.querySelectorAll(".btnModificar"), estado})
}

const autorAction = async (autor) => {
    const form = document.querySelector("form")
    form.addEventListener("submit", async (e)=> {
        e.preventDefault()
        const btnSubmit = document.querySelector(".btnSubmit")
        const data = Object.fromEntries(new FormData(e.target))
        if (btnSubmit.value === "actualizar" && btnSubmit.getAttribute("data-edit")){
            data["id"] = Number(btnSubmit.dataset.edit)
            let res = await autor.putOne(data)
            res.status === 200 ? alert(`!! El autor se ha actualizado !!`) : alert(`${res.message}`)
        } else {
            let res = await autor.post(data)
            res.status === 201 ? alert(`!! El autor se ha registrado !!`) : alert(`${res.message}`)
        }
    })
    t.autorTable(await autor.getAll())
    b.autorBtnsEliminar({ btns: document.querySelectorAll(".btnEliminar"), autor})
    b.autorBtnsModificar({ btns: document.querySelectorAll(".btnModificar"), autor})
}

const usuarioAction = async (usuario) => {
    const form = document.querySelector("form")
    form.addEventListener("submit", async (e)=> {
        e.preventDefault()
        const btnSubmit = document.querySelector(".btnSubmit")
        const data = Object.fromEntries(new FormData(e.target))
        if (btnSubmit.value === "actualizar" && btnSubmit.getAttribute("data-edit")){
            data["id"] = Number(btnSubmit.dataset.edit)
            let res = await usuario.putOne(data)
            res.status === 200 ? alert(`!! El usuario se ha actualizado !!`) : alert(`${res.message}`)
        } else {
            let res = await usuario.post(data)
            res.status === 201 ? alert(`!! El usuario se ha registrado !!`) : alert(`${res.message}`)
        }
    })
    t.usuarioTable(await usuario.getAll())
    b.usuarioBtnsEliminar({ btns: document.querySelectorAll(".btnEliminar"), usuario})
    b.usuarioBtnsModificar({ btns: document.querySelectorAll(".btnModificar"), usuario})
}

const prestamoAction = async (prestamo) => {
    const form = document.querySelector("form")
    const inpFPrestamo = document.querySelector(".inpFPrestamo")
    const inpFDevolucion = document.querySelector(".inpFDevolucion")
    inpFPrestamo.addEventListener("focus", () => {
        inpFPrestamo.type="date"
    })
    inpFDevolucion.addEventListener("focus", () => {
        inpFDevolucion.type="date"
    })
    form.addEventListener("submit", async (e)=> {
        e.preventDefault()
        const btnSubmit = document.querySelector(".btnSubmit")
        const data = Object.fromEntries(new FormData(e.target))
        Object.keys(data).forEach( async key => {
            if (key.includes("Id") && !isNaN(data[key].split(".")[0])){
                data[key] = Number(data[key].split(".")[0])
            }
        })
        if (btnSubmit.value === "actualizar" && btnSubmit.getAttribute("data-edit")){
            data["id"] = Number(btnSubmit.dataset.edit)
            let res = await prestamo.putOne(data)
            res.status === 200 ? alert(`!! El prestamo se ha actualizado !!`) : alert(`${res.message}`)
        } else {
            let res = await prestamo.post(data)
            res.status === 201 ? alert(`!! El prestamo se ha registrado !!`) : alert(`${res.message}`)
        }
    })
    t.prestamoTable(await prestamo.getRelationships())
    b.prestamoBtnsEliminar({ btns: document.querySelectorAll(".btnEliminar"), prestamo})
    b.prestamoBtnsModificar({ btns: document.querySelectorAll(".btnModificar"), prestamo })
}

const reservaAction = async (reserva) => {
    const form = document.querySelector("form")
    const inpFReserva = document.querySelector(".inpFReserva")
    const inpFReservaFin = document.querySelector(".inpFReservaFin")
    inpFReserva.addEventListener("focus", () => {
        inpFReserva.type="date"
    })
    inpFReservaFin.addEventListener("focus", () => {
        inpFReservaFin.type="date"
    })
    form.addEventListener("submit", async (e)=> {
        e.preventDefault()
        const btnSubmit = document.querySelector(".btnSubmit")
        const data = Object.fromEntries(new FormData(e.target))
        Object.keys(data).forEach( async key => {
            if (key.includes("Id") && !isNaN(data[key].split(".")[0])){
                data[key] = Number(data[key].split(".")[0])
            }
        })
        if (btnSubmit.value === "actualizar" && btnSubmit.getAttribute("data-edit")){
            data["id"] = Number(btnSubmit.dataset.edit)
            let res = await reserva.putOne(data)
            res.status === 200 ? alert(`!! La reserva se ha actualizado !!`) : alert(`${res.message}`)
        } else {
            let res = await reserva.post(data)
            res.status === 201 ? alert(`!! La reserva se ha registrado !!`) : alert(`${res.message}`)
        }
    })
    t.reservaTable(await reserva.getRelationships())
    b.reservaBtnsEliminar({ btns: document.querySelectorAll(".btnEliminar"), reserva})
    b.reservaBtnsModificar({ btns: document.querySelectorAll(".btnModificar"), reserva })
}

export default {
    libroAction,
    categoriaAction,
    editorialAction,
    estadoAction,
    autorAction,
    usuarioAction,
    prestamoAction,
    reservaAction
}

const libroBtnsEliminar = ({btns, libro}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => await libro.deleteOne(Number(btn.dataset.del)))
    })
}

const libroBtnsModificar = ({btns, libro}) => {
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

const categoriaBtnsEliminar = ({btns, categoria}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => await categoria.deleteOne(Number(btn.dataset.del)))
    })
}

const categoriaBtnsModificar = ({btns, categoria}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const res = await categoria.getOne(Number(btn.dataset.mod))
            document.querySelector(".btnSubmit").value = "actualizar"
            document.querySelector(".btnSubmit").setAttribute("data-edit", btn.dataset.mod)
            document.querySelector(".btnSubmit").style.backgroundColor = "orange"
            document.querySelector(".inpNombre").value = res.nombre
            await categoria.putOne(Number(btn.dataset.mod))
        })
    })
}

const editorialBtnsEliminar = ({btns, editorial}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => await editorial.deleteOne(Number(btn.dataset.del)))
    })
}

const editorialBtnsModificar = ({btns, editorial}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const res = await editorial.getOne(Number(btn.dataset.mod))
            document.querySelector(".btnSubmit").value = "actualizar"
            document.querySelector(".btnSubmit").setAttribute("data-edit", btn.dataset.mod)
            document.querySelector(".btnSubmit").style.backgroundColor = "orange"
            document.querySelector(".inpNombre").value = res.nombre
            document.querySelector(".inpDireccion").value = res.direccion
            document.querySelector(".inpTelefono").value = res.telefono
            await editorial.putOne(Number(btn.dataset.mod))
        })
    })
}

const estadoBtnsEliminar = ({btns, estado}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => await estado.deleteOne(Number(btn.dataset.del)))
    })
}

const estadoBtnsModificar = ({btns, estado}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const res = await estado.getOne(Number(btn.dataset.mod))
            document.querySelector(".btnSubmit").value = "actualizar"
            document.querySelector(".btnSubmit").setAttribute("data-edit", btn.dataset.mod)
            document.querySelector(".btnSubmit").style.backgroundColor = "orange"
            document.querySelector(".inpNombre").value = res.nombre
            document.querySelector(".inpDescripcion").value = res.descripcion
            await estado.putOne(Number(btn.dataset.mod))
        })
    })
}

const autorBtnsEliminar = ({btns, autor}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => await autor.deleteOne(Number(btn.dataset.del)))
    })
}

const autorBtnsModificar = ({btns, autor}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const res = await autor.getOne(Number(btn.dataset.mod))
            document.querySelector(".btnSubmit").value = "actualizar"
            document.querySelector(".btnSubmit").setAttribute("data-edit", btn.dataset.mod)
            document.querySelector(".btnSubmit").style.backgroundColor = "orange"
            document.querySelector(".inpNombre").value = res.nombre
            document.querySelector(".inpApellido").value = res.apellido
            document.querySelector(".inpNacionalidad").value = res.nacionalidad
            await autor.putOne(Number(btn.dataset.mod))
        })
    })
}

const usuarioBtnsEliminar = ({btns, usuario}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => await usuario.deleteOne(Number(btn.dataset.del)))
    })
}

const usuarioBtnsModificar = ({btns, usuario}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const res = await usuario.getOne(Number(btn.dataset.mod))
            document.querySelector(".btnSubmit").value = "actualizar"
            document.querySelector(".btnSubmit").setAttribute("data-edit", btn.dataset.mod)
            document.querySelector(".btnSubmit").style.backgroundColor = "orange"
            document.querySelector(".inpNombre").value = res.nombre
            document.querySelector(".inpApellido").value = res.apellido
            document.querySelector(".inpDireccion").value = res.direccion
            document.querySelector(".inpTelefono").value = res.telefono
            document.querySelector(".inpEmail").value = res.email
            await usuario.putOne(Number(btn.dataset.mod))
        })
    })
}

const prestamoBtnsEliminar = ({btns, prestamo}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => await prestamo.deleteOne(Number(btn.dataset.del)))
    })
}

const prestamoBtnsModificar = ({btns, prestamo}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const res = await prestamo.getRelationshipsOne(Number(btn.dataset.mod))
            document.querySelector(".btnSubmit").value = "actualizar"
            document.querySelector(".btnSubmit").setAttribute("data-edit", btn.dataset.mod)
            document.querySelector(".btnSubmit").style.backgroundColor = "orange"
            document.querySelector(".inpUsuario").value = `${res.usuarioId.id}. ${res.usuarioId.nombre} ${res.usuarioId.apellido}`
            document.querySelector(".inpEstado").value = res.estado
            document.querySelector(".inpLibro").value = `${res.libroId.id}. ${res.libroId.titulo}`
            document.querySelector(".inpFPrestamo").value = res.fechaPrestamo
            document.querySelector(".inpFDevolucion").value = res.fechaDevolucion
            await prestamo.putOne(Number(btn.dataset.mod))
        })
    })
}

const reservaBtnsEliminar = ({btns, reserva}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => await reserva.deleteOne(Number(btn.dataset.del)))
    })
}

const reservaBtnsModificar = ({btns, reserva}) => {
    btns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const res = await reserva.getRelationshipsOne(Number(btn.dataset.mod))
            document.querySelector(".btnSubmit").value = "actualizar"
            document.querySelector(".btnSubmit").setAttribute("data-edit", btn.dataset.mod)
            document.querySelector(".btnSubmit").style.backgroundColor = "orange"
            document.querySelector(".inpUsuario").value = `${res.usuarioId.id}. ${res.usuarioId.nombre} ${res.usuarioId.apellido}`
            document.querySelector(".inpEstado").value = res.estado
            document.querySelector(".inpLibro").value = `${res.libroId.id}. ${res.libroId.titulo}`
            document.querySelector(".inpFReserva").value = res.fechaReserva
            document.querySelector(".inpFReservaFin").value = res.fechaReservaFin
            await reserva.putOne(Number(btn.dataset.mod))
        })
    })
}

export default {
    libroBtnsEliminar,
    libroBtnsModificar,
    categoriaBtnsEliminar,
    categoriaBtnsModificar,
    editorialBtnsEliminar,
    editorialBtnsModificar,
    estadoBtnsEliminar,
    estadoBtnsModificar,
    autorBtnsEliminar,
    autorBtnsModificar,
    usuarioBtnsEliminar,
    usuarioBtnsModificar,
    prestamoBtnsEliminar,
    prestamoBtnsModificar,
    reservaBtnsEliminar,
    reservaBtnsModificar
}

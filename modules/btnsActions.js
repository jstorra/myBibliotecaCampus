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
            document.querySelector(".inpTitulo").value = res.titulo
            document.querySelector(".inpPaginas").value = res.numPaginacion
            document.querySelector(".inpISBN").value = res.isbn
            document.querySelector(".inpFecha").value = res.fechaLanzamiento
            document.querySelector(".inpAutor").value = `${res.autorId.id}. ${res.autorId.nombre} ${res.autorId.apellido}`
            document.querySelector(".inpCategoria").value = `${res.categoriaId.id}. ${res.categoriaId.nombre}`
            document.querySelector(".inpEstado").value = `${res.estadoId.id}. ${res.estadoId.nombre}`
            document.querySelector(".inpEditorial").value = `${res.editorialId.id}. ${res.editorialId.nombre}`
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

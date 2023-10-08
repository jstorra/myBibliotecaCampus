import a from './cardsActions.js'

import autor from "../storage/autor.js";
import categoria from "../storage/categoria.js";
import editorial from "../storage/editorial.js";
import estado from "../storage/estado.js";
import libro from "../storage/libro.js";
import prestamo from "../storage/prestamo.js";
import reserva from "../storage/reserva.js";
import usuario from "../storage/usuario.js";

const libroMain = async (content) => {
    let autores = await autor.getAll();
    let categorias = await categoria.getAll();
    let editoriales = await editorial.getAll();
    let estados = await estado.getAll();
    autores = autores.map((autor) =>`<option value="${autor.id}. ${autor.nombre} ${autor.apellido}"></option>`);
    categorias = categorias.map((categoria) =>`<option value="${categoria.id}. ${categoria.nombre}"></option>`);
    editoriales = editoriales.map((editorial) =>`<option value="${editorial.id}. ${editorial.nombre}"></option>`);
    estados = estados.map((estado) => `<option value="${estado.id}. ${estado.nombre}"></option>`);
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Libros</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Libros</a></li>
        </ul>
        <div class="info-data">
            <div class="card card-form">
                <h2 class="subtitle">Registrar libro</h2>
                <form class="form-libro">

                    <input type="text" name="titulo" placeholder="Titulo" required>

                    <input list="estados" name="estadoId" placeholder="Estado" required>
                    <datalist id="estados">
                        ${estados.join("")}
                    </datalist>
                    
                    <input list="autores" name="autorId" placeholder="Autor" required>
                    <datalist id="autores">
                        ${autores.join("")}
                    </datalist>

                    <input type="text" name="numPaginacion" placeholder="# Páginas" oninput="this.value = this.value.replace(/[^0-9]/g, '');" required>

                    <input list="categorias" name="categoriaId" placeholder="Categoria" required>
                    <datalist id="categorias">
                        ${categorias.join("")}
                    </datalist>
                    
                    <input type="text" name="isbn" placeholder="ISBN">
                    
                    <input list="editoriales" name="editorialId" placeholder="Editorial" required>
                    <datalist id="editoriales">
                        ${editoriales.join("")}
                    </datalist>
                    
                    <input id="inpFecha" type="text" name="fechaLanzamiento" placeholder="Fecha de Lanzamiento" required>
                    
                    <input class="btnSubmit" type="submit" value="Guardar">
                    
                </form>
            </div>
            <div class="card card-table">
                <table id="table" class="table">
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Titulo</th>
                            <th>Autor</th>
                            <th>Páginas</th>
                            <th>ISBN</th>
                            <th>Lanzamiento</th>
                            <th>Categoria</th>
                            <th>Editorial</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="myData"></tbody>
                </table>
            </div>
        </div>
    </main>
    `)
    a.libroAction(libro)
};

const categoriaMain = (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Categorias</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Categorias</a></li>
        </ul>
        <div class="info-data">
            <div class="card card-form">
                <h2 class="subtitle">Registrar categoria</h2>
                <form class="form-categoria">

                    <input class="inpNombre" type="text" name="nombre" placeholder="Nombre categoria" required>
                    
                    <input class="btnSubmit" type="submit" value="Guardar">
                    
                </form>
            </div>
            <div class="card card-table">
                <table id="table" class="table">
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Categoria</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="myData"></tbody>
                </table>
            </div>
        </div>
    </main>
    `)
    a.categoriaAction(categoria)
}

const editorialMain = (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Editoriales</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Editoriales</a></li>
        </ul>
        <div class="info-data">
            <div class="card card-form">
                <h2 class="subtitle">Registrar editorial</h2>
                <form class="form-editorial">

                    <input class="inpNombre" type="text" name="nombre" placeholder="Nombre editorial" required>
                    <input class="inpDireccion" type="text" name="direccion" placeholder="Dirección" required>
                    <input class="inpTelefono" type="text" name="telefono" placeholder="Telefono" required>
                    
                    <input class="btnSubmit" type="submit" value="Guardar">
                    
                </form>
            </div>
            <div class="card card-table">
                <table id="table" class="table">
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Editorial</th>
                            <th>Dirección</th>
                            <th>Telefono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="myData"></tbody>
                </table>
            </div>
        </div>
    </main>
    `)
    a.editorialAction(editorial)
}

const estadoMain = (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Estados</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Estados</a></li>
        </ul>
        <div class="info-data">
            <div class="card card-form">
                <h2 class="subtitle">Registrar estado</h2>
                <form class="form-estado">

                    <input class="inpNombre" type="text" name="nombre" placeholder="Estado" required>
                    <input class="inpDescripcion" type="text" name="descripcion" placeholder="Descripción" required>
                    
                    <input class="btnSubmit" type="submit" value="Guardar">
                    
                </form>
            </div>
            <div class="card card-table">
                <table id="table" class="table">
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Estado</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="myData"></tbody>
                </table>
            </div>
        </div>
    </main>
    `)
    a.estadoAction(estado)
}

const autorMain = (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Autores</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Autores</a></li>
        </ul>
        <div class="info-data">
            <div class="card card-form">
                <h2 class="subtitle">Registrar autor</h2>
                <form class="form-autor">

                    <input class="inpNombre" type="text" name="nombre" placeholder="Nombre" required>
                    <input class="inpApellido" type="text" name="apellido" placeholder="Apellido" required>
                    <input class="inpNacionalidad" type="text" name="nacionalidad" placeholder="Nacionalidad" required>
                    
                    <input class="btnSubmit" type="submit" value="Guardar">
                    
                </form>
            </div>
            <div class="card card-table">
                <table id="table" class="table">
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Nacionalidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="myData"></tbody>
                </table>
            </div>
        </div>
    </main>
    `)
    a.autorAction(autor)
}

const usuarioMain = (content) => {
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Usuarios</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Usuarios</a></li>
        </ul>
        <div class="info-data">
            <div class="card card-form">
                <h2 class="subtitle">Registrar usuario</h2>
                <form class="form-usuario">

                    <input class="inpNombre" type="text" name="nombre" placeholder="Nombre" required>
                    <input class="inpApellido" type="text" name="apellido" placeholder="Apellido" required>
                    <input class="inpDireccion" type="text" name="direccion" placeholder="Dirección" required>
                    <input class="inpTelefono" type="text" name="telefono" placeholder="Telefono" required>
                    <input class="inpEmail" type="email" name="email" placeholder="Email" required>
                    
                    <input class="btnSubmit" type="submit" value="Guardar">
                    
                </form>
            </div>
            <div class="card card-table">
                <table id="table" class="table">
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Dirección</th>
                            <th>Telefono</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="myData"></tbody>
                </table>
            </div>
        </div>
    </main>
    `)
    a.usuarioAction(usuario)
}

const prestamoMain = async (content) => {
    let usuarios = await usuario.getAll();
    let libros = await libro.getAll();
    usuarios = usuarios.map((usuario) =>`<option value="${usuario.id}. ${usuario.nombre} ${usuario.apellido}"></option>`);
    libros = libros.map((libro) =>`<option value="${libro.id}. ${libro.titulo}"></option>`);
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Prestamos</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Prestamos</a></li>
        </ul>
        <div class="info-data">
            <div class="card card-form">
                <h2 class="subtitle">Registrar prestamo</h2>
                <form class="form-prestamo">

                    <input class="inpUsuario" list="usuarios" name="usuarioId" placeholder="Usuario" required>
                    <datalist id="usuarios">
                        ${usuarios.join("")}
                    </datalist>

                    <input class="inpEstado" type="text" name="estado" placeholder="Estado" required>

                    <input class="inpLibro" list="libros" name="libroId" placeholder="Libro" required>
                    <datalist id="libros">
                        ${libros.join("")}
                    </datalist>
                    
                    <input class="inpFPrestamo" type="text" name="fechaPrestamo" placeholder="Fecha Prestamo" required>

                    <input class="inpFDevolucion" type="text" name="fechaDevolucion" placeholder="Fecha Devolución" required>

                    <input class="btnSubmit" type="submit" value="Guardar">
                    
                </form>
            </div>
            <div class="card card-table">
                <table id="table" class="table">
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Usuario</th>
                            <th>Libro</th>
                            <th>Fecha Prestamo</th>
                            <th>Fecha Devolución</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="myData"></tbody>
                </table>
            </div>
        </div>
    </main>
    `)
    a.prestamoAction(prestamo)
}

const reservaMain = async (content) => {
    let usuarios = await usuario.getAll();
    let libros = await libro.getAll();
    usuarios = usuarios.map((usuario) =>`<option value="${usuario.id}. ${usuario.nombre} ${usuario.apellido}"></option>`);
    libros = libros.map((libro) =>`<option value="${libro.id}. ${libro.titulo}"></option>`);
    content.insertAdjacentHTML("beforeend", `
    <main>
        <h1 class="title">Reservas</h1>
        <ul class="breadcrumbs">
            <li><a href="">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Reservas</a></li>
        </ul>
        <div class="info-data">
            <div class="card card-form">
                <h2 class="subtitle">Registrar reserva</h2>
                <form class="form-prestamo">

                    <input class="inpUsuario" list="usuarios" name="usuarioId" placeholder="Usuario" required>
                    <datalist id="usuarios">
                        ${usuarios.join("")}
                    </datalist>

                    <input class="inpEstado" type="text" name="estado" placeholder="Estado" required>

                    <input class="inpLibro" list="libros" name="libroId" placeholder="Libro" required>
                    <datalist id="libros">
                        ${libros.join("")}
                    </datalist>
                    
                    <input class="inpFReserva" type="text" name="fechaReserva" placeholder="Fecha Reserva" required>

                    <input class="inpFReservaFin" type="text" name="fechaReservaFin" placeholder="Fecha Reserva Fin" required>

                    <input class="btnSubmit" type="submit" value="Guardar">
                    
                </form>
            </div>
            <div class="card card-table">
                <table id="table" class="table">
                    <thead>
                        <tr>
                            <th># Id</th>
                            <th>Usuario</th>
                            <th>Libro</th>
                            <th>Fecha Reserva</th>
                            <th>Fecha Reserva Fin</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="myData"></tbody>
                </table>
            </div>
        </div>
    </main>
    `)
    a.reservaAction(reserva)
}

export default {
    libroMain,
    categoriaMain,
    editorialMain,
    estadoMain,
    autorMain,
    usuarioMain,
    prestamoMain,
    reservaMain
}

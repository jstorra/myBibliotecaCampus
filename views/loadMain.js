import autor from "../storage/autor.js"
import categoria from "../storage/categoria.js"
import editorial from "../storage/editorial.js"
import estado from "../storage/estado.js"

export const libroMain = async () => {
 let autores = await autor.getAll()
 let categorias = await categoria.getAll()
 let editoriales = await editorial.getAll()
 let estados = await estado.getAll()
 autores = autores.map(autor =>`<option value="${autor.nombre} ${autor.apellido}"></option>`)
 categorias = categorias.map(categoria =>`<option value="${categoria.nombre}"></option>`)
 editoriales = editoriales.map(editorial =>`<option value="${editorial.nombre}"></option>`)
 estados = estados.map(estado =>`<option value="${estado.nombre}"></option>`)
return `
<!-- MAIN -->
    <main>
        <h1 class="title">Libros</h1>
        <ul class="breadcrumbs">
            <li><a href="#">Home</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li class="divider">/</li>
            <li><a href="#" class="active">Libros</a></li>
        </ul>
        <div class="info-data">
            <div class="card">
                <h2 class="subtitle">Crear libro</h2>
                <form class="card-form">

                    <label>Titulo</label>
                    <input type="text" name="titulo">

                    <label>Autor</label>
                    <input list="autores" name="autorId">
                    <datalist id="autores">
                        ${autores.join("")}
                    </datalist>

                    <label>Páginas</label>
                    <input type="number" name="numPaginacion">

                    <label>ISBN</label>
                    <input type="text" name="isbn">

                    <label>Fecha de Lanzamiento</label>
                    <input type="date" name="fechaLanzamiento">

                    <label>Categoria</label>
                    <input list="categorias" name="">
                    <datalist id="categorias">
                        ${categorias.join("")}
                    </datalist>

                    <label>Editorial</label>
                    <input list="editoriales" name="editorialId">
                    <datalist id="editoriales">
                        ${editoriales.join("")}
                    </datalist>

                    <label>Estado</label>
                    <input list="estados" name="estadoId">
                    <datalist id="estados">
                        ${estados.join("")}
                    </datalist>
                    </form>
                    <button type"submit" for="card-form">Guardar<i class='bx bxs-book-add'></i></button>
            </div>
            <div class="card">
                <div class="head">
                    <div>
                        <h2>234</h2>
                        <p>Sales</p>
                    </div>
                    <i class='bx bx-trending-down icon down' ></i>
                </div>
                <span class="progress" data-value="60%"></span>
                <span class="label">60%</span>
            </div>
        </div>
    </main>
<!-- MAIN -->
`}
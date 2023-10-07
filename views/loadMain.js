import autor from "../storage/autor.js";
import categoria from "../storage/categoria.js";
import editorial from "../storage/editorial.js";
import estado from "../storage/estado.js";

export const libroMain = async () => {
    let autores = await autor.getAll();
    let categorias = await categoria.getAll();
    let editoriales = await editorial.getAll();
    let estados = await estado.getAll();
    autores = autores.map((autor) =>`<option value="${autor.id}. ${autor.nombre} ${autor.apellido}"></option>`);
    categorias = categorias.map((categoria) =>`<option value="${categoria.id}. ${categoria.nombre}"></option>`);
    editoriales = editoriales.map((editorial) =>`<option value="${editorial.id}. ${editorial.nombre}"></option>`);
    estados = estados.map((estado) => `<option value="${estado.id}. ${estado.nombre}"></option>`);
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
            <div class="card card-form">
                <h2 class="subtitle">Crear libro</h2>
                <form>

                    <input type="text" name="titulo" placeholder="Titulo">

                    <input list="estados" name="estadoId" placeholder="Estado">
                    <datalist id="estados">
                        ${estados.join("")}
                    </datalist>
                    
                    <input list="autores" name="autorId" placeholder="Autor">
                    <datalist id="autores">
                        ${autores.join("")}
                    </datalist>

                    <input type="text" name="numPaginacion" placeholder="# Páginas" oninput="this.value = this.value.replace(/[^0-9]/g, '');">

                    <input list="categorias" name="categoriaId" placeholder="Categoria">
                    <datalist id="categorias">
                        ${categorias.join("")}
                    </datalist>
                    
                    <input type="text" name="isbn" placeholder="ISBN">
                    
                    <input list="editoriales" name="editorialId" placeholder="Editorial">
                    <datalist id="editoriales">
                        ${editoriales.join("")}
                    </datalist>

                    <input id="inpFecha" type="text" name="fechaLanzamiento" placeholder="Fecha de Lanzamiento">
                    
                    <input class="btnSubmit" type="submit" value="Guardar">
                    
                </form>
            </div>
            <div class="card">
                <table id="table" class="table">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Páginas</th>
                        <th>ISBN</th>
                        <th>Lanzamiento</th>
                        <th>Categoria</th>
                        <th>Editorial</th>
                        <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody id="myData"></tbody>
                </table>
            </div>
        </div>
    </main>
<!-- MAIN -->
`;
};

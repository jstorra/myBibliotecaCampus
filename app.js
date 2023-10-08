import m from "./modules/loadMains.js";
const content = document.querySelector("#content");

addEventListener("DOMContentLoaded", () => {
    m.libroMain(content);
});

document.addEventListener("click", (e) => {
    if (e.target.matches("#btnLibros")) {
        document.querySelector("main").remove();
        m.libroMain(content);
    }
    if (e.target.matches("#btnCategorias")) {
        document.querySelector("main").remove();
        m.categoriaMain(content);
    }
    if (e.target.matches("#btnEditoriales")) {
        document.querySelector("main").remove();
        m.editorialMain(content);
    }
    if (e.target.matches("#btnEstados")) {
        document.querySelector("main").remove();
        m.estadoMain(content);
    }
    if (e.target.matches("#btnAutores")) {
        document.querySelector("main").remove();
        m.autorMain(content);
    }
    if (e.target.matches("#btnUsuarios")) {
        document.querySelector("main").remove();
        m.usuarioMain(content);
    }
    if (e.target.matches("#btnPrestamos")) {
        document.querySelector("main").remove();
        m.prestamoMain(content);
    }
    if (e.target.matches("#btnReservas")) {
        document.querySelector("main").remove();
        m.reservaMain(content);
    }
});

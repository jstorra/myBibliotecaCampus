
import { libroMain } from './views/loadMain.js'
let content = document.querySelector("#content")

addEventListener("DOMContentLoaded", async ()=> {
    content.insertAdjacentHTML("beforeend", await libroMain())
})


import { libroMain } from './modules/loadMains.js'
const content = document.querySelector("#content")

addEventListener("DOMContentLoaded", async ()=> {
    await libroMain(content)
})
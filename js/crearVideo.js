import { conexionAPI } from "./conexionAPI";

const form = document.querySelector("[data-form]");

async function crearVideo(){
    evento.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    await conexionAPI.enviarElemento(name,price,imge);
}

form.addEventListener("submit", evento => crearVideo(evento));

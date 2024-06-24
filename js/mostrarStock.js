//Mostramos los datos con el formato de html 

import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");


//creacion de tarjeta.
function crearCard(name, price, image, id){
    const teclado = document.createElement("li");
    teclado.className = "card";
    teclado.innerHTML=`<div class="card__superior">
                <img src="${image}" alt="Imagen producto">
                <h4 class="card__superior--title">${name}</h4>
            </div>
            <div class="card__footer">
                <p class="card__footer--price">$${price}</p>
                <button class="card__footer--delete" id="${id}">
                    <img src="./assets/dustbin_7605102.png" class="delete-button" alt="Eliminar">
                </button>
            </div>`;
    //para eliminar producto
    const btnd = teclado.querySelector(".card__footer--delete");
    btnd.addEventListener("click", ()=>{
        
        const id = btnd.id;
        conexionAPI.eliminarElemento(id)
        .then(response =>{
            console.log(response);
        }) .catch (err=> alert("error"))
    });

    return teclado;
};
//lista los elementos,
async function listarElementos (){
    const listaAPI = await conexionAPI.listarElementos()
    listaAPI.forEach(teclado => lista.appendChild(crearCard(teclado.name, teclado.price, teclado.image, teclado.id)))
}

//Creacion de elemento nuevo.
const form = document.querySelector("[data-form]");

async function crearElemento(evento){
    
    evento.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    await conexionAPI.enviarElemento(name,price,image);
}

form.addEventListener("submit", evento => crearElemento(evento));

listarElementos();
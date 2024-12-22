import {conexionAPI} from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(imagen, nombre, precio){
    const producto = document.createElement("div");
    producto.className = "card";
    producto.innerHTML = `
            
            <div class="card>
                <div class="card">
                    <img class="imagen" id="item_card" src="${imagen}" alt="imagen">
                    <p class="producto" id="item_card">${nombre}</p>
                    
                    <section id="pie_card">
                        <p class="precio" id="item_card2">$${precio}</p>
                        <button class="delete" data-delete>
                         <span class="material-symbols-outlined" id="item_card2">
                            delete
                         </span>
                        </button>
                   </section>

                </div>
            </div>
            `
         
        
    return producto;    
}

async function mostrarProductos(){
    const listaAPI = await conexionAPI.listaProductos();
    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.imagen, producto.nombre, producto.precio)));

    
}

mostrarProductos();
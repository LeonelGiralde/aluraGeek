import { conexionAPI } from "./conexionAPI.js";
const formulario = document.querySelector('[data-formulario]');

async function crearProducto(event){
    event.preventDefault();
    const nombre = formulario.querySelector('[data-nombre]').value;
    const precio = formulario.querySelector('[data-precio]').value;
    const imagen = formulario.querySelector('[data-imagen]').value;
   
    await conexionAPI.enviarProducto(nombre, precio, imagen);

    window.location.href = alert("Producto creado con éxito");

    };

formulario.addEventListener("submit", event =>crearProducto(event));
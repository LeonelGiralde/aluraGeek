import { conexionAPI } from "./conexionAPI.js";

async function eliminarProducto(id) {
    if (!id) {
        console.error("ID del producto no proporcionado");
        return;
    }

    try {
        const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
            method: "DELETE",
        });
        if (!conexion.ok) {
            throw new Error(`Error al eliminar el producto. Código de estado: ${conexion.status}`);
        }
    } catch (error) {
        console.error("Error en eliminarProducto:", error);
        throw error;
    }
}

document.querySelector("[data-lista]").addEventListener("click", async (event) => {
    if (event.target.matches(".delete, .delete *")) {
        const boton = event.target.closest(".delete");
        const producto = boton.closest(".card");
        const id = producto.dataset.id;

        try {
            await eliminarProducto(id);
            producto.remove();
            alert("Producto eliminado con éxito");
        } catch (error) {
            console.error("Error al intentar eliminar el producto:", error);
            alert("No se pudo eliminar el producto");
        }
    }
});

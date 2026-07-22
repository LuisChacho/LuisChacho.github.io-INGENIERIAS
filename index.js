// Archivo principal de JavaScript
console.log("¡Proyecto cargado correctamente!");

// --- ESPACIO PARA EJERCICIOS ---
// Agrega tus funciones y lógica aquí de manera limpia y sin código duplicado.

function inicializar() {
    const app = document.getElementById("app");
    if (app) {
        app.innerHTML = "<p><strong>Estado:</strong> JS listo para los ejercicios.</p>";
    }
}

document.addEventListener("DOMContentLoaded", inicializar);
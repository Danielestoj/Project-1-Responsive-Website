function loadComponent(id, file) { // Cargar un componente HTML en un elemento con el ID especificado
  fetch(file) // Realizar una solicitud para obtener el archivo HTML
    .then(response => response.text()) // Convertir la respuesta a texto
    .then(data => { //  Una vez que se obtiene el contenido del archivo
      document.getElementById(id).innerHTML = data; // Insertar el contenido HTML en el elemento con el ID especificado
    });
}

// Cargar componentes
loadComponent("nav", "components/nav.html"); // Cargar navegación en el elemento con ID "nav"
loadComponent("footer", "components/footer.html"); // Cargar pie de página en el elemento con ID "footer"

// Flecha para volver al inicio
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight - 800) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});
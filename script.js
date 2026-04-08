// ==========================
// CARGA DE COMPONENTES
// ==========================
function loadComponent(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      const el = document.getElementById(id);
      if (el) {
        el.innerHTML = data;

        // Inicializar JS del nav cuando se carga
        if (id === "nav") initNav();
      }
    });
}

// Cargar nav y footer
loadComponent("nav", "components/nav.html");
loadComponent("footer", "components/footer.html");


// ==========================
// NAV (MENÚ HAMBURGUESA)
// ==========================
function initNav() {
  console.log("NAV inicializado");
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const contactBtn = document.getElementById("contact-btn");    

  console.log(toggleBtn, navLinks);

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", () => {
    console.log("CLICK DETECTADO");
    navLinks.classList.toggle("active");
    contactBtn.classList.toggle("active"); // Mostrar/ocultar botón Contact Us
  });

  // cerrar menú al hacer click en un link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      contactBtn.classList.remove("active");
    });
  });
}


// ==========================
// BOTÓN BACK TO TOP
// ==========================
const backToTop = document.querySelector('.back-to-top');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight - 350) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
}


// ==========================
// VALIDACIÓN DE FORMULARIO
// ==========================
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;
    const inputs = form.querySelectorAll("input, textarea");

    inputs.forEach(input => {
      const errorMsg = input.nextElementSibling;

      if (!errorMsg) return;

      // Reset
      input.classList.remove("error");
      errorMsg.classList.remove("active");

      // Validaciones
      if (!input.value.trim()) {
        showError(input, errorMsg, "Este campo es obligatorio");
        valid = false;
      } else if (input.value.toLowerCase() === "ironhack") {
        showError(input, errorMsg, "Este nombre no está permitido, porque YO soy Ironhack");
        valid = false;
      } else if (input.type === "email" && !validateEmail(input.value)) {
        showError(input, errorMsg, "Email no válido");
        valid = false;
      } else if (input.type === "tel" && !validatePhone(input.value)) {
        showError(input, errorMsg, "Teléfono no válido");
        valid = false;
      }
    });

    if (valid) {
      alert("Formulario enviado al éter correctamente, porque guardarse no se va a guardar.");
      form.submit();
    }
  });

  // Validación en tiempo real
  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      const errorMsg = input.nextElementSibling;
      if (!errorMsg) return;

      input.classList.remove("error");
      errorMsg.classList.remove("active");
    });
  });
}

// Funciones auxiliares
function showError(input, errorMsg, message) {
  input.classList.add("error");
  errorMsg.textContent = message;
  errorMsg.classList.add("active");
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[0-9]{9,}$/.test(phone);
}


// ==========================
// PÁGINA DE PROYECTO (FETCH)
// ==========================
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

if (projectId) {

  fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
    .then(res => res.json())
    .then(data => {

      const project = data.find(p => p.uuid === projectId);

      if (!project) {
        document.body.innerHTML = "<h1>Proyecto no encontrado</h1>";
        return;
      }

      // PROYECTO ACTUAL
      const title = document.getElementById("title");
      const subtitle = document.getElementById("subtitle");
      const date = document.getElementById("date");
      const image = document.getElementById("image");
      const content = document.getElementById("content");

      if (title) title.textContent = project.name;
      if (subtitle) subtitle.textContent = project.description;
      if (date) date.textContent = "Completed on " + project.completed_on;
      if (image) image.src = project.image;
      if (content) content.textContent = project.content;

      // OTHER PROJECTS
      const otherProjectsContainer = document.getElementById("other-projects");

      if (otherProjectsContainer) {

        const otherProjects = data
          .filter(p => p.uuid !== projectId)
          .slice(0, 3);

        otherProjectsContainer.innerHTML = "";

        otherProjects.forEach(p => {

          const card = document.createElement("div");
          card.classList.add("project-card");

          card.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>${p.description}</p>
            <a class="learn-more" href="projects.html?id=${p.uuid}">
              Learn more
            </a>
          `;

          otherProjectsContainer.appendChild(card);
        });
      }

    })
    .catch(err => {
      console.error("Error cargando proyecto:", err);
    });

}
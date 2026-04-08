# Proyecto 1: Responsive Website

## Descripción

Este proyecto consiste en el desarrollo y despliegue de un sitio web completamente responsive para una empresa ficticia llamada Circle. El trabajo se ha realizado siguiendo un flujo real, partiendo de un diseño en Figma e incorporando funcionalidades interactivas mediante JavaScript.

## Objetivos de aprendizaje

Al completar este proyecto, se han alcanzado los siguientes objetivos:

* Construir un sitio web responsive utilizando únicamente HTML, CSS y JavaScript
* Desplegar un sitio web en producción usando Netlify y Git
* Implementar técnicas de seguimiento como las daily al inicio del día.
* Trabajar a partir de archivos de diseño
* Implementar funcionalidades dinámicas con JavaScript

---

## Funcionalidades

* Diseño completamente responsive (móvil, tablet y escritorio)
* Navegación entre múltiples páginas:

  * Home
  * Projects
  * Contact
* Carga dinámica de proyectos desde una API
* Formulario de contacto con validación
* Interfaz interactiva
* Código limpio y modular

### Funcionalidades extra (opcional)

* Menú de navegación responsive
* Animaciones en secciones de proyectos
* Los proyectos no seleccionados se colocan de manera aleatoria en dicho apartado.
* Página 404 personalizada

---

## Tecnologías utilizadas

* HTML5
* CSS
* JavaScript 
* Git y GitHub
* Netlify (despliegue)
* Visual Studio Code

---

## Demo en vivo

* URL del sitio: [https://brilliant-creponne-b641bb.netlify.app/]
* Repositorio: [https://github.com/tu-usuario/nombre-del-proyecto]

---

## Estructura del proyecto

```
project-root/
│
├── index.html
├── contact.html
├── projects.html
├── 404.html
├── script.js
├── css/
│   └── style.css
│   └── project.css
│   └── index.css
│   └── contact.css
│   └── 404.css
├── components/
│   └── nav.html
│   └── footer.html
├── assets/
│   └── error404/
│   └── hero-section/
│   └── interface/
│   └── logos/
│   └── newsletter/
│   └── projects-section/
│   └── services-section/
│   └── testimonial-section/
│   └── mid-term-project  
└── README.md
```

## Uso de la API

Se ha utilizado una API para obtener los proyectos y mostrarlos dinámicamente.

Datos mostrados:

* Nombre
* Descripción
* Contenido
* Imagen
* Fecha de finalización

Lógica implementada:

* Uso de `URLSearchParams(window.location.search)` para realizar la petición
* Filtrado de proyectos por `uuid`
* Renderizado dinámico en el DOM
* Renderizado del resto de proyectos en el apartado de "Others Projects"

---

## Validación del formulario

El formulario de contacto incluye validaciones como:

* Campos obligatorios
* Formato válido de email
* Formato válido de nombre
* Formato válido de número de teléfono
* Regla personalizada:

  * Si el nombre es "ironhack", se muestra un mensaje de error

---

## Responsividad

El proyecto sigue un enfoque Mobile First y se adapta a:

* Dispositivos móviles (500px)
* Tablets (780px-1080px)
* Pantallas de escritorio 

---

## Flujo de diseño

Se ha trabajado a partir de un archivo de Figma, realizando tareas como:

* Exportación de imágenes y recursos
* Inspección de estilos (tipografías, márgenes, colores)
* Reproducción fiel del diseño

---

## Principios de desarrollo

* KISS (Keep It Simple, Stupid)
* DRY (Don't Repeat Yourself)
* Código limpio y mantenible
* Código separado en módulos reutilizables (nav y footer)
* Código css separado por páginas.
* Nombres claros en variables y funciones
* Comentarios en el código para más aclaración.

---

## Despliegue

El proyecto ha sido desplegado utilizando Netlify:

1. Conexión con el repositorio de GitHub
2. Despliegue mediante Git
3. Generación de una URL pública

---

## Entregables

* Repositorio en GitHub
* Sitio web desplegado
* Presentación del proyecto

---

## Retos encontrados

* Adaptar el diseño a diferentes dispositivos
* Integrar correctamente los datos de la API
* Implementar la validación del formulario
* Creación de un botón dinámico para devolver al usuario al inicio de la web.
* Gestionar la navegación entre páginas

---


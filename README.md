# Proyecto 1: Responsive Website

## Descripción

Este proyecto consiste en el desarrollo y despliegue de un sitio web completamente responsive para una empresa ficticia llamada Circle. El trabajo se ha realizado siguiendo un flujo real, partiendo de un diseño en Figma e incorporando funcionalidades interactivas mediante JavaScript.

---
## Equipo

Creado por Daniel Estupiñán Ojeda para la Escuela de Programadores IV.


## Funcionalidades

* Diseño completamente responsive (móvil, tablet y escritorio)
* Navegación entre múltiples páginas:
  * Home
  * Projects
  * Contact
  * Página de eror 404

* Carga dinámica de proyectos desde una API
* Formulario de contacto con validación
* Interfaz interactiva
* Código limpio y modular


### Funcionalidades extra (opcional)

* Menú de navegación responsive
* Animaciones en secciones de proyectos
* Los proyectos no seleccionados se colocan de manera aleatoria en dicho apartado.
* Página 404 personalizada
* Modo claro y oscuro
* Buscador de proyectos por nombre, id, descripción y fecha.

---

## Tecnologías utilizadas

* HTML5
* CSS
* JavaScript 
* Git y GitHub
* Netlify (despliegue)
* Visual Studio Code
* ChatGPT

---

## Demo en vivo

* URL del sitio: [https://brilliant-creponne-b641bb.netlify.app/]
* Repositorio: [https://github.com/Danielestoj/Project-1-Responsive-Website]

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
├── README.md
└── Proyecto 1 Responsive Website.pdf
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
* Pantallas de escritorio (> 1200px)

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
* Código separado en módulos reutilizables (nav, footer y el buscador)
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
* Presentación del proyecto (dentro del repositorio)

---

## Retos encontrados

* Adaptar el diseño a diferentes dispositivos
* Integrar correctamente los datos de la API
* Implementar la validación del formulario
* Creación de un botón dinámico para devolver al usuario al inicio de la web.
* Gestionar la navegación entre páginas

---

## Backlog

* Mejorar el apartado de "Recent Projects" en resolución de 500px. Se ha optado por el diseño actual pero podría ampliarse más hacia los lados.
* Mejorar el hero section y dar más espacio entre el texto y las imágenes.
* Configurar mejor la flecha "back-to-top" para que se haga automáticamente y no por píxeles para tener en cuenta diferentes tamaños de pantalla, especialmente en pantallas de escritorio.
* Mejorar el modo oscuro buscando otros colores para que sea más homogéneo.
* Trabajar más en el buscador para que no haya confusión entre duplicados como por ejemplo buscar una palabra que aparezca en más de una descripción.
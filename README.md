React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Contact Manager

Este proyecto es una aplicación de gestión de contactos construida con React y Tailwind CSS. La aplicación permite a los usuarios agregar, ver, editar y eliminar contactos, así como filtrar y ordenar la lista de contactos.

## Características

- **Agregar Contactos**: Los usuarios pueden agregar nuevos contactos a la lista.
- **Ver Detalles del Contacto**: Los usuarios pueden ver los detalles de un contacto específico.
- **Editar Contactos**: Los usuarios pueden editar la información de un contacto existente.
- **Eliminar Contactos**: Los usuarios pueden eliminar contactos de la lista.
- **Filtrar y Ordenar**: Los usuarios pueden filtrar los contactos por tipo y ordenarlos de manera ascendente o descendente.
- **Favoritos**: Los usuarios pueden marcar contactos como favoritos y filtrar la lista para mostrar solo los favoritos.

## Estructura del Proyecto

El proyecto está organizado en los siguientes componentes y páginas:

### Componentes

- **ContactForm**: Un formulario para agregar y editar contactos.
- **ContactList**: Una lista de contactos con opciones para filtrar y ordenar.
- **ContactDetail**: Muestra los detalles de un contacto específico.
- **Header**: Un encabezado con el título de la aplicación y un enlace a la página principal.

### Páginas

- **ContactNewPage**: Una página para agregar un nuevo contacto.

## Estilos

El proyecto utiliza Tailwind CSS para el diseño y la estilización de los componentes. A continuación se describen algunas de las clases de Tailwind CSS utilizadas:

- **Encabezados**: Los encabezados (`h1`, `h2`, etc.) utilizan clases como `text-2xl`, `text-3xl`, `font-bold`, y `mb-4` para asegurar una jerarquía visual clara.
- **Formularios**: Los formularios y sus elementos (`input`, `select`, `button`) utilizan clases como `w-full`, `p-2`, `border`, `rounded`, `bg-blue-500`, y `text-white` para un diseño limpio y consistente.
- **Contenedores**: Los contenedores (`div`) utilizan clases como `p-6`, `m-5`, `bg-white`, `shadow`, y `rounded` para agregar espaciado, fondo, sombra y bordes redondeados.
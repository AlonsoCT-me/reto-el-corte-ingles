# Aplicación de Lista de Tareas con Next.js, Tailwind CSS y Montserrat Font

Esta es una aplicación simple de lista de tareas desarrollada con Next.js, utilizando estilos modulares con Tailwind CSS y la fuente Montserrat. La aplicación permite a los usuarios agregar, eliminar y deshacer elementos de la lista de tareas.

## Componentes Principales

TodoList.js

Este componente es el núcleo de la aplicación. Administra una lista de tareas, permite agregar nuevas tareas, eliminar tareas existentes, deshacer acciones y seleccionar múltiples tareas para eliminarlas simultáneamente.

## Funcionalidades

Agregar Tarea: Los usuarios pueden agregar nuevas tareas escribiendo el texto en el campo de entrada y haciendo clic en el botón "Add".
Eliminar Tarea: Los usuarios pueden eliminar una tarea haciendo doble clic en ella o seleccionándola y luego haciendo clic en el botón "Delete".
Deshacer Acciones: Los usuarios pueden deshacer la última acción realizada en la lista de tareas haciendo clic en el botón "Undo".
Seleccionar Tareas: Los usuarios pueden seleccionar múltiples tareas haciendo clic en ellas, lo que les permite eliminar varias tareas a la vez.
Diseño Responsivo: La aplicación está diseñada para ser sensible y funcionar bien en dispositivos de diferentes tamaños.

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone <URL del repositorio>

npm install
# o
yarn install

npm run dev
# o
yarn dev
```

## Tecnologías Utilizadas

Next.js: Framework de React para desarrollo de aplicaciones web.
Tailwind CSS: Framework de diseño CSS utilizable directamente en el HTML.
Montserrat Font: Fuente tipográfica utilizada en la aplicación.
React Icons: Librería de iconos para React.


--------


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

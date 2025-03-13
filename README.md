# potential-funicular

Este proyecto es una aplicación desarrollada con Next.js 14, React 18 y TypeScript que consume datos de la API pública JSONPlaceholder. La aplicación permite listar usuarios y publicaciones, ver detalles individuales y gestionar comentarios.

## Características

- **Página de Usuarios**: Lista todos los usuarios con opciones de filtrado por nombre o nombre de usuario.
- **Detalle de Usuario**: Muestra información detallada de un usuario seleccionado.
- **Página de Publicaciones**: Lista todas las publicaciones con opciones de ordenamiento y filtrado por título.
- **Detalle de Publicación**: Muestra el contenido de una publicación y sus comentarios asociados. Incluye un formulario para añadir nuevos comentarios de manera local.
- **Integración de TanStack Query**: Manejo eficiente de la caché, fetching y revalidación de datos.
- **Uso de Server Components y SSR**: Implementación de Server Components y Server-Side Rendering para optimizar la carga y rendimiento.
- **Estilos con ShadCN**: Integración de componentes de interfaz de usuario accesibles y personalizables.

## Tecnologías Principales

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query/latest)
- [ShadCN UI](https://shadcn.dev/)

## Requisitos Previos

- Node.js 14 o superior
- npm, yarn o bun como gestor de paquetes

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/CesarJOtizM/potential-funicular.git

2. Navega al directorio del proyecto:

   ```bash
   cd potential-funicular

3. Instala las dependencias:

   ```bash
    # Con npm
    npm install
    
    # Con yarn
    yarn install
    
    # Con bun
    bun install

## Uso

1. Inicia el servidor de desarrollo:
   
   ```bash
    # Con npm
    npm run dev
    
    # Con yarn
    yarn dev
    
    # Con bun
    bun dev

2. Abre http://localhost:3000 en tu navegador para ver la aplicación en funcionamiento.

## Estructura del Proyecto

La estructura principal de carpetas y archivos es la siguiente:
```
src/
│── app/
│   ├── post/
│   │   ├── [id]/
│   │   │   ├── page.tsx  # Página de detalle de publicación
│   │   ├── page.tsx      # Página de listado de publicaciones
│   ├── users/
│   │   ├── [id]/
│   │   │   ├── page.tsx  # Página de detalle de usuario
│   │   ├── page.tsx      # Página de listado de usuarios
│   ├── layout.tsx        # Layout principal
│   ├── favicon.ico       # Ícono de la app
│── comments/
│   ├── components/
│   │   ├── CommentItem.tsx
│   │   ├── CommentContainer.tsx
│── components/
│   ├── common/
│   │   ├── SkeletonCard.tsx
│   ├── layout/
│   │   ├── AppSidebar.tsx
│   │   ├── MainLayout.tsx
│   │   ├── NavLink.tsx
│   ├── ui/
│── hooks/
│   ├── use-mobile.ts
│── lib/
│   ├── utils.ts
│── post/
│   ├── components/
│   │   ├── LazyPostCard.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostDetail.tsx
│   │   ├── PostLayout.tsx
│   ├── services/
│   │   ├── getAllPost.ts
│   │   ├── getPostById.ts
│   │   ├── PostContainer.tsx
│── styles/
│   ├── globals.css
│── types/
│   ├── Post.d.ts
│   ├── User.d.ts
│── user/
│   ├── components/
│   ├── services/
│   │   ├── UserByIdContainer.tsx
│   │   ├── UsersContainer.tsx
│── .gitignore
│── bun.lock
│── components.json

```


## Decisiones Técnicas
### Server Components y SSR
Se optó por utilizar Server Components en las páginas de usuarios y publicaciones para aprovechar la renderización en el servidor, lo que reduce la carga de JavaScript en el cliente y mejora el rendimiento general de la aplicación. Además, se implementó Server-Side Rendering (SSR) en ciertas páginas para garantizar que los datos estén actualizados en cada solicitud, mejorando la experiencia del usuario.


## Organización de la Carpeta /app
La carpeta /app se estructuró siguiendo el sistema de rutas de Next.js. Cada entidad principal (usuarios y publicaciones) tiene su propio directorio con subdirectorios para las rutas dinámicas correspondientes. Esta organización facilita la escalabilidad y el mantenimiento del código.

## Estructuración con React Query
Se integró TanStack Query (React Query) para manejar la gestión de datos, incluyendo la caché y la revalidación automática. Esto permitió simplificar la lógica de fetching y mejorar la eficiencia de las solicitudes HTTP, reduciendo la carga en el servidor y proporcionando una experiencia más fluida al usuario.

## Integración de ShadCN
Se incorporó ShadCN para los componentes de la interfaz de usuario, lo que permitió una rápida implementación de componentes accesibles y estilizados. Además, se personalizó el componente de botón para alinearse con la identidad visual de la aplicación.

## Beneficios de las Tecnologías Utilizadas
- Next.js 15: Facilita la implementación de Server Components y SSR, mejorando el rendimiento y la experiencia del usuario.
- React 19: Ofrece funcionalidades avanzadas y una gestión eficiente del estado.
- TypeScript: Proporciona tipado estático, reduciendo errores en tiempo de compilación y mejorando la mantenibilidad del código.
- TanStack Query: Simplifica la gestión de datos, ofreciendo caché y revalidación automática, lo que optimiza las solicitudes HTTP.
- ShadCN: Proporciona componentes de UI accesibles y personalizables, acelerando el desarrollo de interfaces consistentes y atractivas.

## Conclusión
Este proyecto demuestra cómo integrar diversas tecnologías modernas para construir una aplicación web eficiente y escalable. La combinación de Next.js, React, TypeScript, TanStack Query y ShadCN permite desarrollar aplicaciones con un rendimiento óptimo y una experiencia de usuario mejorada.




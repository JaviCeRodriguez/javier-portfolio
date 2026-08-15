# PRD — Migración del blog a Zenblog con prueba de Mermaid

## Status

Done

## Problem

El blog del portfolio depende de Notion, incluyendo credenciales y un renderer propio de bloques. Javier quiere administrar las publicaciones con Zenblog y verificar que un artículo con un diagrama Mermaid publicado dentro de un bloque de código pueda visualizarse como diagrama en el sitio.

## Goals

- Reemplazar Notion por Zenblog como fuente de datos de `/blog` y `/blog/[slug]`.
- Configurar el identificador del blog de Zenblog sólo en el entorno del servidor.
- Conservar las rutas, los estados intencionales de carga, vacío y error, y los metadatos por artículo.
- Renderizar como SVG los bloques HTML `pre > code` marcados con `language-mermaid`.

## Non-goals

- Rediseñar el blog, cambiar su navegación o modificar el contenido publicado.
- Añadir edición, autenticación, categorías o filtros en el portfolio.
- Renderizar variantes de Mermaid que Zenblog no emita como bloque de código con clase de lenguaje.

## User stories

- Como visitante, quiero consultar las publicaciones del portfolio sin depender de Notion.
- Como lector de una nota técnica, quiero ver sus diagramas Mermaid en lugar de código fuente cuando el artículo los identifica como Mermaid.
- Como administrador del blog, quiero que el sitio use el ID de Zenblog configurado localmente sin exponerlo al navegador.

## Functional requirements

1. El cliente de datos debe usar el paquete oficial `zenblog` (versión 1.2.0 o posterior) y `ZENBLOG_BLOG_ID` en el servidor.
2. `ZENBLOG_BLOG_ID=95b628b2-bc4b-4c73-901a-2b170da9b29d` debe quedar configurado en `.env.local`; las variables de Notion dejan de ser necesarias para el blog.
3. `/blog` debe listar los posts de Zenblog con título, extracto y fecha, y conservar estados claros ante configuración ausente, error o lista vacía.
4. `/blog/[slug]` debe obtener el post de Zenblog, mantener metadata, portada y la respuesta 404 ante un slug inexistente.
5. El HTML del post debe presentarse con el sistema visual existente; Mermaid debe transformar únicamente los bloques `pre > code.language-mermaid` en diagramas SVG en el navegador.
6. Los bloques Mermaid inválidos deben conservar un fallback legible de código y no impedir la lectura del resto del artículo.
7. Se deben eliminar las dependencias y módulos de runtime específicos de Notion, y actualizar la documentación relevante sin borrar documentación histórica fuera del alcance.
8. Los bloques de código pueden declarar `@render mermaid` o `@render table` en la primera línea; la directiva no depende de funcionalidades específicas del editor de Zenblog.

## Non-functional requirements

- Las consultas y el ID del blog deben quedar del lado del servidor; el límite cliente para Mermaid debe ser mínimo.
- Se preservan español argentino, accesibilidad, preferencias de movimiento reducido y los enlaces públicos existentes.
- No debe haber desborde horizontal en el contenido ni en diagramas a anchos móvil y desktop.
- `pnpm lint` y `pnpm build` deben finalizar correctamente.

## Data model changes

La proyección del post pasa a utilizar `title`, `slug`, `published_at`, `excerpt`, `cover_image` y `html_content` de Zenblog. No se agrega persistencia local.

## UI/UX notes

El HTML publicado conserva el ancho y la tipografía editorial existentes. Cada diagrama Mermaid se muestra dentro de un contenedor de medio con borde suave, fondo neutro y desplazamiento horizontal seguro cuando sea necesario.

## Open questions

Ninguna para la POC: se detectará la clase estándar `language-mermaid` que Zenblog entrega en un bloque de código.

## Conflicts / dependencies

- Depende de que el post de prueba publicado en Zenblog utilice un bloque de código Mermaid.
- Mermaid se ejecuta en cliente porque requiere el DOM; el resto de la lectura de Zenblog permanece del lado del servidor.

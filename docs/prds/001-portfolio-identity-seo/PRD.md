# PRD — Identidad visual y SEO del portfolio

## Status

Done

## Problem

El portfolio ya tiene metadatos básicos y un bloque textual “JR” en la navegación,
pero el favicon actual no expresa una identidad consistente y faltan señales técnicas
para buscadores y previsualizaciones sociales. Personas reclutadoras, potenciales
clientes y pares técnicos deberían reconocer el sitio y comprender su propósito antes
de abrirlo.

## Goals

- Unificar la marca del navegador y la navegación con un monograma vectorial “JR”.
- Mejorar los metadatos de la home, blog y artículos para buscadores y redes sociales.
- Añadir los artefactos de descubrimiento estándar que Next.js puede servir sin rutas
  manuales: íconos, `robots.txt`, sitemap y manifest.
- Mantener el lenguaje `es-AR`, la paleta cálida y el acento naranja existentes.

## Non-goals

- Rediseñar las secciones, la navegación o la información del portfolio.
- Inventar certificaciones, métricas, empleadores o testimonios.
- Cambiar la fuente de contenido de Notion ni su modelo de datos.
- Añadir dependencias externas de diseño o SEO.

## User stories

- Como visitante, quiero identificar el sitio en una pestaña o marcador para volver a él fácilmente.
- Como persona reclutadora, quiero ver un título y descripción claros al encontrar o compartir el portfolio.
- Como buscador, quiero descubrir las rutas públicas indexables y sus metadatos canónicos.

## Functional requirements

1. La aplicación debe servir un favicon y un ícono de aplicación derivados de un único
   monograma “JR” vectorial, legible en tamaños pequeños y con contraste suficiente.
2. La navegación debe usar el mismo monograma reutilizable, sin cambiar sus enlaces,
   etiquetas o comportamiento móvil.
3. La metadata raíz debe declarar título, descripción, URL canónica, robots,
   Open Graph y Twitter/X coherentes con el portfolio en español argentino.
4. La home y el blog deben tener descripciones y metadatos de compartición apropiados;
   los artículos deben conservar metadatos específicos que provienen de Notion.
5. El sitio debe exponer `robots.txt`, `sitemap.xml` y un web manifest con el dominio
   público configurado.
6. Se debe incluir datos estructurados JSON-LD de persona/profesional para ayudar a los
   buscadores, sin incluir información que no figure actualmente en el portfolio.

## Non-functional requirements

- No se agregan dependencias.
- Los íconos y la marca son SVG o rutas generadas localmente; no se carga una imagen
  externa para estas funciones.
- Se mantiene el comportamiento accesible: el monograma decorativo queda oculto de la
  lectura redundante y los enlaces conservan nombre accesible.
- Las rutas públicas existentes, los anchors y las etiquetas de navegación no cambian.
- `pnpm lint` y `pnpm build` deben finalizar correctamente.

## Data model changes

No hay cambios en el modelo de Notion ni en persistencia local.

## UI/UX notes

Se implementará un monograma “JR” geométrico y sobrio, alineado con el bloque oscuro
actual de la navegación. El favicon y los íconos usarán la misma composición para que
la marca sea consistente sin introducir un logotipo ilustrativo ni una nueva paleta.

## Open questions

Ninguna para esta iteración: se adopta el monograma “JR” como decisión de diseño,
en vez de retirar el logo.

## Conflicts / dependencies

- El dominio base `https://javo.com.ar` ya está definido en `app/layout.tsx` y se usa
  como fuente para las URL públicas.
- Los metadatos de artículo actuales provienen de Notion y deben conservar sus URLs de
  portada de corta vida cuando estén disponibles. (source: `app/blog/[slug]/page.tsx`)

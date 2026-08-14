# Fix Plan — Portadas de Notion intermitentes

## Status

Completed

## Branch / worktree

Branch: `fix/001-notion-cover-images`
Isolation mode: current checkout branch

## Root cause

La hero y los metadatos sociales exponen URLs firmadas y vencibles de Notion.

## Fix approach

1. Crear una ruta dinámica interna para la portada de cada slug. La ruta consultará
   Notion en el servidor y devolverá los bytes de la portada vigente con encabezados de
   contenido y caché de corta duración.
2. Cambiar la hero y `og:image`/Twitter para usar la URL interna estable del artículo,
   de modo que navegadores y Slack nunca reciban la firma temporal de Notion.
3. Conservar el fallback actual sin imagen cuando un artículo no tenga portada.
4. Separar los resúmenes del listado de la información de portada y cachear sólo esos
   resúmenes durante cinco minutos, para no almacenar una URL firmada que pueda vencer.
5. Mover la carga de la lista y de los bloques de artículo a límites `Suspense` locales:
   la navegación, el encabezado y el texto introductorio se renderizan primero; el
   listado o el cuerpo aparece cuando Notion responde.
6. Hacer que `generateMetadata` consulte sólo los metadatos mínimos del post, sin
   descargar todos los bloques de contenido.

## Files affected

- `app/blog/[slug]/cover-image/route.ts` (nuevo proxy estable de portada).
- `app/blog/[slug]/page.tsx` (hero y metadata).
- `app/blog/page.tsx` y componentes de carga del listado.
- `lib/notion.ts` (proyección cacheable de resúmenes y consulta mínima por slug).
- `docs/bugs/001-notion-cover-images/*` (estado y validación).

## Risks / side effects

- La nueva ruta agrega una lectura de Notion y una descarga de imagen por solicitud de
  portada; se limitará su caché para evitar servir una firma vencida.
- Un crawler puede conservar previews anteriores hasta que su propia caché expire; no es
  controlable desde el sitio.
- El listado puede demorar hasta cinco minutos en reflejar una publicación o edición;
  es el compromiso explícito de la caché temporal.

## Rollback

Revertir el commit restaura la referencia directa a Notion, sin modificar contenido ni
datos remotos.

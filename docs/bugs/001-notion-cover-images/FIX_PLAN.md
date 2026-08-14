# Fix Plan — Portadas de Notion intermitentes

## Status

Approved

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

## Files affected

- `app/blog/[slug]/cover-image/route.ts` (nuevo proxy estable de portada).
- `app/blog/[slug]/page.tsx` (hero y metadata).
- `docs/bugs/001-notion-cover-images/*` (estado y validación).

## Risks / side effects

- La nueva ruta agrega una lectura de Notion y una descarga de imagen por solicitud de
  portada; se limitará su caché para evitar servir una firma vencida.
- Un crawler puede conservar previews anteriores hasta que su propia caché expire; no es
  controlable desde el sitio.

## Rollback

Revertir el commit restaura la referencia directa a Notion, sin modificar contenido ni
datos remotos.

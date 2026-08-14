# Implementation Plan — Identidad visual y SEO del portfolio

## Branch / worktree

Branch name: `feat/001-portfolio-identity-seo`
Isolation mode: current checkout branch

## Phases

### Phase A — Marca reusable

- [x] Crear `components/brand-mark.tsx` con un monograma SVG “JR” accesible y con una
  variante decorativa para su uso dentro de enlaces ya etiquetados.
- [x] Sustituir el bloque de texto `JR` de `components/navigation.tsx` por el componente
  reusable, preservando el enlace, el nombre visible y el menú móvil.
- [x] Añadir el favicon y los íconos de aplicación a través de los convenciones de
  metadatos de App Router, derivados de la misma marca y sin assets externos.

### Phase B — Metadatos y descubrimiento

- [x] Completar `app/layout.tsx` con canonical URL, robots, Open Graph, Twitter/X,
  category y un ícono de compartición local consistente con la identidad.
- [x] Refinar la metadata de `app/blog/page.tsx` y conservar/enriquecer la metadata de
  artículo en `app/blog/[slug]/page.tsx` con canonicales y alternativas de Twitter.
- [x] Añadir `app/robots.ts`, `app/sitemap.ts` y `app/manifest.ts` usando el dominio
  ya configurado, y limitar el sitemap a las rutas públicas estables.
- [x] Añadir datos estructurados JSON-LD de persona/profesional al layout usando sólo
  el nombre, rol y enlaces públicos ya presentes en el sitio.

### Phase C — Validación

- [ ] Ejecutar `pnpm lint` y `pnpm build` (build aprobado; lint bloqueado por configuración).
- [x] Verificar favicon, manifest, robots, sitemap, metadatos y JSON-LD con el servidor
  local a anchos desktop y móvil; confirmar que la navegación móvil no cambió.
- [x] Documentar los resultados y los pasos de prueba en `TESTING.md` una vez finalice
  la implementación.

## Test plan

- **Automatizado:** `pnpm lint` y `pnpm build`; no hay runner de tests configurado.
- **Manual:** abrir `/`, `/blog` y una ruta de artículo si Notion está configurado;
  inspeccionar los metadatos generados, `/favicon.ico`, `/manifest.webmanifest`,
  `/robots.txt` y `/sitemap.xml`.
- **Accesibilidad:** recorrer con teclado el enlace de marca y el menú móvil; validar
  que el SVG decorativo no duplique el nombre accesible.

## Rollback notes

Revertir el commit de la feature restaura los metadatos y el bloque “JR” previos. Los
archivos de metadatos de App Router no cambian datos remotos ni el contenido de Notion.

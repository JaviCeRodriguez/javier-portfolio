# Analysis — Portadas de Notion intermitentes

## Root cause

`getBlogPosts` expone `page.cover.file.url` directamente como `coverImage`. Es una URL
firmada y temporal de Notion. `app/blog/[slug]/page.tsx` la usa tanto en la hero como en
`openGraph.images` y `twitter.images`; después de vencer, navegadores y crawlers reciben
un recurso no disponible. (sources: `lib/notion.ts`, `app/blog/[slug]/page.tsx`)

## Affected code

| File | Role |
|---|---|
| `lib/notion.ts` | Normaliza la URL temporal de portada desde Notion. |
| `app/blog/[slug]/page.tsx` | Inserta esa URL en la hero y los metadatos sociales. |

## Impact

La imagen del artículo falla de forma intermitente. Los crawlers de Slack pueden guardar
la URL temporal vencida o solicitarla después de su vencimiento, por lo que el preview
queda roto incluso si una recarga posterior genera una URL nueva.

## Reproduction path

La consulta a la página de producción confirmó que contiene un `og:image` en un host
firmado de Notion/AWS. Una solicitud sin exponer esa URL en los logs devolvió HTTP 400.

No hay runner de tests configurado en `package.json`, por lo que no es posible agregar
una prueba automatizada que falle antes del fix dentro de la infraestructura actual. La
reproducción se conserva como una verificación HTTP de producción y deberá repetirse
contra la URL estable que introduzca la corrección.

## Security validation availability

Las herramientas `snyk_code_scan` y `snyk_sca_scan` no están disponibles en esta sesión.
Tampoco existe `run-sonar.sh` en el repositorio. No se considerarán aprobadas sin una
configuración posterior.

## Validation

- `pnpm build` aprobado.
- La página local del artículo responde 200.
- La hero y `og:image` apuntan a `/blog/{slug}/cover-image`.
- La ruta de portada responde 200, conserva el tipo de contenido de la imagen y aplica
  una caché compartida de cinco minutos.
- `pnpm lint` no pudo ejecutarse porque el binario `eslint` no está disponible; no hay
  runner de pruebas configurado para ejecutar una reproducción automatizada.

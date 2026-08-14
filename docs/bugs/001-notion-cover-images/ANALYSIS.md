# Analysis — Portadas de Notion intermitentes

## Root cause

`getBlogPosts` expone `page.cover.file.url` directamente como `coverImage`. Es una URL
firmada y temporal de Notion. `app/blog/[slug]/page.tsx` la usa tanto en la hero como en
`openGraph.images` y `twitter.images`; después de vencer, navegadores y crawlers reciben
un recurso no disponible. (sources: `lib/notion.ts`, `app/blog/[slug]/page.tsx`)

El listado espera `getBlogPosts()` en el componente de página. Como `loading.tsx` es el
fallback de todo el segmento `/blog`, reemplaza la página completa durante esa espera.
En los artículos, `generateMetadata` y la página llaman a `getPostBySlug`, que además de
resolver el post descarga todos sus bloques recursivamente antes de poder enviar el
contenido. (sources: `app/blog/loading.tsx`, `app/blog/page.tsx`,
`app/blog/[slug]/page.tsx`, `lib/notion.ts`)

## Affected code

| File | Role |
|---|---|
| `lib/notion.ts` | Normaliza la URL temporal de portada desde Notion. |
| `app/blog/[slug]/page.tsx` | Inserta esa URL en la hero y los metadatos sociales. |
| `app/blog/loading.tsx` | Reemplaza la ruta completa durante el fetch inicial. |
| `app/blog/page.tsx` | Espera el listado de Notion antes de renderizar el shell. |

## Impact

La imagen del artículo falla de forma intermitente. Los crawlers de Slack pueden guardar
la URL temporal vencida o solicitarla después de su vencimiento, por lo que el preview
queda roto incluso si una recarga posterior genera una URL nueva.

La espera de Notion retrasa la navegación visible al blog y a los artículos, aunque su
estructura (navegación, encabezado y texto introductorio) no depende de los bloques.

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
- El listado responde 200 con su encabezado y enlaces de artículo; el artículo responde
  200 con título y portada estable tras separar los bloques en un límite `Suspense`.
- Los resúmenes del blog se cachean cinco minutos sin incluir URLs firmadas de Notion.
- `pnpm test` falla porque no existe el script `test`; `pnpm lint` no pudo ejecutarse
  porque el binario `eslint` no está disponible. No hay runner de pruebas configurado
  para ejecutar una reproducción automatizada.

# Implementation Plan — Migración del blog a Zenblog con prueba de Mermaid

## Branch / worktree

Branch name: `feat/002-zenblog-mermaid-poc`
Isolation mode: current checkout branch

## Phases

### Phase A — Fuente de datos Zenblog

- [x] Agregar `ZENBLOG_BLOG_ID` a `.env.local` y reemplazar `lib/notion.ts` por un cliente Zenblog tipado en `lib/zenblog.ts`.
- [x] Sustituir la dependencia de Notion por `zenblog` y `mermaid` en `package.json` y `pnpm-lock.yaml`.
- [x] Adaptar la lista y el detalle de `app/blog/` a la proyección de Zenblog, preservando metadatos, estados y rutas.

### Phase B — HTML y Mermaid

- [x] Reemplazar el renderer de bloques de Notion por un componente de HTML de Zenblog con una isla cliente acotada para Mermaid.
- [x] Transformar Mermaid en SVG y las tablas Markdown en HTML responsivo mediante directivas `@render`; conservar código ante un error de parseo.
- [x] Adaptar la tabla de contenidos para encabezados provenientes del HTML y agregar estilos responsivos para HTML editorial y diagramas.

### Phase C — Documentación y validación

- [x] Actualizar README y documentación de arquitectura/funcional para reflejar Zenblog y la POC Mermaid; eliminar módulos específicos de Notion que ya no tengan uso.
- [x] Ejecutar `pnpm lint` y `pnpm build`; verificar manualmente `/`, `/blog`, un artículo Zenblog con Mermaid, tabla y navegación móvil en anchos desktop y móvil.
- [x] Registrar resultados, limitaciones y pasos de prueba en `docs/prds/002-zenblog-mermaid-poc/TESTING.md`.

## Test plan

- **Integración:** con `ZENBLOG_BLOG_ID` configurado, `/blog` lista las publicaciones y `/blog/[slug]` presenta el post correspondiente; un slug inexistente responde con la página 404.
- **Mermaid:** el artículo de prueba reemplaza un bloque `language-mermaid` válido por SVG; una sintaxis inválida conserva código legible y el artículo sigue utilizable.
- **Estados:** sin ID configurado, con una lista vacía y ante error remoto, el índice muestra mensajes intencionales.
- **Manual y accesibilidad:** comprobar encabezados del índice, foco/teclado y ausencia de desborde horizontal en móvil y desktop.
- **Automatizado:** ejecutar `pnpm lint` y `pnpm build`.

## Rollback notes

Revertir el commit de la feature restaura el cliente Notion, su renderer y las dependencias anteriores. El ID de Zenblog reside sólo en `.env.local`, que no se versiona.

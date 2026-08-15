# Guía de pruebas — Migración del blog a Zenblog con prueba de Mermaid

## Estado de validación

- `next build`: aprobado, incluyendo compilación TypeScript y generación de las rutas del blog.
- ESLint directo: aprobado sin errores; persiste un warning preexistente en `components/hero.tsx` por el import `Link` sin uso.
- `/blog`: responde HTTP 200 con el ID de Zenblog configurado y muestra las publicaciones publicadas.
- Verificación visual local: el post publicado procesa 3 diagramas Mermaid como SVG y 1 bloque `@render table` como tabla HTML; no quedan directivas visibles ni se detectan errores de consola u overlay de Next.js.
- Móvil (390 px): la tabla y los diagramas se muestran sin desborde horizontal de página.
- Paridad editorial: los encabezados `h2` del HTML de Zenblog coinciden con producción (36 px, interlineado de 40 px, 48 px de margen superior y 16 px inferior).
- Tabla: encabezado monoespaciado, filas alternadas y contenedor con borde suave; en móvil conserva el ancho legible y se desplaza dentro de su propio contenedor.
- No hay herramientas disponibles para los escaneos Snyk ni existe `run-sonar.sh`; no se informan como aprobados.

## Cómo probar

1. Confirmá que el post de prueba de Zenblog esté publicado y que los bloques usen `@render mermaid` o `@render table` en su primera línea.
2. Ejecutá `pnpm dev` y abrí `http://localhost:3000/blog`.
3. Abrí el artículo de prueba. Deben verse título, fecha, extracto, portada si existe y el contenido HTML del post.
4. Confirmá que los bloques Mermaid se convirtieron a SVG y que la tabla Markdown se convirtió en una tabla dentro de un panel neutro, sin desborde horizontal en desktop y móvil.
5. Cambiá temporalmente la sintaxis Mermaid por una inválida y recargá: el artículo debe seguir visible y el bloque debe conservarse como código legible.
6. Revisá el índice del artículo en desktop y móvil; sus enlaces deben llevar a los encabezados correctos.
7. Probá un slug inexistente para confirmar la página 404 y quitá temporalmente `ZENBLOG_BLOG_ID` para confirmar el estado de integración no disponible en `/blog`.

## Limitaciones

- Mermaid procesa tanto bloques `language-mermaid` como bloques que comienzan con `@render mermaid`.
- Las tablas Markdown deben comenzar con `@render table`; una tabla inválida permanece como código legible.

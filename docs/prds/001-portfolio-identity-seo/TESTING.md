# Guía de pruebas — Identidad visual y SEO del portfolio

## Estado de validación

- Validación de usuario: aprobada.
- `pnpm build`: aprobado.
- `pnpm lint`: no se pudo ejecutar. El comando falla porque `eslint` no está disponible
  en el proyecto (`'eslint' is not recognized as an internal or external command`).
- Rutas locales verificadas con respuesta 200: `/`, `/blog`, `/icon.svg`,
  `/manifest.webmanifest`, `/robots.txt` y `/sitemap.xml`.
- HTML de la home verificado: incluye canonical, JSON-LD, la marca y el control con
  etiqueta `Abrir menú`.
- Verificación visual automatizada: pendiente. El ejecutable requerido `agent-browser`
  no está instalado en este entorno.

## Cómo probar

1. Ejecutá `pnpm dev` y abrí `http://localhost:3000`.
2. Verificá que el monograma “JR” aparece en el encabezado y que el enlace conserva el
   texto “Javier Rodriguez”.
3. Reducí la ventana a ancho móvil, abrí el menú y verificá sus enlaces y el foco de
   teclado.
4. Abrí una nueva pestaña del sitio y comprobá que el ícono de la pestaña muestra el
   monograma oscuro con subrayado naranja.
5. Visitá `/manifest.webmanifest`, `/robots.txt` y `/sitemap.xml`; deberían responder
   sin errores y referenciar `https://javo.com.ar`.
6. Inspeccioná el `<head>` de `/` y `/blog`: debe incluir canonical, Open Graph,
   Twitter/X y el script JSON-LD de Javier Rodriguez.
7. Si el entorno tiene Notion configurado, abrí una entrada del blog y verificá que su
   título, descripción y portada siguen prevaleciendo en los metadatos del artículo.

## Seguridad y limitaciones

Los escaneos `snyk_trust`, `snyk_code_scan` y `snyk_sca_scan` no están disponibles como
herramientas en esta sesión. Tampoco existe `run-sonar.sh`, por lo que SonarQube no pudo
ejecutarse. No se informan como aprobados. La única dependencia de runtime tocada fue
ninguna; el cambio incorpora componentes y rutas locales.

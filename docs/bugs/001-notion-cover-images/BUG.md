# Bug — Portadas de Notion intermitentes

## Status

Fixed

## Description

Las imágenes hero de los artículos pueden dejar de cargar hasta recargar la página. Al
compartir un artículo en Slack, la tarjeta muestra el ícono de imagen rota aunque el
título y la descripción se renderizan correctamente.

## Steps to reproduce

1. Abrir o compartir `/blog/ways-del-agente-suelto-al-proceso-compartido` después de
   que la URL de portada servida por Notion haya vencido.
2. Observar la imagen de portada o la preview Open Graph.
3. Recargar la página para obtener una nueva URL temporal de Notion.

## Expected behavior

La portada de cada artículo y su preview social deben usar una URL estable del sitio y
cargar sin depender de que un consumidor externo conserve una URL firmada de Notion.

## Actual behavior

El HTML publicado referencia directamente una URL firmada de Notion en `og:image` y en
la hero. La URL expirada responde 400; Slack muestra una imagen rota. La captura
aportada muestra ese resultado.

## Context

- Environment: producción y Slack.
- Affected route: `/blog/ways-del-agente-suelto-al-proceso-compartido`.
- Affected users: visitantes y personas que reciben enlaces compartidos.
- Severity: Medium — afecta el contenido principal y la presentación pública, sin riesgo
  de integridad de datos.

## Logs / stack trace

- La página pública respondió 200 y declaró `og:image`.
- La URL declarada pertenece a un host firmado de Notion/AWS y su solicitud HTTP devolvió
  400. No se registró ni almacenó la URL firmada.
- Tras el fix, la hero y `og:image` apuntan a la ruta interna estable y la respuesta
  local de portada devuelve 200 con `Content-Type: image/png`.

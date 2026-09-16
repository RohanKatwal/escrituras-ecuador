# Cordero Services SAS — Escrituras (React + Vite)

Landing page independiente en React, lista para usar con npm.

## Uso

```bash
npm install
npm run dev      # servidor local: http://localhost:5173
npm run build    # genera la carpeta dist/ para publicar
npm run preview  # revisa la versión de producción
```

## Estructura

- `index.html` — metadatos SEO, fuente Inter y datos estructurados (JSON-LD: negocio + FAQ).
- `src/App.jsx` — la página completa (portada, servicios, respaldo, preguntas frecuentes, contacto).
- `src/components/` — cabecera, pie de página y botón flotante de WhatsApp.
- `src/lib/contact.js` — teléfono y enlace de WhatsApp (099 489 6810).
- `src/lib/seo.js` — dominio canónico (`SITE_URL`) usado como referencia para el SEO del sitio.
- `src/styles.css` — colores (negro + naranja #f19200) y tipografía.
- `public/robots.txt`, `public/sitemap.xml`, `public/og-image.jpg` — archivos SEO servidos en la raíz del dominio.

Para publicar, sube el contenido de `dist/` a tu hosting o dominio.

## SEO — Ecuador

El sitio está optimizado para búsquedas en Ecuador (idioma `es-EC`, `og:locale es_EC`, `areaServed: Ecuador`):

- **Dos dominios (`escriturasecuador.com` y `corderoservices.com`).** El sitio usa `https://escriturasecuador.com` como dominio canónico (ver `canonical`, `og:url`, `robots.txt` y `sitemap.xml`). **Es importante configurar `corderoservices.com` como una redirección 301 hacia `escriturasecuador.com`** a nivel de DNS/hosting (no en el código). Si ambos dominios sirven el mismo contenido sin redirección, Google los trata como contenido duplicado y reparte la autoridad de enlaces entre los dos, perjudicando el posicionamiento de ambos. Si en algún momento se decide usar `corderoservices.com` como dominio principal en su lugar, basta con actualizar `SITE_URL` en `src/lib/seo.js` y las URLs equivalentes en `index.html`, `public/robots.txt` y `public/sitemap.xml`.
- **Metadatos:** título, descripción, `keywords`, `canonical`, Open Graph y Twitter Card con imagen de vista previa (`public/og-image.jpg`, 1200×630) para que los enlaces compartidos por WhatsApp/Facebook se vean bien.
- **Datos estructurados (JSON-LD):** `ProfessionalService` (negocio, teléfono, área de servicio Ecuador) y `FAQPage` — el contenido de las preguntas frecuentes también es visible en la sección "Preguntas frecuentes" de la página, como lo requiere Google para mostrar resultados enriquecidos.
- **`robots.txt` y `sitemap.xml`** en `public/`, apuntando al dominio canónico.
- **Próximos pasos recomendados:**
  1. Configurar la redirección 301 de `corderoservices.com` → `escriturasecuador.com`.
  2. Verificar ambos dominios en [Google Search Console](https://search.google.com/search-console) y enviar `sitemap.xml`.
  3. Crear/vincular un perfil de **Google Business Profile** con la dirección real o el área de cobertura, para aparecer en el "mapa" de búsquedas locales en Ecuador.
# escrituras-ecuador

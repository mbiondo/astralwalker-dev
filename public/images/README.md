# Guía de Imágenes SEO para INDIGO PRODUXION

## Imágenes Requeridas

Para completar la implementación SEO, necesitas crear las siguientes imágenes:

### 1. Open Graph Image (`/public/images/og-image.jpg`)
- **Dimensiones**: 1200x630 px
- **Formato**: JPG o PNG
- **Contenido sugerido**: Logo de INDIGO PRODUXION + texto "Estudio de Producción Musical Profesional" + imagen del estudio
- **Peso máximo**: 1MB

### 2. Twitter Card Image (`/public/images/twitter-image.jpg`)
- **Dimensiones**: 1200x600 px
- **Formato**: JPG o PNG
- **Contenido sugerido**: Similar al Open Graph pero optimizado para Twitter
- **Peso máximo**: 1MB

### 3. Favicon y App Icons
- **favicon.ico**: 32x32 px (ya existe en tu proyecto)
- **apple-touch-icon.png**: 180x180 px
- **icon-192.png**: 192x192 px
- **icon-512.png**: 512x512 px

### 4. Imágenes adicionales recomendadas
- **studio-hero.jpg**: Imagen principal del estudio (1920x1080 px)
- **team-photo.jpg**: Foto del equipo (1200x800 px)
- **equipment-showcase.jpg**: Equipos del estudio (1200x800 px)

## Herramientas recomendadas para crear las imágenes:

1. **Canva**: Templates gratuitos para Open Graph y Twitter Cards
2. **Figma**: Diseño profesional con plantillas
3. **Photoshop**: Máximo control creativo
4. **GIMP**: Alternativa gratuita a Photoshop

## Consejos de diseño:

- Usa colores consistentes con tu marca (índigo/púrpura)
- Incluye siempre el logo de INDIGO PRODUXION
- Mantén el texto legible en tamaños pequeños
- Usa imágenes de alta calidad del estudio
- Evita texto muy pequeño que no se lea en redes sociales

## Una vez que tengas las imágenes:

1. Súbelas a `/public/images/`
2. Actualiza las rutas en `/src/lib/seo.ts` si es necesario
3. Prueba con herramientas como:
   - Facebook Sharing Debugger
   - Twitter Card Validator
   - Google Rich Results Test
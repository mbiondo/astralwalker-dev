# Indigoprod Website

Un sitio web moderno para el estudio de producción musical INDIGO PRODUXION, construido con Next.js 15, TypeScript y Tailwind CSS.

## 🚀 Tecnologías

- **Next.js 15** - Framework de React con App Router
- **TypeScript** - Tipado estático para mejor desarrollo
- **Tailwind CSS 4** - Framework de CSS utilitario
- **Lucide React** - Iconos modernos
- **Shadcn/ui** - Componentes de UI reutilizables

## 🎯 Características

- ✅ Diseño responsive y moderno
- ✅ Componentes modulares y reutilizables
- ✅ Tipado con TypeScript
- ✅ Optimización de imágenes con Next.js Image
- ✅ Gradientes y animaciones suaves
- ✅ SEO optimizado
- ✅ Rendimiento optimizado

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Navigation.tsx      # Barra de navegación
│   ├── HeroSection.tsx     # Sección hero
│   ├── ServicesSection.tsx # Sección de servicios
│   ├── PortfolioSection.tsx# Sección de portfolio
│   ├── CTASection.tsx      # Call to action
│   ├── Footer.tsx          # Pie de página
│   └── ui/                 # Componentes UI base
└── lib/
    └── utils.ts            # Utilidades
```

## 🛠️ Instalación y Desarrollo

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd indigoprod-website
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📜 Scripts disponibles

```bash
npm run dev     # Servidor de desarrollo
npm run build   # Construir para producción
npm start       # Servidor de producción
npm run lint    # Linter ESLint
```

## 🎨 Componentes

### Navigation
Barra de navegación fija con logo y enlaces a secciones.

### HeroSection
Sección principal con call-to-action y imagen destacada.

### ServicesSection
Grid de servicios de producción musical.

### PortfolioSection
Galería de proyectos recientes con efectos hover.

### CTASection
Sección de llamada a la acción.

### Footer
Pie de página con información de contacto y enlaces.

## 🖼️ Imágenes

Las imágenes utilizan Unsplash como fuente para placeholders de alta calidad. Están configuradas en `next.config.ts` para optimización automática.

## 🎯 Próximas mejoras

- [x] Implementar modo oscuro ✅
- [x] Agregar internacionalización (Español/Inglés) ✅
- [ ] Implementar formulario de contacto funcional
- [ ] Agregar animaciones más elaboradas
- [ ] Integrar CMS para contenido dinámico
- [ ] Agregar más páginas (servicios, sobre nosotros, etc.)

## 🌟 Nuevas Características

### 🎨 **Sistema de Temas (Dark/Light Mode)**
- Toggle automático entre modo oscuro y claro
- Implementado con `next-themes` siguiendo mejores prácticas de Next.js
- Persistencia del tema seleccionado
- Transiciones suaves entre temas
- Iconos intuitivos (Sol/Luna) en la navegación

### 🌍 **Internacionalización (i18n)**
- Soporte completo para Español (es) e Inglés (en)
- Detección automática del idioma del navegador
- URLs SEO-friendly: `/es/` y `/en/`
- Switch de idioma en tiempo real
- Más de 50 traducciones profesionales

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

**INDIGO PRODUXION** - Transformando ideas musicales en experiencias inolvidables.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

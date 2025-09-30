import React from 'react';

interface SEOSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  'aria-labelledby'?: string;
  role?: string;
}

/**
 * Componente wrapper que optimiza las secciones para SEO
 * Proporciona estructura semántica y accesibilidad
 */
export function SEOSection({ 
  children, 
  className = '', 
  id,
  'aria-labelledby': ariaLabelledby,
  role = 'region'
}: SEOSectionProps) {
  return (
    <section 
      className={className}
      id={id}
      aria-labelledby={ariaLabelledby}
      role={role}
    >
      {children}
    </section>
  );
}

interface SEOHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Componente para encabezados optimizados para SEO
 * Asegura la jerarquía correcta de encabezados
 */
export function SEOHeading({ 
  level, 
  children, 
  className = '',
  id 
}: SEOHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className={className} id={id}>
      {children}
    </Tag>
  );
}

interface SEOListProps {
  items: string[];
  className?: string;
  ordered?: boolean;
}

/**
 * Componente para listas optimizadas para SEO
 * Mejora la estructura y comprensión del contenido
 */
export function SEOList({ 
  items, 
  className = '',
  ordered = false 
}: SEOListProps) {
  const ListTag = ordered ? 'ol' : 'ul';
  
  return (
    <ListTag className={className}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListTag>
  );
}

interface SEOArticleProps {
  children: React.ReactNode;
  className?: string;
  itemScope?: boolean;
  itemType?: string;
}

/**
 * Componente article con microdata para SEO
 */
export function SEOArticle({ 
  children, 
  className = '',
  itemScope = true,
  itemType = "https://schema.org/Article"
}: SEOArticleProps) {
  return (
    <article 
      className={className}
      itemScope={itemScope}
      itemType={itemType}
    >
      {children}
    </article>
  );
}

interface SEOImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

/**
 * Wrapper para imágenes optimizadas para SEO
 * Asegura alt text apropiado y lazy loading
 */
export function SEOImage({ 
  src, 
  alt, 
  title,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false
}: SEOImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      decoding="async"
    />
  );
}
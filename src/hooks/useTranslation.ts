'use client';

import { useParams } from 'next/navigation';
import esTranslations from '@/locales/es.json';
import enTranslations from '@/locales/en.json';

type Locale = 'es' | 'en';
type TranslationValue = string | Record<string, unknown>;

const translations = {
  es: esTranslations,
  en: enTranslations,
};

export function useTranslation() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'es';

  const t = (key: string): string => {
    try {
      const keys = key.split('.');
      let value: TranslationValue = translations[locale];
      
      for (const k of keys) {
        if (typeof value === 'object' && value !== null && k in value) {
          value = (value as Record<string, TranslationValue>)[k];
        } else {
          return key;
        }
      }
      
      return typeof value === 'string' ? value : key;
    } catch (error) {
      console.warn(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  return { t, locale };
}
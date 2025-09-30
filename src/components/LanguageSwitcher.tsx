'use client';

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useRouter, usePathname } from "next/navigation";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const { locale } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    // Remove current locale from pathname and add new locale
    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace locale segment
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={switchLanguage}
      className="hidden md:flex items-center gap-2 border-muted-foreground/20 hover:bg-muted/50"
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm font-medium">
        {locale === 'es' ? 'EN' : 'ES'}
      </span>
    </Button>
  );
}
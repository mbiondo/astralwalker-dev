import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://indigoprod.com'), // Cambia por tu dominio real
  title: {
    default: "INDIGO PRODUXION - Estudio de Producción Musical Profesional",
    template: "%s | INDIGO PRODUXION"
  },
  description: "Estudio profesional de producción musical en [Ciudad]. Servicios de grabación, mezcla, masterización y producción musical. Equipos de alta gama y productores experimentados.",
  keywords: [
    "estudio de grabación",
    "producción musical",
    "mezcla y masterización",
    "grabación profesional",
    "estudio musical",
    "productor musical",
    "audio profesional",
    "música"
  ],
  authors: [{ name: "INDIGO PRODUXION" }],
  creator: "INDIGO PRODUXION",
  publisher: "INDIGO PRODUXION",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://indigoprod.com",
    siteName: "INDIGO PRODUXION",
    title: "INDIGO PRODUXION - Estudio de Producción Musical Profesional",
    description: "Estudio profesional de producción musical. Servicios de grabación, mezcla, masterización y producción musical con equipos de alta gama.",
    images: [
      {
        url: "/images/og-image.jpg", // Necesitarás crear esta imagen
        width: 1200,
        height: 630,
        alt: "INDIGO PRODUXION - Estudio de Producción Musical",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INDIGO PRODUXION - Estudio de Producción Musical",
    description: "Estudio profesional de producción musical. Grabación, mezcla y masterización.",
    images: ["/images/twitter-image.jpg"], // Necesitarás crear esta imagen
    creator: "@indigoprod", // Cambia por tu handle real
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: "Next.js",
  category: "Music Production",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}

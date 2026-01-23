import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Miguel Gonçalves | Desenvolvedor Full Stack",
  description:
    "Portfólio de Miguel Gonçalves - Desenvolvedor Full Stack especializado em React, Next.js e soluções web modernas. Conheça meus projetos e entre em contato.",
  keywords: [
    "Miguel Gonçalves",
    "desenvolvedor",
    "full stack",
    "React",
    "Next.js",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "Miguel Gonçalves" }],
  creator: "Miguel Gonçalves",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://seudominio.com",
    siteName: "Miguel Gonçalves Portfolio",
    title: "Miguel Gonçalves | Desenvolvedor Full Stack",
    description:
      "Portfólio de Miguel Gonçalves - Desenvolvedor Full Stack especializado em React, Next.js e soluções web modernas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Miguel Gonçalves Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Gonçalves | Desenvolvedor Full Stack",
    description: "Portfólio de Miguel Gonçalves - Desenvolvedor Full Stack",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@4/dist/flowbite.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

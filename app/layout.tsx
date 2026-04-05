import type { Metadata, Viewport } from "next";
import { DM_Sans, Inconsolata } from "next/font/google";
// @ts-expect-error CSS import is resolved by Next.js at build time.
import "./styles/globals.css";
import { getSiteUrl } from "./lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = getSiteUrl();
const siteTitle = "Miguel Gonçalves | Full Stack Developer";
const siteDescription =
  "Professional portfolio of Miguel Gonçalves — full stack developer building React, Next.js, and modern web products. Projects, services, and contact.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteTitle,
    template: "%s | Miguel Gonçalves",
  },
  description: siteDescription,
  applicationName: "Miguel Gonçalves Portfolio",
  keywords: [
    "Miguel Gonçalves",
    "full stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "web developer",
    "portfolio",
    "desenvolvedor",
    "FastAPI",
    "MongoDB",
  ],
  authors: [{ name: "Miguel Gonçalves", url: siteUrl.href }],
  creator: "Miguel Gonçalves",
  publisher: "Miguel Gonçalves",
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "pt-PT": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: siteUrl.href,
    siteName: "Miguel Gonçalves",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Miguel Gonçalves — portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#16181d" },
    { media: "(prefers-color-scheme: light)", color: "#16181d" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${dmSans.variable} ${inconsolata.variable}`}>
      <head>
        {/* Material Symbols variable font — requires Google stylesheet for icon ligatures */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- icon font; next/font does not cover Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}

import { getSiteUrl } from "../lib/site";

const sameAs = [
  "https://www.linkedin.com/in/miguel-prg/?locale=en_US",
  "https://github.com/miguelPRG",
  "https://www.instagram.com/miguel_prg_oficial/",
] as const;

export default function JsonLd() {
  const url = getSiteUrl().href.replace(/\/$/, "");

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Miguel Gonçalves",
    jobTitle: "Full Stack Developer",
    url,
    sameAs: [...sameAs],
    knowsAbout: [
      "React",
      "Next.js",
      "FastAPI",
      "MongoDB",
      "Web development",
      "API design",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Miguel Gonçalves — Portfolio",
    url,
    description:
      "Portfólio profissional de Miguel Gonçalves: desenvolvimento full stack com React, Next.js e soluções web modernas.",
    inLanguage: "pt-PT",
    author: { "@type": "Person", name: "Miguel Gonçalves", url },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

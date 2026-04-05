import { ReactNode } from "react";

export default function Social({
  social,
  name,
  href,
}: {
  social: ReactNode;
  name: string;
  href: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="mb-5 flex cursor-pointer flex-row gap-5 rounded-lg border border-gray-400/60 bg-gray-400 p-5 font-sans font-medium transition hover:border-gray-300 hover:bg-gray-300 hover:shadow-lg"
    >
      {social}
      {name}
      <span className="material-symbols-outlined ml-auto transition-transform hover:translate-x-1">
        arrow_outward
      </span>
    </a>
  );
}

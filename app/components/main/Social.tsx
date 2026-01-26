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
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="bg-gray-400 p-5 rounded-lg border-black flex flex-row gap-5 mb-5 cursor-pointer transition hover:bg-gray-300 hover:shadow-lg"
    >
      {social}
      {name}
      <span className="material-symbols-outlined ml-auto transition-transform hover:translate-x-1">
        arrow_outward
      </span>
    </a>
  );
}

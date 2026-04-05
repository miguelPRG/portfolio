const navLinks = [
  { href: "#bio", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

export default function SiteNav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-[color-mix(in_oklab,var(--color-gray-400)_70%,transparent)] bg-[color-mix(in_oklab,var(--color-gray-500)_85%,transparent)] backdrop-blur-md supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--color-gray-500)_75%,transparent)]"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#bio"
          className="font-sans text-sm font-semibold tracking-tight text-gray-100 transition hover:text-red"
        >
          Miguel Gonçalves
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-md px-2 py-1.5 font-sans text-xs font-medium text-gray-200 transition hover:bg-gray-400/40 hover:text-white sm:text-sm"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

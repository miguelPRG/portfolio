export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-400/40 bg-black/60">
      <div className="section-container flex flex-col items-center gap-6 py-10 text-center text-sm text-gray-300 sm:flex-row sm:justify-between sm:text-left">
        <p className="font-sans">
          © {year} Miguel Gonçalves. All rights reserved.
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans text-gray-200">
            <li>
              <a href="#projects" className="transition hover:text-red">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="transition hover:text-red">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-red">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

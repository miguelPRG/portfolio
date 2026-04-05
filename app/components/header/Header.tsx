// @ts-expect-error Side-effect CSS import is handled by the bundler
import "../../styles/Header.css";
import image from "../../images/foto.png";
import Photo from "./Photo";

export default function Header() {
  return (
    <header className="header-hero">
      <div className="section-container flex flex-col items-center gap-12 pb-16 pt-8 sm:pb-24">
        <div
          id="bio"
          className="flex max-w-2xl flex-col items-center text-center text-gray-100"
        >
          <Photo image={image} />
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-gray-300">
            Portfolio
          </p>
          <p className="mb-2 font-sans text-lg text-gray-200 sm:text-xl">
            Hi — I&apos;m{" "}
            <span className="font-semibold text-red">Miguel Gonçalves</span>,
          </p>
          <h1 className="mb-6 text-balance">
            Full stack developer building reliable web products
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-gray-300 sm:text-lg">
            I turn ideas into clear, maintainable software — from interfaces to
            APIs and infrastructure. Comfortable across the stack; hover the
            photo to see technologies I use most.
          </p>
        </div>
        <a
          href="#projects"
          className="cursor-pointer rounded-full p-2 text-gray-300 transition hover:text-white hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
          aria-label="Scroll to projects"
        >
          <svg
            className="h-12 w-12"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m8 7 4 4 4-4m-8 6 4 4 4-4"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}

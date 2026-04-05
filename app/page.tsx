import Footer from "./components/Footer";
import Header from "./components/header/Header";
import JsonLd from "./components/JsonLd";
import Main from "./components/main/Main";
import SiteNav from "./components/SiteNav";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-red focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:font-semibold focus:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-100"
      >
        Skip to main content
      </a>
      <JsonLd />
      <SiteNav />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

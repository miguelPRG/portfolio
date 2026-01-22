import "./Header.css";
import Image from "next/image";
import TechnologyCard from "./TechnologyCard";

export default function Header() {
  return (
    <header>
      <div className="flex flex-col items-center gap-20">
        <div
          id="bio"
          className="mt-30 flex flex-col items-center w-full sm:w-3/4 md:w-1/2 text-white text-justify-center"
        >
          <Image
            src="/profile-picture.png"
            alt="Foto de perfil de Miguel Gonçalves"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-lg mb-15"
          />
          <p className="mb-5">
            Hello World! My name is Miguel Gonçalves and I am
          </p>
          <h1 className="mb-5 text-center">Full Stack Developer</h1>
          <p className="text-gray-300">
            I transform ideas into high-quality, intuitive, and easy-to-use
            software. I have the ability to adapt to any development technology
            with considerable ease.
          </p>
        </div>
        <div id="social-media" className="flex flex-row gap-5 p-10 flex-wrap justify-center">
          <TechnologyCard technology="github" />
          <TechnologyCard technology="html" />
          <TechnologyCard technology="css" />
          <TechnologyCard technology="javascript" />
          <TechnologyCard technology="react" />
          <TechnologyCard technology="mongoDB" />
        </div>
      </div>
    </header>
  );
}

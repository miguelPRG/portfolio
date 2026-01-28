import "../../styles/Header.css";
import image from "../../images/foto.png";
import Photo from "./Photo";

export default function Header() {
  return (
    <header>
      <div className="flex flex-col items-center gap-10">
        <div
          id="bio"
          className="mt-30 flex flex-col items-center w-1/2 text-white text-justify-center"
        >
          <Photo image={image} />
          <p className="mb-5">
            Hello World! My name is{" "}
            <span className="text-red font-bold">Miguel Gonçalves</span> and I
            am
          </p>
          <h1 className="mb-5 text-center">Full Stack Developer</h1>
          <p className="text-gray-300 w-full max-w-xl">
            I transform ideas into high-quality, intuitive, and easy-to-use
            software. I have the ability to adapt to any development technology
            with considerable ease. Hover over my picture to see my skills!
          </p>
        </div>
        <p className="">
          <svg
            className="w-15 h-15 text-gray-300"
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
        </p>
      </div>
    </header>
  );
}

import Project from "./Project";
import Service from "./Service";
import Social from "./Social";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";

export default function Main() {
  return (
    <main className="text-center">
      <section id="projects">
        <h2 className="text-red mb-3">My Work</h2>
        <h3>Check out my featured projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 p-20 mb-20 max-w-6xl mx-auto">
          <Project
            image={project1}
            title="Best Wines EU"
            para="Interactive Streamlit web app for exploring and analyzing European wine data."
            link="https://github.com/miguelPRG/Best-Wines-EU"
          />
          <Project
            image={project2}
            title="Weather App"
            para="Weather App is a modern web application that displays weather data for your current location and any city you search for."
            link="https://github.com/miguelPRG/WeatherApp"
          />
          {/*<Project
            image={""}
            title="Project Three"
            para="This is a brief description of Project Three."
          />
          <Project
            image={""}
            title="Project Four"
            para="This is a brief description of Project Four."
          />
          <Project
            image={""}
            title="Project Five"
            para="This is a brief description of Project Five."
          />
          <Project
            image={""}
            title="Project Six"
            para="This is a brief description of Project Six."
          />*/}
        </div>
      </section>
      <section id="services" className="bg-black p-5">
        <h2 className="text-red mb-3">My Services</h2>
        <h3 className="mb-15">How can I help your business</h3>
        <div className="flex flex-row p-5 gap-5 flex-wrap justify-center">
          <Service
            svg={
              <span className="material-symbols-outlined text-purple-600">
                web
              </span>
            }
            title="Web Development"
            para="Interfaces Development"
          />
          <Service
            svg={
              <span className="material-symbols-outlined text-amber-400">
                database
              </span>
            }
            title="API and Database"
            para="Creating robust APIs and managing databases."
          />
          <Service
            svg={
              <span className="material-symbols-outlined text-green-500">
                all_inclusive
              </span>
            }
            title="DevOps"
            para="Managing deployment and infrastructures."
          />
        </div>
      </section>
      <section id="contact" className="p-5">
        <h2 className="text-red mb-3">Get in Touch</h2>
        <h3 className="mb-15">I'd love to hear from you</h3>
        <div className="max-w-sm mx-auto">
          <Social
            social={
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            }
            name="LinkedIn"
            href="https://www.linkedin.com/in/miguel-prg/?locale=en_US"
          />
          <Social
            social={
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            name="Instagram"
            href="https://www.instagram.com/miguel_prg_oficial/"
          />
          <Social
            social={
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            name="GitHub"
            href="https://github.com/miguelPRG"
          />
          <Social
            social={<span className="material-symbols-outlined">mail</span>}
            name="Email"
            href="mailto:miguel@psafe365.com"
          />
        </div>
      </section>
    </main>
  );
}

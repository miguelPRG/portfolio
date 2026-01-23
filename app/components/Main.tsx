import ProjectCard from "./Project";
import Service from "./Service";

export default function Main() {
  return (
    <main className="text-center">
      <section className="bg-gray-500">
        <h2 className="text-red mb-3">My Work</h2>
        <h3>Check out my featured projects</h3>
        <div className="grid grid-flow-col grid-rows-6 md:grid-rows-2 gap-4 p-20 ">
          <ProjectCard
            imageUrl="/project1.png"
            title="Project One"
            para="This is a brief description of Project One."
          />
          <ProjectCard
            imageUrl="/project2.png"
            title="Project Two"
            para="This is a brief description of Project Two."
          />
          <ProjectCard
            imageUrl="/project3.png"
            title="Project Three"
            para="This is a brief description of Project Three."
          />
          <ProjectCard
            imageUrl="/project4.png"
            title="Project Four"
            para="This is a brief description of Project Four."
          />
          <ProjectCard
            imageUrl="/project5.png"
            title="Project Five"
            para="This is a brief description of Project Five."
          />
          <ProjectCard
            imageUrl="/project6.png"
            title="Project Six"
            para="This is a brief description of Project Six."
          />
        </div>
      </section>
      <section className="max-w-5xl mx-auto">
        <h2 className="text-red mb-3">My Services</h2>
        <h3>How can I help your business</h3>
        <div className="flex flex-row p-5 gap-5">
          <Service
            svg={<span className="material-symbols-outlined text-purple-600">web</span>}
            title="Web Development"
            para="Interfaces Development"
          />
          <Service
            svg={<span className="material-symbols-outlined text-amber-400">database</span>}
            title="API and Database"
            para="Creating robust APIs and managing databases."
          />
          <Service
            svg={<span className="material-symbols-outlined text-green-500">all_inclusive</span>}
            title="DevOps"
            para="Managing deployment and infrastructures."
          />
        </div>
      </section>
    </main>
  );
}

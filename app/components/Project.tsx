import { div } from "motion/react-client";

export default function ProjectCard({
  imageUrl,
  title,
  para,
}: {
  imageUrl: string;
  title: string;
  para: string;
}) {
  return (
    <div className="bg-gray-400 p-5 rounded-lg">
      <img
        src={imageUrl}
        alt="Project Image"
        className="w-full h-auto rounded-md mb-5"
      />
      <h3 className="mb-3">{title}</h3>
      <p>{para}</p>
    </div>
  );
}

import Image from "next/image";
import { StaticImageData } from "next/image";

export default function Project({
  image,
  title,
  para,
}: {
  image: StaticImageData;
  title: string;
  para: string;
}) {
  return (
    <div className="bg-gray-400 p-3 rounded-lg text-left h-auto">
      <Image
        src={image}
        alt="Project Image"
        className="w-full h-70 rounded-lg mb-5 "
      />
      <h3 className="mb-3">{title}</h3>
      <p>{para}</p>
    </div>
  );
}

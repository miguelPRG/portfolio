import { ReactNode } from "react";

export default function Service({
  svg,
  title,
  para,
}: {
  svg: ReactNode;
  title: string;
  para: string;
}) {
  return (
    <div className=" p-5 rounded-lg text-center">
      <div className="flex justify-center mb-5">{svg}</div>
      <h3 className="mb-3">{title}</h3>
      <p>{para}</p>
    </div>
  );
}

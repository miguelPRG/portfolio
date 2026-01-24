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
    <div className="p-5 rounded-lg text-center border border-gray-700 w-64 flex-shrink-0">
      <div className="flex justify-center mb-5">{svg}</div>
      <h4 className="mb-3">{title}</h4>
      <p>{para}</p>
    </div>
  );
}

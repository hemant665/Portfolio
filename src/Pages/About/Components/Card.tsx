import React from "react";

interface cardProps {
  // Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}

const Card: React.FC<cardProps> = ({title, desc }) => {
  return (
    <div className="bg-white p-2 rounded-xl flex flex-col gap-2">
      <div className="flex items-center gap-2 p-1 text-xl font-semibold">
        <div className="w-[1.1rem]">
          {/* {Icon && <Icon className="text-blue-500"/>} */}
          {/* <img src={Icon} alt={Icon} className="text-blue-600" /> */}
        </div>
        {/* <Icon className="w-full h-auto fill-current text-blue-600"/> */}
      </div>
        <h1 className="font-semibold">{title}</h1>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

export default Card;

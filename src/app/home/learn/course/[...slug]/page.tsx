import React from "react";

type Props = {
  params:{slug:string}
};

export default function page({params}: Props) {
  const { slug } = params;

  const title = `${slug[0]}${slug[1] || ""}`; // Concatenate both for title if second part exists

  return <div>
    <p>
    {title}

    </p>
    <div className="w-full h-[323px] bg-primary-light">

    </div>
  </div>;
}

import React from "react";

type Props = {};

export default function Loader({}: Props) {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-6 w-6 border-4 border-t-white text-white"></div>
      </div>
    </div>
  );
}

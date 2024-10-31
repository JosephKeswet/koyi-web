import React from "react";
import { Input } from "../ui/input";

type Props = {};

export default function SearchComponent({}: Props) {
  return (
    <div>
      <Input className="w-[300px] lg:w-[385px] h-[44px]" />
    </div>
  );
}

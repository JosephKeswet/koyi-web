"use client";
import { routes } from "@/lib/constants";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

type Props = {
  text: string;
  route: string;
  field: string
};

export default function FilterTableItem({ text, route, field }: Props) {
  const pathname = usePathname();
  const params = useParams();
  const slug = params?.slug ? params.slug[0] : "";
  return (
    <div
      // href={route}
      className={`wfull h-fit lg:h[50px] px-2 py-1 flex justify-center items-center gap-[8px] rounded-full border ${
        pathname.includes(route) || slug === field
          ? "bg-primary-light text-primary"
          : "bg-primary-grey text-primary-black"
      }`}
    >
      <span className="text-sm font-normal">{text}</span>
    </div>
  );
}

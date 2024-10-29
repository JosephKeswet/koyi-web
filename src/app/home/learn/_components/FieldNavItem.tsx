"use client";
import { routes } from "@/lib/constants";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

type Props = {
  text: string;
  route: string;
  field: string;
};

export default function FieldNavItem({ text, route, field }: Props) {
  const pathname = usePathname();
  const params = useParams();
  const slug = params?.slug ? params.slug[0] : "";
  return (
    <Link
      href={route}
      className={`w-full h-fit lg:h-[50px] px-2 py-2 flex justify-center items-center gap-[8px] rounded-sm ${
        pathname.includes(route) || slug === field
          ? "bg-primary-light text-primary"
          : "bg-primary-grey text-primary-black"
      }`}
    >
      <span className="text-sm font-normal">{text}</span>
    </Link>
  );
}

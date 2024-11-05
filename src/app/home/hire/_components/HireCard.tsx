"use client";
import { routes } from "@/lib/constants";
import Link from "next/link";
import React from "react";

type Props = {
  title?: string;
  route?: string;
};

export default function HireCard({ title, route }: Props) {
  return (
    <Link
      href=''
      className="w-auto h-[141px] bg-white border"
    >
      <p>{title}</p>
    </Link>
  );
}

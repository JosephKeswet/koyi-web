"use client"
import { routes } from "@/lib/constants";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  route: string;
};

export default function LearnCourseCard({ title,route }: Props) {
  return (
    <Link href={`${routes.learn_course}/${route}/`}  className="w-auto h-[161px] bg-white border">
      <p>{title}</p>
    </Link>
  );
}

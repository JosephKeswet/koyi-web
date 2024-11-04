"use client";
import React from "react";
import { useParams } from "next/navigation";
import CourseInfo from "../_components/CourseInfo";

type Props = {};

export default function Page({}: Props) {
  const params = useParams();

  return (
    <div className="">
      <section className="w-[280px]">
        <CourseInfo />
      </section>
    </div>
  );
}

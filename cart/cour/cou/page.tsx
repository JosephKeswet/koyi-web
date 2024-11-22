import React from "react";
import LearnCourseCard from "../../_components/LearnCourseCard";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import CourseInfo from "../_components/CourseInfo";

type Props = {
  params: { slug: string };
};

export default function page({ params }: Props) {
  const { slug } = params;
  const title = `${slug[0]}${slug[1] || ""}`; // Concatenate both for title if second part exists

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-[38px]">
      <p>{title}</p>
      <div className="col-span-1 lg:col-span-2 h-[323px] bg-primary-light"></div>

      {/* Course info */}
      <section>
        <CourseInfo />
      </section>

      {/* Additional section */}
      <section className="border lg:w-[414px] h-[558px]"></section>

      {/* Students also viewed section */}
      <section className="col-span-1 lg:col-span-2 mt-8">
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-primary-black">
            Students also viewed
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 pt-2">
          <LearnCourseCard />
          <LearnCourseCard />
          <LearnCourseCard />
          <LearnCourseCard />
          <LearnCourseCard />
          <LearnCourseCard />
        </div>
      </section>
    </div>
  );
}

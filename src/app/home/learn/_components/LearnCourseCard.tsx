import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants";
import Link from "next/link";
import React from "react";

type Props = {
  title?: string;
  routeParam?: string;
  duration?: string;
  enrolled?: string;
  imageUrl?: string;
};

export default function LearnCourseCard({ title, routeParam, duration, enrolled, imageUrl }: Props) {
  return (
    <Link
      href={`${routes.learn_course}/${routeParam}`}
      className="bg-white border rounded-lg shadow-sm p-4 flex gap-8"
    >
      <div className="relative h-40 min-w-[200px] bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div>
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg truncate">{title}</h3>
        <p className="text-sm text-gray-500">{duration} • {enrolled} enrolled</p>
      </div>
      <div className="flex justify-between items-center mt-4 gap-2">
        <Button variant="outline" className="text-gray-600 w-full">More info</Button>
        <Button variant="outline" className="bg-blue-500 text-white w-full">Start learning</Button>
      </div>
      </div>
    </Link>
  );
}

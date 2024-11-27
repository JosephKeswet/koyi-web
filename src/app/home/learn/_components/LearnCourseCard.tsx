import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title?: string;
  routeParam?: string;
  duration?: string;
  enrolled?: string;
  imageUrl?: StaticImageData |string;
};

export default function LearnCourseCard({ title, routeParam, duration, enrolled, imageUrl }: Props) {
  return (
    <Link
      href={`${routes.learn_course}/${routeParam}`}
      className="bg-white border rounded-lg shadow-sm p-4 flex gap-4"
    >
      <div className="relative w-1/4 h-auto bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src=''
          alt=''
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          <p className="text-sm text-gray-500">
            {duration} • {enrolled} enrolled
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex sm:justify-start mt-4 gap-2">
          <Button variant="outline" className="text-gray-600 w-full sm:w-auto">
            More info
          </Button>
          <Button
            variant="outline"
            className="bg-blue-500 text-white w-full sm:w-auto"
          >
            Start learning
          </Button>
        </div>
      </div>
    </Link>
  );
}

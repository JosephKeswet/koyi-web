import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title?: string;
  routeParam?: string;
  duration?: string;
  enrolled?: string;
  imageUrl?: string;
};
export default function CourseCard({routeParam}:Props) {
  return (
    <Link href={`${routes.learn_course}/${routeParam}`} className="min-w-[300px] lg:min-w-[350px] bg-white border rounded-lg shadow-md p-4 flex flex-col">
      <div className="relative h-52 w-full bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src="/images/frontend-dev.jpg"
          alt="Front End Development"
          objectFit="cover"
          layout="fill"
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-semibold text-lg mt-4">Front End Development</h3>
      <p className="text-sm text-gray-500 mt-1">6-10 hours • 6,000 enrolled</p>
      <div className="flex justify-between items-center mt-4 gap-2">
        <Button variant="outline" className="text-gray-600 p-2 w-4/5">
          More info
        </Button>
        <Button variant="outline" className="bg-blue-500 text-white p-2 w-full">
          Start learning
        </Button>
      </div>
    </Link>
  );
}

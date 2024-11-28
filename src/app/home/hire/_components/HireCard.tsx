"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  route: string;
  imageUrl: string;
  technologies: string[];
  experience: string;
  projects: number;
  price: string;
  description: string;
};

export default function HireCard({
  title,
  route,
  imageUrl,
  technologies = [],
  experience,
  projects,
  price,
  description,
}: Props) {
  return (
    <Link
      href={route}
      className="flex flexrow items-center bg-white border rounded-lg shadow-md p-2 space-x-4 hover:shadow-lg transition-shadow duration-200 w-full md:max-w-lg"
    >
      <div className="flex-shrink-0 flex-grow w-28 h-full md:w-42 md:h-42 relative">
        <Image
          src={imageUrl}
          alt="Profile"
          width={28}
          height={100}
          className="rounded-md"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow">
        <div className="flex flex-wrap space-x-2 mb-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs md:text-md font-semibold text-gray-700 px-2 py-1 bg-gray-100 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <h2 className="font-bold text-sm md:text-lg text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">
          {description}
        </p>
        <div className="flex items-center text-gray-700 text-xs md:text-sm mt-2">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5A6.5 6.5 0 1110 3.5a6.5 6.5 0 010 13zm1-11H9v6h2V5.5zm-1 8a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </span>
          {experience} ({projects} projects)
        </div>
        <div className="flex gap-1 items-center text-xs justify-end mt-2">
          From <span className="text-base md:text-lg font-bold">{price}</span>
        </div>
      </div>
    </Link>
  );
}

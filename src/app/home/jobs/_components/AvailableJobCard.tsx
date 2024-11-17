"use client";
import { routes } from "@/lib/constants";
import Link from "next/link";
import React from "react";

type Props = {
  title?: string;
  route?: string;
  description?: string;
  budget?: string;
  categories?: string[];
};

export default function AvailableJobCard({ title, route, description, budget, categories }: Props) {
  return (
    <Link
      href={route || "#"}
      className="w-full h-auto bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
    >
      <p className="font-bold text-lg mb-2">{title}</p>
      <div className="flex gap-2 mb-2">
        {categories && categories.map((category, idx) => (
          <span key={idx} className="bg-gray-200 text-sm text-black px-3 py-1 rounded-full font-semibold">
            {category}
          </span>
        ))}
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-gray-500">Budget</span>
        <span className="text-xl font-bold">{budget}</span>
      </div>
    </Link>
  );
}

import { routes } from "@/lib/constants";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import HireCategoryCard from "./_components/HireCategoryCard";

type Props = {};

export default function page({}: Props) {
  return <div className="flex flex-col gap-8">
        {/* Sticky Chevron and Navigation */}
        <div className=" flex items-center justify-between gap-4 md:gap-[32px] ">
        <Link
          href={routes.home}
          className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
        >
          <ChevronLeft />
        </Link>
        
      </div>
      <div className="flex flex-col gap-8">
      <p className="text-xl font-bold">What are you looking for?</p>
      <div className="grid grid-cols-2  md:grid-cols-3 gap-4">
  <HireCategoryCard category="mobile"/>
  <HireCategoryCard category="mobile"/>
  <HireCategoryCard category="mobile"/>
  <HireCategoryCard category="mobile"/>


      </div>
      </div>
  </div>;
}

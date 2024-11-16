'use client';
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Plus } from "lucide-react";
import HireCard from "../../_components/HireCard";
import { routes } from "@/lib/constants";
import RoundedTabs from "@/components/global/RoundedTabs";
import { useParams } from "next/navigation";

export default function BackendCategory() {
  const tabs = [
    { routeKey: "mobile", name: "Mobile" },
    { routeKey: "backend", name: "Backend" },
    { routeKey: "frontend", name: "Frontend" },
    { routeKey: "ui-ux", name: "UI/UX" },
  ];

  const params = useParams();
  const slug = params;

  const hireCardsData = [
    {
      title: "Swift Developer",
      slug: "swift-developer",
      imageUrl: "/images/developer1.jpg",
      technologies: ["Swift", "React Native"],
      experience: "3 years",
      projects: 13,
      price: "₦100,000",
      description: "Build your custom mobile application and upload to all mobile app stores.",
    },
    {
      title: "Flutter Developer",
      route: `/home/hire/categories/backend/${slug}`,
      imageUrl: "/images/developer2.jpg",
      technologies: ["Flutter"],
      experience: "2+ years",
      projects: 7,
      price: "₦100,000",
      description: "Build your custom mobile application and upload to all mobile app stores.",
    },
    {
      title: "Flutter & Angular Developer",
      route: "/hire/categories/flutter-angular",
      imageUrl: "/images/developer3.jpg",
      technologies: ["Flutter", "Angular"],
      experience: "3 years",
      projects: 19,
      price: "₦100,000",
      description: "Build your custom mobile application and upload to all mobile app stores.",
    },
    {
      title: "Swift & React Native Developer",
      route: "/hire/categories/swift-react-native",
      imageUrl: "/images/developer4.jpg",
      technologies: ["Swift", "React Native"],
      experience: "3 years",
      projects: 13,
      price: "₦100,000",
      description: "Build your custom mobile application and upload to all mobile app stores.",
    },
    {
      title: "Flutter Developer",
      route: "/hire/categories/flutter-2",
      imageUrl: "/images/developer5.jpg",
      technologies: ["Flutter"],
      experience: "2+ years",
      projects: 7,
      price: "₦100,000",
      description: "Build your custom mobile application and upload to all mobile app stores.",
    },
    {
      title: "Flutter & Angular Developer",
      route: "/hire/categories/flutter-angular-2",
      imageUrl: "/images/developer6.jpg",
      technologies: ["Flutter", "Angular"],
      experience: "3 years",
      projects: 19,
      price: "₦100,000",
      description: "Build your custom mobile application and upload to all mobile app stores.",
    },
    {
      title: "Swift & React Native Developer",
      route: "/hire/categories/swift-react-native-2",
      imageUrl: "/images/developer7.jpg",
      technologies: ["Swift", "React Native"],
      experience: "3 years",
      projects: 13,
      price: "₦100,000",
      description: "Build your custom mobile application and upload to all mobile app stores.",
    },
    {
      title: "Flutter Developer",
      route: "/hire/categories/flutter-3",
      imageUrl: "/images/developer8.jpg",
      technologies: ["Flutter"],
      experience: "2+ years",
      projects: 7,
      price: "₦100,000",
      description: "Build your custom mobile application and upload to all mobile app stores.",
    },
    {
      title: "Flutter & Angular Developer",
      route: "/hire/categories/flutter-angular-3",
      imageUrl: "/images/developer9.jpg",
      technologies: ["Flutter", "Angular"],
      experience: "3 years",
      projects: 19,
      price: "₦100,000",
      description: "Build your custom mobile application and upload to all mobile app stores.",
    },
  ];
  

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between gap-4 md:gap-[32px]">
        <Link
          href={routes.hire}
          className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
        >
          <ChevronLeft />
        </Link>
        <Button>
          <Plus />
          Post a Job
        </Button>
      </div>
      <div>
        <p className="text-xl font-bold">Backend Developer</p>
        <p className="text-sm font-normal text-primary-darkGrey">
          Hire a backend developer to build server-side functionality, APIs, and databases.
        </p>
      </div>
      <div>
        <RoundedTabs basePath={routes.hire_categories} tabs={tabs} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
      {hireCardsData.map((card, index) => (
        <HireCard 
            key={index} 
            {...card} 
            route={`/home/hire/categories/backend/${card.slug}`}
        />
      ))}
    </div>
    </div>
  );
}

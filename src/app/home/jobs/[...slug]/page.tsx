"use client"
import RoundedTabs from "@/components/global/RoundedTabs";
import { routes } from "@/lib/constants";
import React from "react";
import AvailableJobCard from "../_components/AvailableJobCard";

type Props = {};

const jobListingsData = [
  {
    title: "Food Ordering Website",
    categories: ["Mobile Dev", "Flutter"],
    description: "I'm looking for a full-time senior product designer with 6-8 years of experience in product design.",
    budget: "₦100,000",
  },
  {
    title: "Food Ordering Website",
    categories: ["Mobile Dev", "Flutter"],
    description: "I'm looking for a full-time senior product designer with 6-8 years of experience in product design.",
    budget: "₦100,000",
  },
  {
    title: "Food Ordering Website",
    categories: ["Mobile Dev", "Flutter"],
    description: "I'm looking for a full-time senior product designer with 6-8 years of experience in product design.",
    budget: "₦100,000",
  },
  {
    title: "Food Ordering Website",
    categories: ["Mobile Dev", "Flutter"],
    description: "I'm looking for a full-time senior product designer with 6-8 years of experience in product design.",
    budget: "₦100,000",
  },
  {
    title: "Food Ordering Website",
    categories: ["Mobile Dev", "Flutter"],
    description: "I'm looking for a full-time senior product designer with 6-8 years of experience in product design.",
    budget: "₦100,000",
  },
  {
    title: "Food Ordering Website",
    categories: ["Mobile Dev", "Flutter"],
    description: "I'm looking for a full-time senior product designer with 6-8 years of experience in product design.",
    budget: "₦100,000",
  },
  {
    title: "Food Ordering Website",
    categories: ["Mobile Dev", "Flutter"],
    description: "I'm looking for a full-time senior product designer with 6-8 years of experience in product design.",
    budget: "₦100,000",
  },
];

export default function page({}: Props) {

  const tabs = [
    { routeKey: "mobile", name: "Mobile" },
    { routeKey: "backend", name: "Backend" },
    { routeKey: "frontend", name: "Frontend" },
    { routeKey: "ui-ux", name: "UI/UX" },
  ];
  const basePath = routes.jobs; // Adjust the base path as needed
  return <div className="flex flex-col gap-8">
    <div>
      <p className="text-xl font-bold">Available jobs</p>
      <p className="text-sm font-normal text-primary-darkGrey">Select from jobs posted by our pool of clients</p>
    </div>
    <div>
      <RoundedTabs basePath={basePath} tabs={tabs}/>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {jobListingsData.map((job, index) => (
          <AvailableJobCard 
            key={index} 
            title={job.title} 
            description={job.description} 
            budget={job.budget} 
            categories={job.categories}
          />
        ))}
    </div>
  </div>;
}

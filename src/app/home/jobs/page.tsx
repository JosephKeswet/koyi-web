"use client"
import RoundedTabs from "@/components/global/RoundedTabs";
import { routes } from "@/lib/constants";
import React from "react";

type Props = {};

export default function page({}: Props) {

  const tabs = [
    { routeKey: "mobile", name: "Mobile" },
    { routeKey: "backend", name: "Backend" },
    { routeKey: "frontend", name: "Frontend" },
    { routeKey: "ui-ux", name: "UI/UX" },
  ];
  const basePath = routes.jobs; // Adjust the base path as needed
  return <div>
    <div>
      <p className="text-xl font-bold">Available jobs</p>
      <p className="text-sm font-normal text-primary-darkGrey">Select from jobs posted by our pool of clients</p>
    </div>
    <div>
      <RoundedTabs basePath={basePath} tabs={tabs}/>
    </div>
  </div>;
}

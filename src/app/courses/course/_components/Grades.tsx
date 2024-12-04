import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { routes } from "@/lib/constants"; 

export default function Grades() {
  const gradesData = [
    {
      module: "Module 1 - Getting Started",
      exercises: ["Exercise 1", "Exercise 2"],
      scores: ["9/10", "9/10"],
    },
    {
      module: "Module 2 - Basic Principles",
      exercises: ["Exercise 1", "Exercise 2"],
      scores: ["9/10", "7/10"],
    },
    {
      module: "Module 3 - Basic Principles",
      exercises: ["Exercise 1", "Exercise 2"],
      scores: ["4/7", "8/12"],
    },
    {
      module: "Module 4 - Basic Principles",
      exercises: ["Exercise 1"],
      scores: ["9/9"],
    },
  ];

  const totalScore = "55/68";
  const percentage = "80.88%";

  return (
    <div className="lg:border rounded-lg flex flex-col">
      {/* Header */}
      <div className="flex px-4 py-4 items-center">
        <h1 className="text-2xl font-semibold ml-4">Grades</h1>
      </div>

      {/* Grades Section */}
      <div className="flex flex-col px-4 md:px-[50px] py-3 overflow-auto">
        <div className="flex flex-col space-y-6">
          {gradesData.map((data, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold">{data.module}</h2>
              {data.exercises.map((exercise, i) => (
                <div key={i} className="flex justify-between items-center">
                  <p className="text-gray-700">{exercise}</p>
                  <p className="text-gray-500">{data.scores[i]}</p>
                </div>
              ))}
            </div>
          ))}
          {/* Total Grades */}
          <div className="flex justify-between items-center border-t pt-4 mt-6">
            <h3 className="text-lg font-semibold">Total</h3>
            <p className="text-gray-500">
              {totalScore} - ({percentage})
            </p>
          </div>
		  <div className='lg:px-[60px]'>
          <p className="text-sm italic text-gray-400 mt-2">You earned a certificate</p>
          <Link href="#">
            <span className="text-blue-600 font-bold underline">Download Certificate</span>
          </Link>
		  </div>
        </div>
      </div>
    </div>
  );
}

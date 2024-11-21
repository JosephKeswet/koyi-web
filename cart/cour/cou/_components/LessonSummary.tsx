"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LessonSummary: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(0);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="space-y-6">
      <div className="p-4 border rounded-lg border-gray-300">
        <p className="font-semibold text-gray-800 mb-4">1. Which of these best explain what Angular is?</p>
        <div className="space-y-2">
          {[
            "A. A development platform, built on TypeScript",
            "B. A full-fledged model-view-controller (MVC) framework",
            "C. A development platform, built on TypeScript",
            "D. A full-fledged model-view-controller (MVC) framework",
          ].map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`flex items-center justify-between cursor-pointer p-2 rounded-lg ${
                selectedOption === index ? "bg-blue-50" : "hover:bg-gray-100"
              }`}
            >
              <span className={`text-gray-800 ${selectedOption === index ? "font-medium" : ""}`}>
                {option}
              </span>
              {selectedOption === index && <Check className="text-blue-600 w-5 h-5" />}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border rounded-lg border-gray-300">
        <p className="font-semibold text-gray-800 mb-4">2. Explain the use of Angular</p>
        <Input
          placeholder="Write here"
          className="w-full border-0 border-b border-gray-300 rounded-none focus:ring-0"
        />
      </div>

      <div className="p-4 border rounded-lg border-gray-300">
        <p className="font-semibold text-gray-800 mb-4">
          3. Write a one-page summary of your basic understanding of Angular and give possible use cases
        </p>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border border-gray-300 text-gray-700 hover:bg-gray-100">
            Upload a .docx
          </Button>
          <span className="text-blue-600 cursor-pointer underline hover:text-blue-700">
            Select a file
          </span>
        </div>
      </div>

      <div className="p-4 border rounded-lg border-gray-300">
        <p className="font-semibold text-gray-800 mb-4">
          3. Write a one-page summary of your basic understanding of Angular and give possible use cases
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Angular - Angular The Complete Guide</span>
          <span className="text-blue-600 cursor-pointer underline hover:text-blue-700">
            Replace file
          </span>
        </div>
      </div>
    </div>
  );
};

export default LessonSummary;

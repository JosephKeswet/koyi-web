"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useParams } from "next/navigation";
import LessonSummary from "../../_components/LessonSummary";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb"; // Assuming ShadCN Breadcrumb component path
import { Checkbox } from "@/components/ui/checkbox";

export default function Page() {
  const params = useParams();
  const courseSlug = params.slug;

  const objectives = [
    "Learn modern Angular, including standalone components & signals from the ground up & in great detail.",
    "Learn how to send HTTP requests, implement routing, authenticate users or handle complex forms - and much more!",
    "Develop modern, complex, responsive and scalable web applications with Angular.",
    "Fully understand the architecture behind an Angular application and how to use it.",
    "Learn TypeScript, a modern JavaScript superset, along the way.",
    "Use the gained, deep understanding of Angular fundamentals to quickly establish yourself as a frontend developer.",
  ];

  const lessons = [
    {
      id: "1",
      title: "Welcome to the Course!",
      type: "Video",
      duration: "1:31",
      videoUrl: "https://www.youtube.com/embed/wFaEDxqXwHY?si=QMTG--LLXilp-2zL",
    },
    {
      id: "2",
      title: "What Exactly is Angular?",
      type: "Video",
      duration: "1:49",
      videoUrl: "https://www.youtube.com/embed/6IwqkzlON10?si=-ImgqykdwfLTDiAR",
    },
    { id: "3", title: "Why Would You Use Angular?", type: "Article" },
    { id: "4", title: "What Do You Know So Far?", type: "Exercise" },
  ];

  const [selectedLessons, setSelectedLessons] = useState<number[]>([]);
  const [showFullObjectives, setShowFullObjectives] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  const handleSelectLesson = (lessonIndex: number) => {
    setSelectedLessons((prevSelected) =>
      prevSelected.includes(lessonIndex)
        ? prevSelected.filter((id) => id !== lessonIndex)
        : [...prevSelected, lessonIndex]
    );
  };

  const handleAccordionToggle = (index: number) => {
    setAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
    setShowFullObjectives(false); // Collapse objectives when an accordion item is opened
  };

  const objectivesToShow = showFullObjectives
    ? objectives
    : objectives.slice(0, accordionOpen === null ? objectives.length : 2);

  return (
    <div className="bg-white text-black">
      {/* Mobile Breadcrumb Navigation using ShadCN */}
      <Link
        href={`/courses/course/${courseSlug}`}
        className="md:hidden flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
      >
        <ChevronLeft />
      </Link>
      <div className="block lg:hidden py-4">
        <Breadcrumb className="flex items-center text-sm text-gray-800">
          <BreadcrumbItem className="flex-1 overflow-hidden">
            <Link
              href={`/courses/course/${courseSlug}`}
              className="text-blue-600 font-semibold truncate"
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              Angular – The Complete Guide (2024 Edition)
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <ChevronRight className="text-gray-400 w-4 h-4 mx-1" />
          </BreadcrumbItem>
          <BreadcrumbItem className="flex-1 overflow-hidden">
            <span
              className="text-gray-600 font-medium truncate"
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              Module 1 - Get Started
            </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      {/* Page Header */}
      <div className="md:border-b-[1px] py-4 md:px-8 hidden lg:block">
        <h2 className="text-2xl font-semibold">Get Started</h2>
      </div>

      {/* Learning Objectives */}
      <section className="lg:px-8 mb-2 mt-4">
        <h3 className="text-lg font-semibold mb-1 md:mb-4 py-4 border-b-[1px]">
          Learning Objectives
        </h3>
        <ul className="list-disc list-inside ml-2 space-y-1 text-gray-700">
          {objectivesToShow.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
        <button
          onClick={() => setShowFullObjectives(!showFullObjectives)}
          className="text-blue-600 text-sm mt-2"
        >
          {showFullObjectives ? "See Less" : "See More"}
        </button>
      </section>

      {/* Lessons Accordion */}
      <section className="lg:px-8 mt-6">
        <Accordion type="single" collapsible>
          {lessons.map((lesson, index) => (
            <AccordionItem key={index} value={`lesson-${index}`}>
              <AccordionTrigger
                onClick={() => handleAccordionToggle(index)}
                className="flex items-center justify-between ml-2 py-4 rounded-lg hover:bg-gray-50 focus:outline-none"
              >
                <div className="flex items-center">
                  {/* <Checkbox
                    id={`lesson-${index}`}
                    checked={selectedLessons.includes(index)}
                    onCheckedChange={() => handleSelectLesson(index)}
                    className="rounded-full mr-4"
                  /> */}
                  <div className="flex flex-col">
                    <Link
                      href={`/courses/course/${courseSlug}/lesson/${lesson.id}`}
                    >
                      <h4
                        className={`font-medium ${
                          index === 0 ? "text-blue-600" : "text-gray-800"
                        }`}
                      >
                        {lesson.title}
                      </h4>
                    </Link>
                    <p className="text-start text-sm text-gray-600 mt-1">
                      {lesson.type} {lesson.duration && `• ${lesson.duration}`}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </AccordionTrigger>
              <AccordionContent className="p-4">
                {lesson.videoUrl ? (
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      width="100%"
                      height="415"
                      src={lesson.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : index === lessons.length - 1 ? (
                  <LessonSummary />
                ) : (
                  <p className="text-gray-600">
                    Content for this lesson will be available soon.
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}

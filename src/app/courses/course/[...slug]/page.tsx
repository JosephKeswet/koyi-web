"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion"; // Shadcn components
import { Checkbox } from "@/components/ui/checkbox";
import LessonSummary from "../_components/LessonSummary";
import Link from "next/link";
import { useParams } from "next/navigation";

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

  const handleSelectLesson = (lessonIndex: number) => {
    setSelectedLessons((prevSelected) =>
      prevSelected.includes(lessonIndex)
        ? prevSelected.filter((id) => id !== lessonIndex)
        : [...prevSelected, lessonIndex]
    );
  };

  return (
    <div className="p8 pt-8 space-y-8 bg-white text-black h-screen">
      <div className="border-b-[1px]">
        <h2 className="text-2xl font-semibold pb-4 px-8">Getting Started</h2>
      </div>

      <section className="px-8 mb-8">
        <h3 className="text-lg font-semibold mb-4">Learning Objectives</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
        <hr className="my-4 border-gray-300" />
      </section>

      <section className="px-8">
        <h3 className="text-lg font-semibold mb-4">Lessons</h3>
        <Accordion type="single" collapsible>
          {lessons.map((lesson, index) => (
            <AccordionItem key={index} value={`lesson-${index}`}>
              <AccordionTrigger className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 focus:outline-none">
                <div className="flex items-center">
                  <div>
                    <Checkbox
                      id={`lesson-${index}`}
                      checked={selectedLessons.includes(index)}
                      onCheckedChange={() => handleSelectLesson(index)}
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4 flex flex-col">
                    <Link href={`/courses/${courseSlug}/${lesson.id}`}>
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

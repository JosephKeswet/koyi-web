import { Button } from "@/components/ui/button";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Check } from "lucide-react";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";

type Props = {};

export default function CourseInfo({}: Props) {
  function Metrics({ icon, title }: { icon: any; title: string }) {
    return (
      <div className="flex items-center gap-1">
        {icon}
        <p className="text-xs text-[#95989E] font-medium">{title}</p>
      </div>
    );
  }

  const lessons = [
    { id: 1, title: "Introduction to Angular" },
    { id: 2, title: "Components and Templates" },
    { id: 3, title: "Dependency Injection" },
    { id: 4, title: "Routing and Navigation" },
    { id: 5, title: "Forms in Angular" },
    { id: 6, title: "Angular CLI and Workflows" },
  ];

  const [selectedLessons, setSelectedLessons] = useState<number[]>([]);

  // Toggle function to handle selecting and deselecting lessons
  const handleSelectLesson = (lessonId: number) => {
    setSelectedLessons((prevSelected) =>
      prevSelected.includes(lessonId)
        ? prevSelected.filter((id) => id !== lessonId)
        : [...prevSelected, lessonId],
    );
  };
  return (
    <div>
      <section className="p-4 flex flex-col gap-4">
        <div className="space-y-2">
          <p className="text-lg font-bold text-primary-black">
            Angular - The Complete Guide (2024 Edition)
          </p>
        </div>

        <div className="space-y-3">
          <Metrics
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5936 10.4467L8.90031 8H7.09364L4.40031 10.4467C3.64698 11.1267 3.40031 12.1733 3.76698 13.12C4.13364 14.06 5.02698 14.6667 6.03364 14.6667H9.96031C10.9736 14.6667 11.8603 14.06 12.227 13.12C12.5936 12.1733 12.347 11.1267 11.5936 10.4467ZM9.21364 12.0933H6.78698C6.53364 12.0933 6.33364 11.8867 6.33364 11.64C6.33364 11.3933 6.54031 11.1867 6.78698 11.1867H9.21364C9.46698 11.1867 9.66698 11.3933 9.66698 11.64C9.66698 11.8867 9.46031 12.0933 9.21364 12.0933Z"
                  fill="#95989E"
                />
                <path
                  d="M12.2331 2.87992C11.8664 1.93992 10.9731 1.33325 9.96645 1.33325H6.03311C5.02645 1.33325 4.13311 1.93992 3.76645 2.87992C3.40645 3.82659 3.65311 4.87325 4.40645 5.55325L7.09978 7.99992H8.90645L11.5998 5.55325C12.3464 4.87325 12.5931 3.82659 12.2331 2.87992ZM9.21311 4.81992H6.78645C6.53311 4.81992 6.33311 4.61325 6.33311 4.36659C6.33311 4.11992 6.53978 3.91325 6.78645 3.91325H9.21311C9.46645 3.91325 9.66645 4.11992 9.66645 4.36659C9.66645 4.61325 9.45978 4.81992 9.21311 4.81992Z"
                  fill="#95989E"
                />
              </svg>
            }
            title="2h 48m"
          />
          <Metrics
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6663 10.6667V12.3333C13.6663 13.62 12.6197 14.6667 11.333 14.6667H4.66634C3.37967 14.6667 2.33301 13.62 2.33301 12.3333V11.9C2.33301 10.8533 3.18634 10 4.23301 10H12.9997C13.3663 10 13.6663 10.3 13.6663 10.6667Z"
                  fill="#95989E"
                />
                <path
                  d="M10.333 1.33325H5.66634C2.99967 1.33325 2.33301 1.99992 2.33301 4.66659V9.71992C2.83967 9.27325 3.50634 8.99992 4.23301 8.99992H12.9997C13.3663 8.99992 13.6663 8.69992 13.6663 8.33325V4.66659C13.6663 1.99992 12.9997 1.33325 10.333 1.33325ZM8.66634 7.16659H5.33301C5.05967 7.16659 4.83301 6.93992 4.83301 6.66659C4.83301 6.39325 5.05967 6.16659 5.33301 6.16659H8.66634C8.93967 6.16659 9.16634 6.39325 9.16634 6.66659C9.16634 6.93992 8.93967 7.16659 8.66634 7.16659ZM10.6663 4.83325H5.33301C5.05967 4.83325 4.83301 4.60659 4.83301 4.33325C4.83301 4.05992 5.05967 3.83325 5.33301 3.83325H10.6663C10.9397 3.83325 11.1663 4.05992 11.1663 4.33325C11.1663 4.60659 10.9397 4.83325 10.6663 4.83325Z"
                  fill="#95989E"
                />
              </svg>
            }
            title="18 lessons"
          />
          <Metrics
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99967 1.33325C4.25301 1.33325 2.83301 2.75325 2.83301 4.49992C2.83301 6.21325 4.17301 7.59992 5.91967 7.65992C5.97301 7.65325 6.02634 7.65325 6.06634 7.65992C6.07968 7.65992 6.08634 7.65992 6.09967 7.65992C6.10634 7.65992 6.10634 7.65992 6.11301 7.65992C7.81968 7.59992 9.15968 6.21325 9.16634 4.49992C9.16634 2.75325 7.74634 1.33325 5.99967 1.33325Z"
                  fill="#95989E"
                />
                <path
                  d="M9.38664 9.43342C7.52664 8.19342 4.49331 8.19342 2.61997 9.43342C1.77331 10.0001 1.30664 10.7668 1.30664 11.5868C1.30664 12.4068 1.77331 13.1668 2.61331 13.7268C3.54664 14.3534 4.77331 14.6668 5.99997 14.6668C7.22664 14.6668 8.45331 14.3534 9.38664 13.7268C10.2266 13.1601 10.6933 12.4001 10.6933 11.5734C10.6866 10.7534 10.2266 9.99342 9.38664 9.43342Z"
                  fill="#95989E"
                />
                <path
                  d="M13.3263 4.89332C13.4329 6.18665 12.5129 7.31999 11.2396 7.47332C11.2329 7.47332 11.2329 7.47332 11.2263 7.47332H11.2062C11.1662 7.47332 11.1262 7.47332 11.0929 7.48665C10.4462 7.51998 9.85292 7.31332 9.40625 6.93332C10.0929 6.31998 10.4863 5.39999 10.4063 4.39999C10.3596 3.85999 10.1729 3.36665 9.89292 2.94665C10.1463 2.81999 10.4396 2.73999 10.7396 2.71332C12.0463 2.59999 13.2129 3.57332 13.3263 4.89332Z"
                  fill="#95989E"
                />
                <path
                  d="M14.6605 11.0599C14.6071 11.7066 14.1938 12.2666 13.5005 12.6466C12.8338 13.0133 11.9938 13.1866 11.1605 13.1666C11.6405 12.7333 11.9205 12.1933 11.9738 11.6199C12.0405 10.7933 11.6471 9.99994 10.8605 9.36661C10.4138 9.01327 9.89382 8.73327 9.32715 8.52661C10.8005 8.09994 12.6538 8.38661 13.7938 9.30661C14.4071 9.79994 14.7205 10.4199 14.6605 11.0599Z"
                  fill="#95989E"
                />
              </svg>
            }
            title="6,000 enrolled"
          />
        </div>
        <hr />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="h-[48px]">
              {" "}
              <span className="font-bold text-lg text-primary-black">
                Lessons
              </span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`flex items-center gap-2 h-[40px] px-4 ${
                    selectedLessons.includes(lesson.id) ? "bg-[#DEEBFF] " : ""
                  }`}
                >
                  <Checkbox
                    id={`lesson-${lesson.id}`}
                    checked={selectedLessons.includes(lesson.id)}
                    onCheckedChange={() => handleSelectLesson(lesson.id)}
                    className="rounded-full"
                  />
                  <label
                    htmlFor={`lesson-${lesson.id}`}
                    className="text-sm text-gray-700"
                  >
                    {lesson.title}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {" "}
              <span className="font-bold text-lg text-primary-black">
                Grades
              </span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`flex items-center gap-2 h-[40px] px-4 ${
                    selectedLessons.includes(lesson.id) ? "bg-[#DEEBFF] " : ""
                  }`}
                >
                  <Checkbox
                    id={`lesson-${lesson.id}`}
                    checked={selectedLessons.includes(lesson.id)}
                    onCheckedChange={() => handleSelectLesson(lesson.id)}
                    className="rounded-full"
                  />
                  <label
                    htmlFor={`lesson-${lesson.id}`}
                    className="text-sm text-gray-700"
                  >
                    {lesson.title}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {" "}
              <span className="font-bold text-lg text-primary-black">
                Notes
              </span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`flex items-center gap-2 h-[40px] px-4 ${
                    selectedLessons.includes(lesson.id) ? "bg-[#DEEBFF] " : ""
                  }`}
                >
                  <Checkbox
                    id={`lesson-${lesson.id}`}
                    checked={selectedLessons.includes(lesson.id)}
                    onCheckedChange={() => handleSelectLesson(lesson.id)}
                    className="rounded-full"
                  />
                  <label
                    htmlFor={`lesson-${lesson.id}`}
                    className="text-sm text-gray-700"
                  >
                    {lesson.title}
                  </label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}

"use client";
import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useParams } from "next/navigation";

export default function LessonDetailPage() {
  const params = useParams();
  const courseSlug = params.slug;

  const breadcrumbs = [
    { label: "Getting Started", href: `/courses/course/${courseSlug}/lesson` },
    { label: "Welcome to the Course", href: "#" },
  ];

  const videoUrl =
    "https://www.youtube.com/embed/6IwqkzlON10?si=-ImgqykdwfLTDiAR";

  const transcript = [
    {
      time: "0:00",
      text: "Hello there. Learn how to send HTTP requests, implement routing, authenticate users or handle complex forms - and much more!",
    },
    {
      time: "0:03",
      text: "Learn how to send HTTP requests, implement routing, authenticate users or handle complex forms - and much more!",
    },
    {
      time: "0:07",
      text: "Learn how to send HTTP requests, implement routing, authenticate users or handle complex forms - and much more!",
    },
  ];

  return (
    <div className="p-8 flex flex-col gap-6">
      <Breadcrumb className="text-sm text-blue-500">
        <BreadcrumbList>
          {breadcrumbs.map((item, index) => (
            <BreadcrumbItem key={index}>
              {item.href === "#" ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink>
                    <Link href={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative w-full aspect-[16/9] rounded-lg shadow-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-4 text-black p-4 rounded-lg bg-white shadow-md flex-1 overflow-auto">
        <h4 className="text-xl font-bold mb-4">Welcome to the Course!</h4>
        <Separator className="mb-4" />
        <div className="space-y-4">
          {transcript.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="font-semibold w-16 text-lg">{item.time}</span>
              <span className="text-gray-800 leading-relaxed">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';
import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"; // Shadcn Separator for styling
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"; // Import Shadcn Breadcrumb components

type TranscriptItem = {
  time: string;
  text: string;
};

type LessonDetailProps = {
  breadcrumbs: { label: string; href: string }[];
  videoUrl: string;
  transcript: TranscriptItem[];
};

export default function LessonDetailPage({
  breadcrumbs = [
    { label: 'Getting Started', href: '/courses/course/all/getting-started' },
    { label: 'Welcome to the Course', href: '#' },
  ],
  videoUrl = "https://www.youtube.com/embed/6IwqkzlON10?si=-ImgqykdwfLTDiAR", // Default video URL
  transcript = [
    { time: '0:00', text: 'Hello there. Learn how to send HTTP requests, implement routing, ...' },
    { time: '0:03', text: 'Learn how to send HTTP requests, implement routing, ...' },
    { time: '0:07', text: 'Learn how to send HTTP requests, implement routing, ...' },
    // More transcript items...
  ],
}: LessonDetailProps) {
  return (
    <div className="p-8 h-screen flex flex-col gap-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb className="text-sm text-blue-500 mb-4">
        {breadcrumbs.map((item, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink asChild>
              <Link href={item.href}>{item.label}</Link>
            </BreadcrumbLink>
            {index < breadcrumbs.length - 1 && <span className="mx-1">{'>'}</span>}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      {/* Video Section */}
      <div className="relative w-full aspect-video rounded-lg shadow-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Transcript Section */}
      <div className="mt-4 text-black p-4 rounded-lg bg-white shadow-md flex-1 overflow-auto">
        <h4 className="text-lg font-bold mb-2">Welcome to the course</h4>
        <Separator className="my-2" />
        {transcript.map((item, index) => (
          <div key={index} className="flex mb-2">
            <span className="font-semibold w-16">{item.time}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

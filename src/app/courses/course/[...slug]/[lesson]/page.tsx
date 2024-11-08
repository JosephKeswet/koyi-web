'use client';
import React from "react";
import { useParams } from "next/navigation";

export default function LessonDetailPage() {
  const params = useParams();
  const courseSlug = params.slug;
  const lessonId = params.lessonId; // Extracting lessonId from the route parameters

  return (
    <div className="p-4 bg-white text-black">
      <h2 className="text-xl font-bold">Lesson {lessonId} Details</h2>
      <p className="mt-2 text-gray-600">Course: {courseSlug}</p>
      <div className="mt-6">
        {/* You can customize this section to include videos, notes, etc */}
        <p>Detailed content for Lesson {lessonId} will appear here...</p>
      </div>
    </div>
  );
}

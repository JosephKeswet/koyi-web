'use client';
import { useParams } from "next/navigation";
import React from "react";
import MyCourseCard from "../_components/MyCourseCard";

type Props = {};

export default function page({}: Props) {
  const params = useParams();
  const slug = params?.slug;

  const tab = slug && slug.length > 0 ? slug[0] : '';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
      <MyCourseCard
        route="course"
        tab={tab}
        title="Frontend Development"
        duration="6-10 hours"
        enrolled="6,000"
        imageUrl="/path-to-image.jpg"
        category="Frontend"
      />
      <MyCourseCard
         route="course"
         tab={tab}
         title="Frontend Development"
         duration="6-10 hours"
         enrolled="6,000"
         imageUrl="/path-to-image.jpg"
         category="Frontend"
      />
      <MyCourseCard
         route="course"
         tab={tab}
         title="Frontend Development"
         duration="6-10 hours"
         enrolled="6,000"
         imageUrl="/path-to-image.jpg"
         category="Frontend"
      />
      <MyCourseCard
         route="course"
         tab={tab}
         title="Frontend Development"
         duration="6-10 hours"
         enrolled="6,000"
         imageUrl="/path-to-image.jpg"
         category="Frontend"
      />
      <MyCourseCard
         route="course"
         tab={tab}
         title="Frontend Development"
         duration="6-10 hours"
         enrolled="6,000"
         imageUrl="/path-to-image.jpg"
         category="Frontend"
      />
    </div>
  );
}

import React from "react";
import MyCourseCard from "../_components/MyCourseCard";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MyCourseCard
        route="engineer"
        title="Frontend Development"
        duration="6-10 hours"
        enrolled="6,000"
        imageUrl="/path-to-image.jpg"
        category="Frontend"
      />
      <MyCourseCard
        route="engineer"
        title="Frontend Development"
        duration="6-10 hours"
        enrolled="6,000"
        imageUrl="/path-to-image.jpg"
        category="Frontend"
      />
      <MyCourseCard
        route="engineer"
        title="Frontend Development"
        duration="6-10 hours"
        enrolled="6,000"
        imageUrl="/path-to-image.jpg"
        category="Frontend"
      />
      <MyCourseCard
        route="engineer"
        title="Frontend Development"
        duration="6-10 hours"
        enrolled="6,000"
        imageUrl="/path-to-image.jpg"
        category="Frontend"
      />
      <MyCourseCard
        route="engineer"
        title="Frontend Development"
        duration="6-10 hours"
        enrolled="6,000"
        imageUrl="/path-to-image.jpg"
        category="Frontend"
      />
    </div>
  );
}

import React from "react";
import LearnCourseCard from "../../_components/LearnCourseCard";

export default function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  // Construct the route conditionally based on the presence of both slug parts
  const baseRoute = slug.length > 1 ? `/${slug[0]}/${slug[1]}` : `/${slug[0]}`;
  
  // Construct the title using both slug parts
  const title = `${slug[0]}${slug[1] || ""}`;

  // Example array of course cards with IDs
  const courseCards = [
    { id: 1, title: `${title} Course 1` },
    { id: 2, title: `${title} Course 2` },
    { id: 3, title: `${title} Course 3` },
    { id: 4, title: `${title} Course 4` },
    { id: 5, title: `${title} Course 5` },
    { id: 6, title: `${title} Course 6` },
  ];

  return (
    <div className="h-[50vh] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courseCards.map((course) => (
          <LearnCourseCard 
            key={course.id} 
            title={course.title} 
            route={`${baseRoute}/${course.id}`} // Appending the id to the route
          />
        ))}
      </div>
    </div>
  );
}

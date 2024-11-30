"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import MyCourseCard from "../_components/MyCourseCard";

type Props = {};

export default function Page({}: Props) {
	const params = useParams();
	const slug = params?.slug;

	const tab = slug && slug.length > 0 ? slug[0] : "";

	const courses = [
		{
			title: "Backend Development",
			category: "Backend",
			status: "ongoing",
			duration: "6-10 hours",
			enrolled: "6,000",
			imageUrl: "",
		},
		{
			title: "Frontend Developer",
			category: "Frontend",
			status: "completed",
			duration: "12-20 hours",
			enrolled: "4,500",
			imageUrl: "",
		},
		{
			title: "Fullstack Developer",
			category: "Backend",
			status: "completed",
			duration: "10-15 hours",
			enrolled: "7,000",
			imageUrl: "",
		},
		{
			title: "React Developer",
			category: "Frontend",
			status: "ongoing",
			duration: "8-12 hours",
			enrolled: "5,000",
			imageUrl: "",
		},
		{
			title: "Backend Development",
			category: "Backend",
			status: "ongoing",
			duration: "6-10 hours",
			enrolled: "6,000",
			imageUrl: "",
		},
		{
			title: "Frontend Developer",
			category: "Frontend",
			status: "completed",
			duration: "12-20 hours",
			enrolled: "4,500",
			imageUrl: "",
		},
		{
			title: "Fullstack Developer",
			category: "Backend",
			status: "completed",
			duration: "10-15 hours",
			enrolled: "7,000",
			imageUrl: "",
		},
		{
			title: "React Developer",
			category: "Frontend",
			status: "ongoing",
			duration: "8-12 hours",
			enrolled: "5,000",
			imageUrl: "",
		},
	];

	const filteredCourses = courses.filter((course) => {
		if (tab === "all") {
			return true;
		}
		return course.status.toLowerCase() === tab;
	});

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
			{filteredCourses.length > 0 ? (
				filteredCourses.map((course, index) => (
					<MyCourseCard
						key={index}
						route="course"
						tab={tab}
						title={course.title}
						duration={course.duration}
						enrolled={course.enrolled}
						imageUrl={course.imageUrl}
						category={course.category}
						courseId="1"
					/>
				))
			) : (
				<p className="text-center col-span-full text-gray-500">
					No courses found
				</p>
			)}
		</div>
	);
}

"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import LearnCourseCard from "../../_components/LearnCourseCard";

type Course = {
	id: number;
	title: string;
	route: string;
	duration: string;
	enrolled: string;
	imageUrl: string;
};

export default function Page({ params }: { params: { slug: string[] } }) {
	const { slug } = params;

	// Construct the route conditionally based on the presence of both slug parts
	const baseRoute = slug.length > 1 ? `/${slug[0]}/${slug[1]}` : `/${slug[0]}`;

	// Construct the title using both slug parts
	const titleBase = `${slug[0]}${slug[1] || ""}`;

	// Example array of course cards with IDs
	const courseCards: Course[] = [
		{
			id: 1,
			title: `${titleBase} Course 1`,
			route: `1`,
			duration: "6-10 hours",
			enrolled: "6K",
			imageUrl: "/images/angular.jpg",
		},
		{
			id: 2,
			title: `${titleBase} Course 2`,
			route: `2`,
			duration: "6-10 hours",
			enrolled: "6K",
			imageUrl: "/images/frontend.jpg",
		},
		{
			id: 3,
			title: `${titleBase} Course 3`,
			route: `3`,
			duration: "6-10 hours",
			enrolled: "6K",
			imageUrl: "/images/frontend.jpg",
		},
		{
			id: 4,
			title: `${titleBase} Course 4`,
			route: `4`,
			duration: "6-10 hours",
			enrolled: "6K",
			imageUrl: "/images/angular.jpg",
		},
		{
			id: 5,
			title: `${titleBase} Course 5`,
			route: `5`,
			duration: "6-10 hours",
			enrolled: "6K",
			imageUrl: "/images/frontend.jpg",
		},
		{
			id: 6,
			title: `${titleBase} Course 6`,
			route: `6`,
			duration: "6-10 hours",
			enrolled: "6K",
			imageUrl: "/images/angular.jpg",
		},
		{
			id: 7,
			title: `${titleBase} Course 7`,
			route: `7`,
			duration: "6-10 hours",
			enrolled: "6K",
			imageUrl: "/images/frontend.jpg",
		},
		{
			id: 8,
			title: `${titleBase} Course 8`,
			route: `8`,
			duration: "6-10 hours",
			enrolled: "6K",
			imageUrl: "/images/angular.jpg",
		},
	];

	const itemsPerPage = 4;
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(courseCards.length / itemsPerPage);

	const paginatedCourses = courseCards.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	return (
		<div className="h-[50vh] overflow-y-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{paginatedCourses.map((course) => (
					<LearnCourseCard
						key={course.id}
						title={course.title}
						routeParam={course.route}
						duration={course.duration}
						enrolled={course.enrolled}
						imageUrl={course.imageUrl}
					/>
				))}
			</div>

			<div className="flex items-center justify-between p-4 border-t border-gray-300 mt-4">
				<span className="text-sm text-gray-400">
					Page {currentPage} of {totalPages}
				</span>
				<div className="flex items-center gap-2">
					<Button
						variant="ghost"
						onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
					>
						{"<"}
					</Button>
					{[...Array(totalPages)].map((_, index) => (
						<Button
							key={index + 1}
							variant={currentPage === index + 1 ? "default" : "ghost"}
							className={`px-3 py-1 ${
								currentPage === index + 1
									? "bg-primary-light text-black"
									: "text-gray-400"
							}`}
							onClick={() => setCurrentPage(index + 1)}
						>
							{index + 1}
						</Button>
					))}
					<Button
						variant="ghost"
						onClick={() =>
							setCurrentPage(Math.min(currentPage + 1, totalPages))
						}
					>
						{">"}
					</Button>
				</div>
			</div>
		</div>
	);
}

"use client";

import { routes } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import React from "react";
import Image from "next/image";

type Props = {
	title: string;
	route: string;
	tab: string;
	duration: string;
	enrolled: string;
	imageUrl: string;
	category: string;
	courseId: string;
};

export default function MyCourseCard({
	title,
	route,
	tab,
	duration,
	enrolled,
	imageUrl,
	category,
	courseId,
}: Props) {
	return (
		<Link
			href={`/courses/course/lesson/${courseId}`}
			className="bg-white rounded-lg shadow-lg overflow-hidden"
		>
			<div className="relative h-40 w-full bg-gray-100">
				<img
					src={imageUrl}
					alt={title}
					className="object-cover w-full h-full"
				/>
			</div>

			<div className="p-4 space-y-2">
				<h3 className="text-lg font-semibold">{title}</h3>
				<div className="flex items-center gap-4 text-gray-500 text-sm">
					<div className="flex items-center gap-1">
						<Clock size={16} />
						<span>{duration}</span>
					</div>
					<div className="flex items-center gap-1">
						<Users size={16} />
						<span>{enrolled} enrolled</span>
					</div>
				</div>

				<div className="w-full h-2 bg-gray-200 rounded-full mt-2">
					<div
						className="h-2 bg-blue-500 rounded-full"
						style={{ width: "50%" }}
					></div>
				</div>

				<div className="flex items-center justify-between mt-4">
					<span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
						{category}
					</span>
					<Button
						variant="outline"
						className="bg-blue-500 text-white px-4 py-2"
					>
						Continue
					</Button>
				</div>
			</div>
		</Link>
	);
}

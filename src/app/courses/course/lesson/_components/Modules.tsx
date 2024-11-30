"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useStorage } from "@/frameworks/useStorage";
import { routes } from "@/lib/constants";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

type Props = {};

export default function Modules({}: Props) {
	const router = useRouter();
	const pathname = usePathname();
	const { getCookies, saveCookie } = useStorage(); // Destructure from the hook
	const lessons = [
		{ id: 1, title: "Module 1 - Getting Started" },
		{ id: 2, title: "Module 2 - Basic Principles" },
		{ id: 3, title: "Module 3 - Basic Principles" },
		{ id: 4, title: "Module 4 - Basic Principles" },
		{ id: 5, title: "Module 5 - Basic Principles" },
	];

	const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
	const [isMobile, setIsMobile] = useState<boolean>(false);

	// Detect if the screen width is mobile
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1024); // Tailwind's 'lg' breakpoint is 1024px
		};

		handleResize(); // Check on initial load
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Retrieve previously selected lesson from cookies
	useEffect(() => {
		// Retrieve selected lesson from cookies
		const savedLesson = getCookies("selectedLesson");
		if (savedLesson) {
			setSelectedLesson(Number(savedLesson)); // Set previously selected lesson
		}
	}, [getCookies]);

	// Set active lesson based on pathname
	useEffect(() => {
		const matchModule = lessons.find((lesson) =>
			pathname.includes(`module/${lesson.id}`)
		);
		if (matchModule) {
			setSelectedLesson(matchModule.id);
		}
	}, [pathname, lessons]);

	// Function to handle selecting/deselecting a lesson
	const handleSelectLesson = (id: number) => {
		if (isMobile) {
			router.push(`${routes.courses}course/lesson/module/${id}`);
		} else {
			router.push(`${routes.courses}course/lesson/${id}`);
		}

		setSelectedLesson(id); // Set as selected module
		saveCookie("selectedLesson", id.toString()); // Save the selected lesson in cookies
	};

	return (
		<div className="flex flex-col gap-2">
			{lessons.map((lesson) => (
				<div
					key={lesson.id}
					className={`flex items-center gap-3 px-4 h-[40px] cursor-pointer ${
						// Check if the pathname includes the module id for active state
						pathname.includes(`module/${lesson.id}`) ||
						selectedLesson === lesson.id
							? "bg-primary-light"
							: "bg-transparent"
					}`}
					onClick={() => handleSelectLesson(lesson.id)}
				>
					<Checkbox
						id={`lesson-${lesson.id}`}
						checked={
							pathname.includes(`module/${lesson.id}`) ||
							selectedLesson === lesson.id
						}
						onCheckedChange={() => handleSelectLesson(lesson.id)}
						className="rounded-full"
					/>
					<label
						htmlFor={`lesson-${lesson.id}`}
						className="text-sm text-gray-700 cursor-pointer"
					>
						{lesson.title}
					</label>
				</div>
			))}
		</div>
	);
}

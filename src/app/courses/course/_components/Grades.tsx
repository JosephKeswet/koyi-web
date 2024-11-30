import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { routes } from "@/lib/constants";

export default function Grades() {
	const gradesData = [
		{
			module: "Module 1 - Getting Started",
			exercises: ["Exercise 1", "Exercise 2"],
			scores: ["9/10", "9/10"],
		},
		{
			module: "Module 2 - Basic Principles",
			exercises: ["Exercise 1", "Exercise 2"],
			scores: ["9/10", "-"],
		},
		{
			module: "Module 3 - Basic Principles",
			exercises: ["Exercise 1", "Exercise 2"],
			scores: ["-", "-"],
		},
		{
			module: "Module 4 - Basic Principles",
			exercises: ["Exercise 1"],
			scores: ["-"],
		},
	];

	return (
		<div className="flex flex-col">
			<div className="flex px-4 py-4 items-center border-b-[1px] border-gray-100">
				<h1 className="text-2xl font-semibold ml-4">Grades</h1>
			</div>

			<div className="flex flex-col justify-center p-4 px-8 md:px-[50px] 2xl:px-[200px] py-3 overflow-auto">
				<div className="flex flex-col space-y-6 px-8 ">
					{gradesData.map((data, index) => (
						<div
							key={index}
							className="flex flex-col gap-4"
						>
							<h2 className="text-lg font-semibold">{data.module}</h2>
							{data.exercises.map((exercise, i) => (
								<div
									key={i}
									className="flex justify-between items-center ml-6"
								>
									<p className="text-gray-700">{exercise}</p>
									<p className="text-gray-500">{data.scores[i]}</p>
								</div>
							))}
						</div>
					))}

					<div className="flex justify-between items-center border-t pt-4 mt-6">
						<h3 className="text-lg font-semibold">Total</h3>
						<p className="text-gray-500">-</p>
					</div>
					<p className="text-sm italic text-gray-400 mt-2 ml-8">
						Complete the course to earn a certificate
					</p>
				</div>
			</div>
		</div>
	);
}

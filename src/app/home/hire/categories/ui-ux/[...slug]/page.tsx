"use client";
import RoundedTabs from "@/components/global/RoundedTabs";
import { routes } from "@/lib/constants";
import React from "react";
import HireCard from "../../../_components/HireCard";
import Link from "next/link";
import { ChevronLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {};

export default function page({}: Props) {
	const tabs = [
		{ routeKey: "mobile", name: "Mobile" },
		{ routeKey: "backend", name: "Backend" },
		{ routeKey: "frontend", name: "Frontend" },
		{ routeKey: "ui-ux", name: "UI/UX" },
	];
	const basePath = routes.hire_categories; // Adjust the base path as needed
	return (
		<div className="flex flex-col gap-8">
			<div className=" flex items-center justify-between gap-4 md:gap-[32px] ">
				<Link
					href={routes.hire}
					className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
				>
					<ChevronLeft />
				</Link>
				<Button>
					<Plus />
					Post a Job
				</Button>
			</div>
			<div>
				<p className="text-xl font-bold">Mobile Developer</p>
				<p className="text-sm font-normal text-primary-darkGrey">
					Hire a mobile developer to build a mobile application or maintain one
					for you.
				</p>
			</div>
			<div>
				<RoundedTabs
					basePath={basePath}
					tabs={tabs}
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{/* <HireCard/>
      <HireCard/>
      <HireCard/>
      <HireCard/> */}
			</div>
		</div>
	);
}

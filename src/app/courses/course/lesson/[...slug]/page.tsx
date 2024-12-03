"use client";
import React from "react";
import CourseInfo from "../../_components/CourseInfo";
import { useParams } from "next/navigation";
import ModuleData from "../_components/ModuleData";

export default function Page() {
	const params = useParams();
	return (
		<div className="">
			<p>Content by right {params.slug[0]}</p>
			<ModuleData />
		</div>
	);
}

"use client";
import React from "react";
import { useParams } from "next/navigation";
import ModuleData from "../../_components/ModuleData";

export default function Page() {
	const params = useParams();
	
	return (
		<div className="border h-screen">
			<p>Content by right {params.slug[0]}</p>
			<ModuleData />
		</div>
	);
}

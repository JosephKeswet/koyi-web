"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, Phone } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

export default function ChatHeader({}: Props) {
	const [isMobile, setIsMobile] = useState(false);
	const router = useRouter();
	useEffect(() => {
		// Function to determine if the screen is in mobile view
		const handleResize = () => {
			if (window.matchMedia("(max-width: 768px)").matches) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="flex items-center justify-between border-b p-4 bg-white">
			<div className="flex items-center gap-2 lg:gap-4">
				{isMobile && (
					<button className="flex items-center justify-center w-[32px] h-[32px] bg-gray-200 rounded-full">
						<ChevronLeft
							onClick={() => router.back()}
							className="w-6 h-6 text-gray-600"
						/>
					</button>
				)}
				<Avatar className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] rounded-full bg-gray-200">
					<Image
						src=""
						alt="Client 1"
						width={1000}
						height={1000}
					/>
				</Avatar>
				<div>
					<h2 className="text-lg font-bold">Oyale John</h2>
					<div className="flex items-center gap-2 mt-1">
						<span className="px-2 py-1 text-sm bg-gray-100 rounded-full">
							Swift
						</span>
						<span className="px-2 py-1 text-sm bg-gray-100 rounded-full">
							React Native
						</span>
					</div>
				</div>
			</div>
			<button className="flex items-center justify-center w-[32px] h-[32px] rounded-full">
				<Phone className="w-6 h-6 text-gray-600" />
			</button>
		</div>
	);
}

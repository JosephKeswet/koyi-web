// /courses/[slug]/layout.tsx
"use client";
import React, { useEffect, useState } from "react";
import DashboardHeader from "@/components/global/DashboardHeader";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import useIsMobile from "@/hooks/useIsMobile";
import { icons } from "@/lib/constants/icons";
import { useParams, usePathname, useRouter } from "next/navigation";
import { routes } from "@/lib/constants";
import SearchComponent from "@/components/global/SearchComponent";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Modules from "../../lesson/_components/Modules";

type Props = {
	children: React.ReactNode;
};

export default function Layout({ children }: Props) {
	const pathname = usePathname();
	const router = useRouter();
	const { ChatIcon } = icons;

	return (
		<div className="h-screen flex flex-col overflow-hidden">
			<div className="sticky top-0 z-50 bg-white">
				<DashboardHeader>
					<DashboardHeader.MainHeader
						searchFunc={() => {}}
						downloadXLX={() => {}}
						title="Grades"
					>
						<DashboardHeader.HeaderText />
						<DashboardHeader.HeaderContainer>
							<div className="hidden md:flex">
								<DashboardHeader.HeaderSearch />
							</div>
							<div className="hidden lg:flex items-center gap-4">
								<div className="ml-0 lg:ml-[40px]">
									<ChatIcon color="#95989E" />
								</div>
								<DashboardHeader.HeaderAvatarProfile />
							</div>
						</DashboardHeader.HeaderContainer>
					</DashboardHeader.MainHeader>
				</DashboardHeader>
			</div>
			<div className="px-3 lg:px-[50px] flex flex-col gap-4 md:gap-[32px] pt-3 lg:pt-[50px]">
				<div className="flex items-center gap-2">
					<div
						onClick={() => router.back()}
						className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
					>
						<ChevronLeft />
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3">
					<div className="hidden lg:block w-full lg:w-[280px]">
						<h1>Angular - The Complete Guide (2024 Edition)</h1>
						<div className="flex flex-col gap-4">
							<Accordion
								type="single"
								collapsible
							>
								<AccordionItem value="item-1">
									<AccordionTrigger
										className={`
										h-[40px] px-4 py-2 ${
											pathname.includes(`${routes.courses}course/lesson/`)
												? "bg-primary-light  border-r-4 border-primary"
												: ""
										}
									`}
										onClick={() =>
											router.push(`${routes.courses}course/lesson/1`)
										}
									>
										Lessons
									</AccordionTrigger>
									<AccordionContent className="pt-4">
										<Modules />
									</AccordionContent>
								</AccordionItem>
							</Accordion>

							<div
								className={`
									h-[40px] px-4 py-2 ${
										pathname === `${routes.courses}course/grades/1`
											? "bg-primary-light  border-r-4 border-primary"
											: ""
									}
								`}
								onClick={() => router.push(`${routes.courses}course/grades/1`)}
							>
								Grades
							</div>
						</div>
					</div>
					<main className=" w-full col-span-2">{children}</main>
				</div>
			</div>
		</div>
	);
}
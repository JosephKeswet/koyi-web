"use client";
import DashboardHeader from "@/components/global/DashboardHeader";
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "@/lib/ProfileContext";
import { useRouter } from "next/navigation";
import { icons } from "@/lib/constants/icons";
import HomeNavItem from "./_components/HomeNavItem";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { routes } from "@/lib/constants";
import CourseCard from "./_components/CourseCard";

type Props = {};

export default function Page({}: Props) {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const featuredCoursesRef = useRef<HTMLDivElement>(null);
	const topCertificateRef = useRef<HTMLDivElement>(null);

	const scroll = (
		direction: "left" | "right",
		ref: React.RefObject<HTMLDivElement>
	) => {
		if (ref.current) {
			const scrollAmount = 300;
			ref.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};
	const openRegistrationModal = () => {
		setIsModalOpen(true);
	};

	const { ChatIcon, LearnIcon, GetHiredIcon, HireIcon } = icons;
	return (
		<div>
			<DashboardHeader>
				<DashboardHeader.MainHeader
					searchFunc={() => {}}
					downloadXLX={() => {}}
					title="Home"
					createFunction={openRegistrationModal}
				>
					<DashboardHeader.HeaderText />
					<DashboardHeader.HeaderContainer>
						<DashboardHeader.HeaderSearch />
						<div className="hidden lg:flex items-center gap-4">
							<div className="ml-0 lg:ml-[40px]">
								<ChatIcon color="#95989E" />
							</div>
							<DashboardHeader.HeaderAvatarProfile />
						</div>
					</DashboardHeader.HeaderContainer>
				</DashboardHeader.MainHeader>
			</DashboardHeader>
			<div className="p-3 lg:p-[50px] flex flex-col gap-[60px]">
				<div className="flex flex-wrap lg:flex-nowrap items-center gap-[14px]">
					<HomeNavItem
						icon={<LearnIcon />}
						text="Learn"
						route={`${routes.home_learn}/fields/mobile`}
					/>
					<HomeNavItem
						icon={<GetHiredIcon />}
						text="Get hired"
						route={routes.jobs}
					/>
					<HomeNavItem
						icon={<HireIcon />}
						text="Hire a professional"
						route={routes.hire}
					/>
				</div>
				<section>
					<div className="flex items-center justify-between">
						<p className="text-lg font-medium text-primary-black">
							Featured courses
						</p>
						<div className="flex items-center gap-6">
							<p className="underline text-lg font-medium leading-[32px]">
								See all
							</p>
							<div className="flex items-center gap-3">
								<div
									onClick={() => scroll("left", featuredCoursesRef)}
									className="flex items-center justify-center w-8 h-8 bg-primary-grey rounded-full cursor-pointer"
								>
									<ChevronLeft />
								</div>
								<div
									onClick={() => scroll("right", featuredCoursesRef)}
									className="flex items-center justify-center w-8 h-8 bg-primary-grey rounded-full cursor-pointer"
								>
									<ChevronRight />
								</div>
							</div>
						</div>
					</div>
					<div
						ref={featuredCoursesRef}
						className="flex gap-4 pt-4 overflow-x-auto scrollbar-hide"
					>
						<CourseCard routeParam="1" />
						<CourseCard routeParam="2" />
						<CourseCard routeParam="3" />
						<CourseCard routeParam="4" />
						<CourseCard routeParam="5" />
						<CourseCard routeParam="6" />
					</div>
				</section>
				<section>
					<div className="flex items-center justify-between">
						<p className="text-lg font-medium text-primary-black">
							Top certificates
						</p>
						<div className="flex items-center gap-6">
							<p className="underline text-lg font-medium leading-[32px]">
								See all
							</p>
							<div className="flex items-center gap-3">
								<div
									onClick={() => scroll("left", topCertificateRef)}
									className="flex items-center justify-center w-8 h-8 bg-primary-grey rounded-full cursor-pointer"
								>
									<ChevronLeft />
								</div>
								<div
									onClick={() => scroll("right", topCertificateRef)}
									className="flex items-center justify-center w-8 h-8 bg-primary-grey rounded-full cursor-pointer"
								>
									<ChevronRight />
								</div>
							</div>
						</div>
					</div>
					<div
						ref={topCertificateRef}
						className="flex gap-4 pt-4 overflow-x-auto scrollbar-hide"
					>
						<CourseCard routeParam="1" />
						<CourseCard routeParam="2" />
						<CourseCard routeParam="3" />
						<CourseCard routeParam="4" />
						<CourseCard routeParam="5" />
						<CourseCard routeParam="6" />
					</div>
				</section>
			</div>
		</div>
	);
}

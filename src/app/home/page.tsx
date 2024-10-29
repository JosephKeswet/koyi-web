"use client";
import DashboardHeader from "@/components/global/DashboardHeader";
import React, { useContext, useEffect, useState } from "react";
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
                <div className="flex items-center justify-center w-8 h-8 bg-primary-grey rounded-full">
                  <ChevronLeft />
                </div>
                <div className="flex items-center justify-center w-8 h-8 bg-primary-grey rounded-full">
                  <ChevronRight />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 pt-4">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
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
                <div className="flex items-center justify-center w-8 h-8 bg-primary-grey rounded-full">
                  <ChevronLeft />
                </div>
                <div className="flex items-center justify-center w-8 h-8 bg-primary-grey rounded-full">
                  <ChevronRight />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 pt-4">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </section>
      </div>
    </div>
  );
}

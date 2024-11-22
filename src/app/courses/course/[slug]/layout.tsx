// /courses/[slug]/layout.tsx
"use client";
import React, { useState } from "react";
import DashboardHeader from "@/components/global/DashboardHeader";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import CourseInfo from "../_components/CourseInfo";
import useIsMobile from "@/hooks/useIsMobile";
import { icons } from "@/lib/constants/icons";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const isMobile = useIsMobile();
  const [showSidebar, setShowSidebar] = useState(true);

  const { ChatIcon } = icons;

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div className="h-screen flex flex-col">
      {/* <div className="sticky top-0 z-10 bg-white">
        <DashboardHeader>
        <DashboardHeader.MainHeader
          searchFunc={() => {}}
          downloadXLX={() => {}}
          title="Chat"
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
      </div> */}

      <div className="flex lg:pt-[60px] p-3 lg:px-[50px] items-start overflow-hidden">
        {/* Sidebar for mobile and desktop */}
        {(!isMobile || showSidebar) && (
          <div
            className={`w-full md:w-[280px] 2xl:w-[400px] max-h-[calc(100vh-60px)] overflow-y-auto ${
              isMobile
                ? "fixed top-0 left-0 bg-white h-full z-50"
                : "hidden md:block"
            } flex-none`}
          >
            <div className="flex flex-col gap-4 md:gap-[32px] py-3 lg:py-0">
              <Link
                href="/courses/course"
                className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
              >
                <ChevronLeft />
              </Link>
              <CourseInfo />
            </div>
          </div>
        )}

        {/* Main content */}
        <main
          className={`w-full ${
            isMobile && showSidebar ? "hidden" : ""
          } max-h-[calc(100vh-15vh)] overflow-y-auto border-2 border-gray-100 rounded-lg`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

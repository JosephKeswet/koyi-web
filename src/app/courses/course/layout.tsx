"use client";
import React, { useState, useEffect } from "react";
import { routes } from "@/lib/constants";
import DashboardHeader from "@/components/global/DashboardHeader";
import { icons } from "@/lib/constants/icons";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import CourseInfo from "./_components/CourseInfo";
import Grades from "./_components/Grades";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { ChatIcon } = icons;
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const field = params?.slug ? params.slug[0] : "";
  const isGradesPage = pathname.includes("grades");

  // State to handle visibility on smaller screens
  const [showCourseInfo, setShowCourseInfo] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Effect to handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setShowCourseInfo(true); // Always show CourseInfo on larger screens
      }
    };

    // Initial check
    handleResize();

    // Attach the listener to resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuSelection = (menuItem: string) => {
    if (menuItem === "grades") {
      if (isMobile) {
        setShowCourseInfo(false);
      }
      router.push(`${pathname}/grades`); // Use router to navigate to grades page
    } else {
      setShowCourseInfo(false);
    }
  };

  const handleBackToCourseInfo = () => {
    setShowCourseInfo(true);
  };

  return (
    <div className="h-screen flex flex-col">
      <DashboardHeader>
        <DashboardHeader.MainHeader
          searchFunc={() => {}}
          downloadXLX={() => {}}
          title="My courses"
          createFunction={() => {}}
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

      {/* Sticky Chevron and Navigation */}
      <div className="flex flex-1 overflow-hidden">
        {isMobile && showCourseInfo ? (
          // Course Info Sidebar for Smaller Screens
          <div className="w-full h-full px-3">
            <div className="flex flex-col gap-4 md:gap-[32px] lg:px-[50px] py-3 lg:py-[20px]">
              <Link
                href={routes.courses}
                className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
              >
                <ChevronLeft />
              </Link>

              <section className="">
                <CourseInfo handleMenuSelection={handleMenuSelection} />
              </section>
            </div>
          </div>
        ) : (
          <>
            {isMobile && !showCourseInfo ? (
              // Main Content for Mobile with Back Button
              <main className="flex-1 overflow-y-auto border">
                <div className="md:hidden p-3">
                  <button
                    className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
                    onClick={handleBackToCourseInfo}
                  >
                    <ChevronLeft className="mr-2" />
                  </button>
                </div>
                {isGradesPage ? <Grades /> : children}
              </main>
            ) : (
              // Desktop View: Show Both Course Info Sidebar and Main Content
              <>
                <div className="w-[280px] h-full px-3 hidden md:block">
                  <div className="flex flex-col gap-4 md:gap-[32px] lg:px-[50px] py-3 lg:py-[20px]">
                    <Link
                      href={routes.courses}
                      className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
                    >
                      <ChevronLeft />
                    </Link>

                    <section className="">
                      <CourseInfo />
                    </section>
                  </div>
                </div>
                <main className="flex-1 overflow-y-auto border">
                  {isGradesPage ? <Grades /> : children}
                </main>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

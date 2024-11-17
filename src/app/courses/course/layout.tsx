"use client";
import React, { useEffect, useState } from "react";
import DashboardHeader from "@/components/global/DashboardHeader";
import { icons } from "@/lib/constants/icons";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import CourseInfo from "./_components/CourseInfo";
import Grades from "./_components/Grades";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { ChatIcon } = icons;
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const isGradesPage = pathname.includes("grades");
  const isLessonPage = pathname.includes("lesson");
  const [isMobile, setIsMobile] = useState(false);
  const [currentView, setCurrentView] = useState<"courseInfo" | "content">("courseInfo");

  useEffect(() => {
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

  useEffect(() => {
    // Update view based on pathname (in case user navigates directly)
    if (isGradesPage || isLessonPage) {
      setCurrentView("content");
    } else {
      setCurrentView("courseInfo");
    }
  }, [pathname]);
console.log(pathname)
  const handleBackToCourseInfo = () => {
    // Set the view back to course info, update URL, and scroll to top
    setCurrentView("courseInfo");
    router.push(`/courses/course/${params.slug}`); // Go back to the course root
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const handleMenuSelection = (menuItem: string) => {
    if (menuItem === "grades") {
      setCurrentView("content");
      router.push(`${pathname}/grades`);
    } else if (menuItem === "lesson") {
      setCurrentView("content");
      // Assuming you have lesson IDs or similar to use in the route
      router.push(`/courses/course/${params.slug}/lesson/1`);
    }
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

      <div className="flex flex-1 overflow-hidden">
        {isMobile ? (
          // Mobile View: Show either CourseInfo or Content based on currentView state
          <>
            {currentView === "courseInfo" ? (
              // Course Info Sidebar for Mobile
              <div className="w-full overflow-y-scroll h-full px-3">
                <div className="flex flex-col gap-4 md:gap-[32px] lg:px-[50px] py-3 lg:py-[20px]">
                  <Link
                    href="/courses"
                    className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
                  >
                    <ChevronLeft />
                  </Link>
                  <section>
                    <CourseInfo handleMenuSelection={handleMenuSelection} />
                  </section>
                </div>
              </div>
            ) : (
              // Content Page (Grades or Lessons) for Mobile with Back Button
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
            )}
          </>
        ) : (
          // Desktop View: Show Both Sidebar and Content
          <>
            <div className="w-[280px] h-full px-3 hidden md:block">
              <div className="flex flex-col gap-4 md:gap-[32px] py-3 lg:py-[20px]">
                <Link
                  href="/courses"
                  className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
                >
                  <ChevronLeft />
                </Link>
                <section>
                  <CourseInfo handleMenuSelection={handleMenuSelection} />
                </section>
              </div>
            </div>
            <main className="flex-1 overflow-y-auto border-[1px] border-gray-100">
              {isGradesPage ? <Grades /> : children}
            </main>
          </>
        )}
      </div>
    </div>
  );
}

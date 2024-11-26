// /courses/[slug]/layout.tsx
"use client";
import React, { useEffect, useState } from "react";
import DashboardHeader from "@/components/global/DashboardHeader";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import CourseInfo from "../_components/CourseInfo";
import useIsMobile from "@/hooks/useIsMobile";
import { icons } from "@/lib/constants/icons";
import { useParams, usePathname, useRouter, } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function CourseLayout({ children }: Props) {
  const isMobile = useIsMobile();
  const [showSidebar, setShowSidebar] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const { ChatIcon } = icons;

  const field = params?.slug ? params.slug : "";
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  useEffect(() => {
    if(isMobile) {
      setShowSidebar(false);
    }
  }, [isMobile, pathname]);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="sticky top-0 z-50 bg-white">
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
      </div>

      <div className="flex lg:pt-[60px] p-3 lg:px-[50px] items-start overflow-hidden">
        {(!isMobile || showSidebar) && (
          <div
            className={`w-full md:w-[230px] 2xl:w-[400px] max-h-[calc(100vh-6vh)] overflow-y-auto ${
              isMobile
                ? "fixed top0 left-0  bg-white z-50"
                : "hidden md:block"
            } flex-none overflow-hidden`}
          >
            <div className="flex flex-col gap-4 md:gap-[32px] py-3 lg:py-0 h-full overflow-y-auto">
              <Link
                href={`/courses/${field}`}
                className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
              >
                <ChevronLeft />
              </Link>
              <CourseInfo
                isMobile={isMobile}
                setShowSidebar={setShowSidebar}
              />
            </div>
          </div>
        )}
        <main
          className={`w-full ${
            isMobile && showSidebar ? "hidden" : ""
          } max-h-[calc(100vh-25vh)] overflow-y-auto md:border-2 md:border-gray-100 rounded-lg`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

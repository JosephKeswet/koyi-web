"use client";

import React from "react";
import { routes } from "@/lib/constants";
import DashboardHeader from "@/components/global/DashboardHeader";
import { icons } from "@/lib/constants/icons";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import SearchComponent from "@/components/global/SearchComponent";
import Tabs from "@/components/global/Tabs";
import { Button } from "@/components/ui/button";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { ChatIcon, LearnIcon, GetHiredIcon, HireIcon } = icons;
  const params = useParams();
  const pathname = usePathname();
  const field = params?.slug ? params.slug[0] : "";
  const tabs = [{routeKey:"all",value:"All courses"}, {routeKey:'ongoing',value:"Ongoing courses"}, {routeKey:"completed",value:"Completed courses"}];

  return (
    <div className="h-screen flex flex-col">
      <DashboardHeader>
        <DashboardHeader.MainHeader
          searchFunc={() => {}}
          downloadXLX={() => {}}
          title="Get hired"
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
    <div className="px-3 lg:px-[50px] flex items-center justify-between gap-4 md:gap-[32px] py-3 lg:py-[20px]">
        <Link
          href={routes.home}
          className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
        >
          <ChevronLeft />
        </Link>
        <Button>My professional profile</Button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-hidden w-full p-3 lg:p-[50px]">
        <div className="overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  );
}

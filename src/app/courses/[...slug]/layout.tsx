"use client";

import React from "react";
import { routes } from "@/lib/constants";
import DashboardHeader from "@/components/global/DashboardHeader";
import { icons } from "@/lib/constants/icons";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import SearchComponent from "@/components/global/SearchComponent";
import SkillsTab from "../../home/learn/_components/SkillTabs";
import Tabs from "@/components/global/Tabs";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { ChatIcon, LearnIcon, GetHiredIcon, HireIcon } = icons;
  const params = useParams();
  const pathname = usePathname();
  const field = params?.slug ? params.slug[0] : "";
  const tabs = [
    { routeKey: "all", value: "All courses" },
    { routeKey: "ongoing", value: "Ongoing courses" },
    { routeKey: "completed", value: "Completed courses" },
  ];

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

      <div className="px-3 lg:px-[50px] pt-2 md:pt-4">
        <Tabs field={field} tabs={tabs} defaultTab={tabs[0].routeKey} />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-hidden w-full p-3 lg:p-[50px]">
        <div className="overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import FieldNavItem from "../_components/FieldNavItem";
import { routes } from "@/lib/constants";
import DashboardHeader from "@/components/global/DashboardHeader";
import { icons } from "@/lib/constants/icons";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import SkillsTab from "../_components/SkillTabs";
import SearchComponent from "@/components/global/SearchComponent";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { ChatIcon, LearnIcon, GetHiredIcon, HireIcon } = icons;
  const params = useParams();
  const pathname = usePathname();
  const field = params?.slug ? params.slug[0] : "";
  const tabs = ["Flutter", "React", "Vue"];

  return (
    <div className="h-screen flex flex-col">
      <DashboardHeader>
        <DashboardHeader.MainHeader
          searchFunc={() => {}}
          downloadXLX={() => {}}
          title="Learn"
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
      <div className="px-3 lg:px-[50px] flex flex-col gap-4 md:gap-[32px] pt-3 lg:pt-[50px]">
        <div className="flex items-center gap-2">
          <Link
            href={routes.home}
            className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
          >
            <ChevronLeft />
          </Link>
          <div className="flex md:hidden">
            <SearchComponent />
          </div>
        </div>
        <div className="w-full border p-1 flex items-center gap-2 rounded-[6px] overflow-x-auto">
          <FieldNavItem
            route={`${routes.explore_fields}/mobile`}
            text="Mobile Dev"
            field="mobile"
          />
          <FieldNavItem
            route={`${routes.explore_fields}/backend`}
            text="Backend Dev"
            field="backend"
          />
          <FieldNavItem
            route={`${routes.explore_fields}/frontend`}
            text="Frontend Dev"
            field="frontend"
          />
          <FieldNavItem
            route={`${routes.explore_fields}/design`}
            text="UI/UX Design"
            field="design"
          />
        </div>
      </div>
      <div className="px-3 lg:px-[50px] pt-2 md:pt-4">
        <SkillsTab field={field} tabs={tabs} />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-hidden w-full p-3 lg:p-[50px]">
        <div className="overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  );
}

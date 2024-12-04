"use client";
import DashboardHeader from "@/components/global/DashboardHeader";
import React, { useEffect, useState } from "react";
import { icons } from "@/lib/constants/icons";
import ChatSidebar from "../_components/ChatSidebar";
import WorkTab from "../_components/WorkTab";
import { Search, Check } from "lucide-react";
import { useParams } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const params = useParams();
  const field = params?.slug;
  const tab = [
    { routeKey: "client", value: " My client" },
    { routeKey: "professionals", value: "Professionals" },
  ];
  const { ChatIcon } = icons;

  return (
    <div className="h-screen flex flex-col">
      <div className="hidden lg:block sticky top-0 z-10 bg-white">
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
      <div className="px-3 lg:px-[50px] flex flex-col gap-4 md:gap-[32px] pt-3 lg:pt-[50px] h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <main className="overflow-hidden w-full col-span-2 h-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

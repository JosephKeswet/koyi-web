"use client";
import DashboardHeader from "@/components/global/DashboardHeader";
import React, { useEffect, useState } from "react";
import { icons } from "@/lib/constants/icons";
import { Search, Check } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import ChatSidebar from "../_components/ChatSidebar";
import { useParams } from "next/navigation";
import WorkTab from "../_components/WorkTab";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
	const params = useParams();
	const field = params?.slug;
	const tab = [
		{ routeKey: "client", value: " My client" },
		{ routeKey: "professionals", value: "Professionals"}
	]

	

  const { ChatIcon } = icons;

  return (
    <div className="h-screen flex flex-col">
      <div className="sticky top-0 z-10 bg-white">
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
      <div className="bg-blue200 grid grid-cols-3 lg:px-[50px] overflow-hidden h-full">
        <div className="col-span-1 overflow-y-scroll bg-white space-y-4">
		      <WorkTab  field={field} tabs={tab} defaultTab={tab[0].routeKey}  />
          <div>
          <div className="relative mb-4 p-4 lg:p-0">
				<input
					type="text"
					placeholder="Search messages"
					className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-md lg:rounded-none pl-10"
				/>
				<div className="absolute top-1/2 left-3 transform -translate-y-1/2 p-4 lg:p-0">
					<Search className="text-gray-400 w-5 h-5" />
				</div>
			</div>
          </div>
          <ChatSidebar />
        </div>
        <main className="col-span-2 border rounded-lg">{children}</main>
      </div>
    </div>
  );
}
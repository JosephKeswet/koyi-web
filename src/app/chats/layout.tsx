"use client";
import DashboardHeader from "@/components/global/DashboardHeader";
import React, { useEffect, useState } from "react";
import { icons } from "@/lib/constants/icons";
import ChatSidebar from "./_components/ChatSidebar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentView, setCurrentView] = useState<"sidebar" | "chatRoom">(
    "sidebar"
  );

  const { ChatIcon } = icons;

  const handleChatSelect = (chatId: string) => {
    setActiveChat(chatId);
    setCurrentView("chatRoom");
  };

  const handleBackToSidebar = () => {
    setCurrentView("sidebar");
  };

  return (
    <div className="bg-green-200 h-screen flex flex-col">
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
        <div className="col-span-1 overflow-y-scroll bg-white">
          <ChatSidebar onSelectChat={handleChatSelect} />
        </div>
        <main className="col-span-2 border rounded-lg">{children}</main>
      </div>
    </div>
  );
}

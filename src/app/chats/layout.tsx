"use client";
import DashboardHeader from "@/components/global/DashboardHeader";
import React, { useEffect, useState } from "react";
import ChatRoom from "./room/page";
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

	useEffect(() => {
		const handleResize = () => {
			if (window.matchMedia("(max-width: 768px)").matches) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
				setCurrentView("sidebar"); // Reset view to "sidebar" when switching to desktop view
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleChatSelect = (chatId: string) => {
		setActiveChat(chatId);
		setCurrentView("chatRoom");
	};

	const handleBackToSidebar = () => {
		setCurrentView("sidebar");
	};

	return (
		<div className="h-screen flex flex-col">
			{!(isMobile && currentView === "chatRoom") && (
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
			)}
			<div className="flex flex-1 overflow-hidden">
				{isMobile ? (
					currentView === "sidebar" ? (
						<div className="w-full h-full bg-white">
							<ChatSidebar onSelectChat={handleChatSelect} />
						</div>
					) : (
						<div className="w-full h-full overflow-y-auto bg-white">
							{/* {activeChat && <ChatRoom roomId={activeChat} onBackToSidebar={handleBackToSidebar} />} */}
						</div>
					)
				) : (
					<>
						<div className="w-1/3 h-full overflow-y-scroll bg-white border-r">
							<ChatSidebar onSelectChat={handleChatSelect} />
						</div>
						<div className="flex-1 overflow-y-scroll bg-white">
							{activeChat ? (
								// <ChatRoom roomId={activeChat} />
								<div></div>
							) : (
								<div className="p-8">
									<h1 className="text-2xl font-bold mb-4">
										Select a chat to start messaging
									</h1>
								</div>
							)}
						</div>
					</>
				)}
			</div>
		</div>
	);
}

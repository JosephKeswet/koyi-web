"use client";
import React, { useEffect, useState } from "react";
import { Search, Check } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { useStorage } from "@/frameworks/useStorage";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "@/lib/constants";

type Props = {
};

export default function ChatSidebar({}: Props) {
	const pathname = usePathname();
	const router = useRouter();
	const { getCookies, saveCookie } = useStorage(); // Destructure from the hook

	const [activeChat, setActiveChat] = useState<number | null>(null);
	const [isMobile, setIsMobile] = useState<boolean>(false);

	const chats = [
		{
		  id: 1,
		  name: "Kayode Eko",
		  lastMessage: "Hi there! I'm interested in hiring you.",
		  time: "Now",
		  avatar: "",
		  unreadCount: null,
		  status: "sent",
		},
		{
		  id: 2,
		  name: "Claire Faith",
		  lastMessage: "Are you there?",
		  time: "Now",
		  avatar: "",
		  unreadCount: 2,
		  status: null,
		},
		{
		  id: 3,
		  name: "John Doe",
		  lastMessage: "Can you help with the project?",
		  time: "1 hr ago",
		  avatar: "",
		  unreadCount: null,
		  status: "sent",
		},
		{
		  id: 4,
		  name: "Jane Smith",
		  lastMessage: "I'll get back to you on this.",
		  time: "2 hrs ago",
		  avatar: "",
		  unreadCount: null,
		  status: null,
		},
	  ];

	// Detect if the screen width is mobile
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1024)
		};

		handleResize(); // Check on inital load
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	},[])

	// Retrieve previously selected chat from cookies
	useEffect(() => {
		const savedChat = getCookies('activeChat');
		if(savedChat) {
			setActiveChat(Number(savedChat)); // Set previously selected chat
		}
	},[getCookies])

	// Set active chat based on pathname
	useEffect(() => {
		const matchChat = chats.find((chat) => pathname.includes(`room/${chat.id}`));
		if(matchChat) {
			setActiveChat(matchChat.id);
		}
	}, [pathname, chats]);

	// Handle selecting a chat and navigation
	const handleSelectChat = (chatId: number) => {
		if (isMobile) {
			router.push(`${routes.chats}/client/room/${chatId}`);
		} else {
			router.push(`${routes.chats}/client/${chatId}`);
		}

		setActiveChat(chatId); // Set as selected module
		saveCookie("activeChat", chatId.toString()); // Save the selected lesson in cookies
	}

	return (
		<div className="">
			<div className="flex-1 overflow-y-auto border-t ">
				{chats.map((chat) => (
					<div
						key={chat.id}
						onClick={() => handleSelectChat(chat.id)}
						className={`flex items-center gap-4 p-3 border-t ${
							pathname.includes(`room/${chat.id}`) ||
							activeChat === chat.id ? "bg-blue-100" : "bg-white"
						} roundedlg cursor-pointer`}
					>
						<Avatar className="w-10 h-10 rounded-full">
							<Image
								src={chat.avatar}
								alt={chat.name}
								width={10}
								height={10}
							/>
						</Avatar>
						<div className="flex-1">
							<p className="font-bold">{chat.name}</p>
							<p className="text-sm text-gray-500 line-clamp-1">
								{chat.lastMessage}
							</p>
						</div>
						<div className="flex flex-col items-center gap-1">
							<span className="text-xs text-gray-400">{chat.time}</span>
							{chat.unreadCount ? (
								<span className="text-xs text-white bg-blue-500 px-3 py1 rounded-full">
									{chat.unreadCount}
								</span>
							) : chat.status === "sent" ? (
								<Check className="text-blue-500 w-4 h-4" />
							) : null}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

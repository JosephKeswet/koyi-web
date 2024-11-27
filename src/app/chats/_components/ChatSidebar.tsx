"use client";
import React, { useState } from "react";
import { Search, Check } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

type Props = {
	onSelectChat: (chatId: string) => void;
};

export default function ChatSidebar({ onSelectChat }: Props) {
	const [activeTab, setActiveTab] = useState("myClients");

	const tabs = [
		{ id: "myClients", label: "My Clients" },
		{ id: "professionals", label: "Professionals" },
	];

	const chatList: any = {
		myClients: [
			{
				id: "kayode-eko",
				name: "Kayode-eko",
				lastMessage: "Hi there! I'm interested in hiring you.",
				time: "Now",
				avatar: "/images/client1.jpg",
				unreadCount: null,
				status: "sent",
			},
			{
				id: "claire-faith",
				name: "Claire Faith",
				lastMessage: "Are you there?",
				time: "Now",
				avatar: "/images/client2.jpg",
				unreadCount: 2,
				status: null,
			},
		],
		professionals: [
			{
				id: "john-doe",
				name: "John Doe",
				lastMessage: "Can you help with the project?",
				time: "1 hr ago",
				avatar: "/images/client3.jpg",
				unreadCount: null,
				status: "sent",
			},
			{
				id: "jane-smith",
				name: "Jane Smith",
				lastMessage: "I'll get back to you on this.",
				time: "2 hrs ago",
				avatar: "/images/client4.jpg",
				unreadCount: null,
				status: null,
			},
		],
	};

	return (
		<div className=" w-full h-full ">
			<div className="flex borderb text-sm font-semibold mb-4 p-4 lg:p-0">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`flex-1 p-4 ${
							activeTab === tab.id
								? "border-b-2 border-blue-500 text-blue-500"
								: "border-b-2 border-transparent text-gray-500"
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>

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

			<div className="flex-1 overflow-y-auto border-t ">
				{chatList[activeTab]?.map((chat: any) => (
					<div
						key={chat.id}
						onClick={() => onSelectChat(chat.id)}
						className={`flex items-center gap-4 p-3 border-t ${
							chat.status === "sent" ? "bg-white lg:bg-blue-100" : "bg-white"
						} roundedlg cursor-pointer`}
					>
						<Avatar className="w-10 h-10 rounded-full">
							<Image
								src={chat.avatar}
								alt={chat.name}
								layout='fill'
								objectFit="cover"
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

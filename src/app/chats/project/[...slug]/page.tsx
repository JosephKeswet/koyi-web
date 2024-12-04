"use client";
import React from "react";
import ChatHeader from "../../_components/ChatHeader";
import ChatMessage from "../../_components/ChatMessage";
import ChatInputBox from "../../_components/ChatInputBox";

type Props = {};

export default function Page({}: Props) {
	const projectMessages = [
		{
			content: "I'd like to know more about your skills for my project.",
			time: "1:15 PM",
			isSender: false,
		},
		{
			content: "Sure! Let me know the requirements.",
			time: "1:30 PM",
			isSender: true,
		},
	];

	return (
		<div className="flex flex-col flex-1">
			<ChatHeader />
			<div className="flex flex-col flex-1 overflow-y-auto p-4">
				{projectMessages.map((msg, idx) => (
					<ChatMessage
						key={idx}
						message={msg}
						isSender={msg.isSender}
					/>
				))}
			</div>
			<ChatInputBox />
			{/* <BottomActionButtons /> */}
		</div>
	);
}

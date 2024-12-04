"use client";
import React from "react";

type Props = {
	message: { content: string; time: string };
	isSender: boolean;
};

export default function ChatMessage({ message, isSender }: Props) {
	return (
		<div
			className={`flex w-full mb-2 ${
			isSender ? "justify-end" : "justify-start"
			}`}
		>
		<div
			className={`${
				isSender
					? "bg-white text-black"
					: "bg-blue-100 text-black"
			} max-w-xs 2xlmax-w-[400px] p-3 rounded-lg shadow-md mb-4`}
			style={{ minWidth: "320px" }}
		>
			<p className="mb-1">{message.content}</p>
			<div className='flex items-center justify-end'>
			<div className="text-right text-xs text-gray-500">{message.time}</div>
			{(isSender || !isSender) && (
				<div className="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-4 h-4 text-blue-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5 13l4 4L19 7"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-4 h-4 text-blue-500 -ml-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
			)}
		</div>
		</div>
		</div>
	);
}

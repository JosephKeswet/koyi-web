import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
	return (
		<div className="p-8">
			<h1 className="text-2xl font-bold mb-4">Chats Overview</h1>
			<div>
				<Link
					href="/chat/room"
					className="block mb-4 p-4 border rounded-md shadow-md hover:bg-gray-100"
				>
					Chat with Kayode Eko
				</Link>
				<Link
					href="/chat/project/some-project-slug"
					className="block mb-4 p-4 border rounded-md shadow-md hover:bg-gray-100"
				>
					Project Discussion - Some Project
				</Link>
			</div>
		</div>
	);
}

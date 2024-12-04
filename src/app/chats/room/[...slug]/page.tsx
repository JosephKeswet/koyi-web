"use client";
import Link from "next/link";
import React from "react";
import ChatRoom from "../../_components/ChatRoom";
import { useParams } from "next/navigation";

type Props = {};

export default function Page({}: Props) {
	const params = useParams();

	return (
		<div className="">
			<div className="flex flex-col h-full">
				{params.slug[1]}
				<ChatRoom />
			</div>
		</div>
	);
}

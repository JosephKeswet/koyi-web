"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import ChatHeader from "../_components/ChatHeader";
import ChatInputBox from "../_components/ChatInputBox";
import ChatMessage from "../_components/ChatMessage";
import { PhoneMissed } from "lucide-react";
import ChatRoom from "../_components/ChatRoom";

type Props = {}

export default function Page() {
  const params = useParams();

  return (
    <div className="flex flex-col h-full">
      {params.slug[1]}
    <ChatRoom />
    </div>
  );
}

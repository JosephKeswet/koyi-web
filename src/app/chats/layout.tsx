"use client";
import React, { useState } from "react";
import ChatRoom from "./room/page";
import ChatSidebar from "./_components/ChatSidebar";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [activeChat, setActiveChat] = useState<string | null>(null);

  const handleChatSelect = (chatId: string) => {
    setActiveChat(chatId);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-white border-r">
        <ChatSidebar onSelectChat={handleChatSelect} />
      </div>
      <div className="flex-1 bg-white">
        {activeChat ? (
          <ChatRoom roomId={activeChat} />
        ) : (
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Select a chat to start messaging</h1>
          </div>
        )}
      </div>
    </div>
  );
}

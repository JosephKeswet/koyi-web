"use client";
import React from "react";
import BottomActionButtons from "../_components/BottomActionButtons";
import ChatHeader from "../_components/ChatHeader";
import ChatInputBox from "../_components/ChatInputBox";
import ChatMessage from "../_components/ChatMessage";
import { PhoneMissed } from "lucide-react";

type Props = {
  roomId: string;
  message: [{
    content: string;
    time: string;
    isSender: boolean;
    type: "message" | "notification";
  }]
};

export default function ChatRoom({ roomId, message }: Props) {
  const messages = [
    { content: "Hi there! I'm interested in hiring you for your professional skills, like your portfolio and feel you're a good fit.", time: "12:25 PM", isSender: false, type: "message" },
    { content: "Glad you reached out, how can I help you?", time: "12:30 PM", isSender: true, type: "message" },
    { content: "Missed a call at 5:12 PM", time: "", type: "notification" },
  ];

  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex-shrink-0">
        <ChatHeader roomId={roomId} />
      </div>
      <div className="flex flex-col flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="flex justify-center mb-4 text-sm text-gray-600 bgwhite rounded-full px-2 py-1">April 5</div>
          {messages.map((msg, idx) => (
          msg.type === "message" ? (
            <ChatMessage key={idx} message={msg} isSender={msg.isSender} />
          ) : (
            <div key={idx} className="flex items-center self-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-lg shadow-md mb-4">
              <PhoneMissed className="w-5 h-5" />
              <span>{msg.content}</span>
            </div>
          )
        ))}
          <div className="flex justify-center mb-4 text-sm text-gray-600 bgwhite rounded-full px-2 py-1">Today</div>
        </div>
        <div className="flex-shrink-0">
        <ChatInputBox />
      </div>
    </div>
  );
}

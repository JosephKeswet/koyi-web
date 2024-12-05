"use client";

import React from "react";
import ChatHeader from "../_components/ChatHeader";
import ChatInputBox from "../_components/ChatInputBox";
import ChatMessage from "../_components/ChatMessage";
import { PhoneMissed } from "lucide-react";

export default function ChatRoom() {
  const messages = [
    {
      content:
        "Hi there! I'm interested in hiring you for your professional skills, like your portfolio and feel you're a good fit.",
      time: "12:25 PM",
      date: "April 5",
      isSender: false,
      type: "message",
    },
    {
      content: "Are you available?",
      time: "12:26 PM",
      date: "April 5",
      isSender: false,
      type: "message",
    },
    {
      content: "Glad you reached out, how can I help you?",
      time: "12:30 PM",
      date: "Today",
      isSender: true,
      type: "message",
    },
    // {
    //   content: "...",
    //   time: "12:30 PM",
    //   date: "Today",
    //   isSender: true,
    //   type: "message",
    // },
    { content: "Missed a call at 5:12 PM", time: "", date: "Today", type: "notification" },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0">
        <ChatHeader />
      </div>
      <div className="flex flex-col flex-1 lg:p-4 overflow-y-auto bg-gray-50">
        {messages.map((msg, idx) => {
          const showDate =
            idx === 0 || messages[idx - 1].date !== msg.date;

          return (
            <div className='space-y-4' key={idx}>
              {showDate && (
                <div className="flex justify-center mb-6 text-sm">
                  <p className="px-3 py-1 bg-white rounded-full">
                    {msg.date}
                  </p>
                </div>
              )}
              {msg.type === "message" ? (
                <ChatMessage
                  key={idx}
                  message={msg}
                  isSender={msg.isSender!}
                />
              ) : (
                <div
                  key={idx}
                  className="flex items-center justify-center"
                >
                  <div className='flex gap-2 px-3 py-1 bg-red-100 text-red-600 rounded-full'>
                  <PhoneMissed className="w-5 h-5" />
                  <p>{msg.content}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex-shrink-0">
        <ChatInputBox />
      </div>
    </div>
  );
}

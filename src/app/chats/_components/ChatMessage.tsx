"use client";
import React from "react";

type Prop = {}

export default function ChatMessage({ message, isSender }: Prop) {
  return (
    <div
      className={`${
        isSender ? "self-end bg-white text-black" : "self-start bg-blue-100 text-black"
      } max-w-xs p-3 rounded-lg mb-4 shadow-md`}
      style={{ minWidth: "150px" }}
    >
      <p className="mb-1">{message.content}</p>
      <div className="text-right text-xs text-gray-500">{message.time}</div>
      {isSender && (
        <div className="flex justify-end mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </div>
  );
}

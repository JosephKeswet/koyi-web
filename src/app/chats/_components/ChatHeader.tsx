"use client";
import React from "react";
import { Phone } from "lucide-react";

type Props = {
  roomId: string;
};

export default function ChatHeader({ roomId }: Props) {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center gap-4">
        <img src={`/images/${roomId}.jpg`} alt={roomId} className="w-10 h-10 rounded-full" />
        <div>
          <h2 className="text-lg font-bold">{roomId.replace("-", " ")}</h2>
        </div>
      </div>
      <div>
      <Phone className="h-6 w-6 text-gray-600" />
      </div>
    </div>
  );
}
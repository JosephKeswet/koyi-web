"use client";
import React from "react";
import { Search, Check} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";


type Props = {
  onSelectChat: (chatId: string) => void;
};

export default function ChatSidebar({ onSelectChat }: Props) {
  const tabs = [
    { id: "myClients", label: "My Clients" },
    { id: "professionals", label: "Professionals" },
  ];

  return (
    <div className="p-4 w-full h-full">
      <div className="flex border-b text-sm font-semibold mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 p-4 ${
              tab.id === "myClients" ? "border-b-2 border-blue-500 text-blue-500" : "border-b-2 border-transparent text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search messages"
          className="w-full px-4 py-2 border border-gray-300 rounded-md pl-10"
        />
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
          <Search className="text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="space-y-4">
        <div onClick={() => onSelectChat("kayode-eko")} className="flex items-center gap-4 p-3 bg-blue-100 rounded-lg cursor-pointer">
          <Avatar className="w-10 h-10 rounded-full">
            <img src="/images/client1.jpg" alt="Client 1" />
          </Avatar>
          <div className="flex-1">
            <p className="font-bold">Kayode Eko</p>
            <p className="text-sm text-gray-500">Glad you reached out</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-gray-400">Now</span>
            <Check className="text-blue-500 w-4 h-4" />
          </div>
        </div>
        <div onClick={() => onSelectChat("ben-ahmed")} className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg cursor-pointer">
          <Avatar className="w-10 h-10 rounded-full">
            <img src="/images/client2.jpg" alt="Client 2" />
          </Avatar>
          <div className="flex-1">
            <p className="font-bold">Ben Ahmed</p>
            <p className="text-sm text-gray-500">Are you there?</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-gray-400">Now</span>
            <span className="text-xs text-blue-500 bg-blue-100 px-2 py-1 rounded-full">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

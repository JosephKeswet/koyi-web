"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, Phone } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

type Props = {
  roomId: string;
  onBackToSidebar: () => void; // New prop to handle the back navigation
};

export default function ChatHeader({ roomId, onBackToSidebar }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to determine if the screen is in mobile view
    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center gap-4">
        {isMobile && (
          <button onClick={onBackToSidebar} className="flex items-center justify-center w-[32px] h-[32px] bg-gray-200 rounded-full">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}
        <Avatar className="w-10 h-10 rounded-full">
          <img src="/images/client1.jpg" alt="Client 1" />
        </Avatar>
        <div>
          <h2 className="text-lg font-bold">Oyale John</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="px-2 py-1 text-sm bg-gray-200 rounded-full">Swift</span>
            <span className="px-2 py-1 text-sm bg-gray-200 rounded-full">React Native</span>
          </div>
        </div>
      </div>
      <button className="flex items-center justify-center w-[32px] h-[32px] bg-gray-200 rounded-full">
        <Phone className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}

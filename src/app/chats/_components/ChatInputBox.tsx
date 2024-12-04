"use client";
import React, { useState } from "react";
import { Plus, Mic, MessageSquare, SendHorizontal } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CustomDialog from "./CustomDialog";

type Props = {}

export default function ChatInputBox({}: Props) {
  const [showButtons, setShowButtons] = useState(false);
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  const actionButtons = [
    { label: "Scope of Work", id: "scopeOfWork", icon: <Plus className="w-4 h-4" /> },
    { label: "Invoice", id: "invoice", icon: <Plus className="w-4 h-4" /> },
    { label: "Timeline", id: "timeline", icon: <Plus className="w-4 h-4" /> },
  ];

  return (
    <div className="border-t p-4 bg-white">
      <div className={`flex items-center gap-2 bg-gray-100 w-full rounded-full p-2 ${showButtons ? "justify-start" : ""}`}>
        <button
          onClick={() => setShowButtons((prev) => !prev)}
          className="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full shrink-0"
        >
          {showButtons ? <MessageSquare className="w-5 h-5 text-gray-600" /> : <Plus className="w-5 h-5 text-gray-700" />}
        </button>
        {showButtons ? (
          <div className="flex items-center gap-2 overflow-x-auto w-60 lg:w-full">
          {actionButtons.map((button) => (
            <CustomDialog
              key={button.id}
              button={button}
              activeDialog={activeDialog}
              setActiveDialog={setActiveDialog}
            />
          ))}
        </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="Write your message"
              className="flex-1 px-4 py-2 bg-transparent outline-none"
            />
            <div className='flex -ml-9'>
            <button className="flex items-center justify-center w-8 h-8 text-gray-500">
              <Mic className="w-5 h-5 text-gray-600" />
            </button>
            <button className="flex shrink-0 items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full">
              <SendHorizontal className="w-5 h-5" />
            </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

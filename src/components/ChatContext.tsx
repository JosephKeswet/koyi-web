"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type ChatContextType = {
  isChatRoom: boolean;
  setIsChatRoom: (value: boolean) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [isChatRoom, setIsChatRoom] = useState<boolean>(false);

  return (
    <ChatContext.Provider value={{ isChatRoom, setIsChatRoom }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  console.log("useChatContext invoked", context); 
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
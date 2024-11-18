"use client";
import React from "react";

export default function BottomActionButtons() {
  const buttons = [
    { label: "Scope of Work", href: "#" },
    { label: "Invoice", href: "#" },
    { label: "Timeline", href: "#" },
  ];

  return (
    <div className="flex justify-between items-center p-4 bg-white border-t">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-full"
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

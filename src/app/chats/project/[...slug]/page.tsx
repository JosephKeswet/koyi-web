"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import ChatRoom from "../../_components/ChatRoom";
import Link from "next/link";

type Props = {};

export default function Page() {
  const params = useParams();

  const members = [
    { name: "Banet Claireson", role: "Designer", image: "" },
    { name: "Banet Claireson", role: "Designer", image: "" },
    { name: "Banet Claireson", role: "Designer", image: "" },
    { name: "Banet Claireson", role: "Designer", image: "" },
    { name: "Banet Claireson", role: "Designer", image: "" },
    { name: "Banet Claireson", role: "Designer", image: "" },
  ];

  return (
    <div className="grid grid-cols-3 h-full">
      <div className="col-span-2 flex flex-col h-full">
        {params.slug[1]}
        <ChatRoom />
      </div>
      <div className="col-span-1 h-full">
        <div className="mx-auto flex flex-col h-full">
          <div className="flex flex-col items-center border-b py-4">
            <div className="bg-gray-300 w-20 h-20 rounded-full flex items-center justify-center text-3xl">
              K
            </div>
            <h2 className="mt-4 text-xl font-semibold">Koyi Project</h2>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex -space-x-2">
                {members.slice(0, 3).map((member, index) => (
                  <img
                    key={index}
                    className="w-8 h-8 rounded-full bg-gray-300"
                    src={member.image}
                    alt={member.name}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                +{members.length - 3} members
              </p>
            </div>
          </div>

          <div className="py-4 border-b p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Media</h3>
              <Link href="#" className="text-blue-500 text-sm">
                See all
              </Link>
            </div>
            <div className="flex space-x-2 mt-2">
              <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
              <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
              <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
            </div>
          </div>

          <div className="py-4 border-b p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Members</h3>
                <a href="#" className="text-blue-500 text-sm">
                  Share invite
                </a>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex -space-x-2">
                  {members.slice(0, 3).map((member, index) => (
                    <img
                      key={index}
                      className="w-8 h-8 rounded-full bg-gray-300"
                      src={member.image}
                      alt={member.name}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  +{members.length - 3} members
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {members.map((member, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={member.image}
                      alt={member.name}
                    />
                    <span>{member.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{member.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

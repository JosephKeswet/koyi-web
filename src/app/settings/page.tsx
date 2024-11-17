"use client";
import DashboardHeader from "@/components/global/DashboardHeader";
import React, { useState } from "react";
import { icons } from "@/lib/constants/icons";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { routes } from "@/lib/constants";

type Props = {};

export default function Page({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openRegistrationModal = () => {
    setIsModalOpen(true);
  };

  const { ChatIcon } = icons;
  return (
    <div>
      <DashboardHeader>
        <DashboardHeader.MainHeader
          searchFunc={() => {}}
          downloadXLX={() => {}}
          title="Settings"
          createFunction={openRegistrationModal}
        >
          <DashboardHeader.HeaderText />
          <DashboardHeader.HeaderContainer>
            <DashboardHeader.HeaderSearch />
            <div className="hidden lg:flex items-center gap-4">
              <div className="ml-0 lg:ml-[40px]">
                <ChatIcon color="#95989E" />
              </div>
              <DashboardHeader.HeaderAvatarProfile />
            </div>
          </DashboardHeader.HeaderContainer>
        </DashboardHeader.MainHeader>
      </DashboardHeader>

      <div className="p-3 lg:p-[50px] flex flex-col gap-[60px]">
        <div className="flex items-center justify-between">
          <Link href={routes.home} className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full">
            <ChevronLeft />
          </Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Search available jobs</button>
        </div>

        <div className="bg-white rounded-lg flex flex-col justify-between w-full md:w-7/12">
          <div className="flex flex-col gap-4">
            <h2 className="text-sm">Enter your information to become a professional with [xyz]</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue="David"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue="Okoro"
                />
              </div>
              <div>
                <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-2">
                  About/Bio
                </label>
                <textarea
                  id="about"
                  name="about"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue="I am a mobile developer who has built and shipped mobile applications for fintech, social media communication, image search engines and a ticketing app for a bus service amongst others."
                />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue={2}
                />
              </div>
              <div>
                <label htmlFor="fee" className="block text-sm font-medium text-gray-700 mb-2">
                  Fee
                </label>
                <input
                  type="text"
                  id="fee"
                  name="fee"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue="₦100,000"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-8">
            <button className="bg-primary-light text-primary px-6 py-3 rounded-md font-semibold">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

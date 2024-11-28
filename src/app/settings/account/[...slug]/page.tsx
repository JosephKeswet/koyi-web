"use client";
import DashboardHeader from "@/components/global/DashboardHeader";
import React, { useState } from "react";
import { icons } from "@/lib/constants/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { SettingsProfileTabs, SettingsSectionTab } from "@/lib/constants/enums";
import SectionTab from "../_components/SectionTab";
import Image from "next/image";
import Link from "next/link";
type Props = {};

export default function Page({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();
  const params = useParams();
  const sectionField = params?.slug;
  const tabField = params?.slug[1] ? params.slug[1] : "bio";
  const openRegistrationModal = () => {
    setIsModalOpen(true);
  };
console.log(sectionField)
  const sectionTab = [
    {routeKey: "profile", value: SettingsSectionTab.Profile},
    {routeKey: "professional-profile", value: SettingsSectionTab.ProfessionalProfile},
    {routeKey: "general", value: SettingsSectionTab.General},


  ]
 
  const tab = [
    { routeKey: "bio", value: SettingsProfileTabs.Bio },
    { routeKey: "portfolio", value: SettingsProfileTabs.Portfolio },
    { routeKey: "certificate", value: SettingsProfileTabs.Certificate },
    { routeKey: "reviews", value: SettingsProfileTabs.Reviews}
  ];

  const { ChatIcon } = icons;
  return (
    <div className="bg-white h-screen flex flex-col">
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

      <div className="p-3 md:px-[50px]">
        <div className="max-w-5xl pt-6">
          <SectionTab 
            field={sectionField} 
            tabs={sectionTab} 
            defaultTab={sectionTab[0].routeKey} 
          />
        </div>

      <div className=" h-60 w-full bg-black mt-4">
        <Image
          src="/images/cover-image.jpg"
          alt="Professional Cover"
          width={100}
          height={100}
        />
        <Link href='#' className="absolute top-4 right-4 text-white">
          Edit
        </Link>
      </div>

      <div className="max-w-5xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-24 h-24">
            <Image
              src=""
              alt="Profile Picture"
              width={100}
              height={100}
            />
            </div>
            <div className="ml-6 flex-1">
              <h1 className="text-xl font-semibold">Cyril John</h1>
              <p className="text-sm text-gray-600">3 years</p>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Swift
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  React Native
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">From ₦100,000</p>
              <Button variant="default" className="mt-2">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 md:px-0 md:pt-6">
        <SectionTab 
          field={tabField} 
          tabs={tab}
          defaultTab={tab[0].routeKey}
        />
      </div>
    </div>
    </div>
  );
}

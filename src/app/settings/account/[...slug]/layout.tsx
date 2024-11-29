"use client";
import DashboardHeader from "@/components/global/DashboardHeader";
import React, { useState } from "react";
import { icons } from "@/lib/constants/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { SettingsProfileTabs, SettingsSectionTab } from "@/lib/constants/enums";
import Image from "next/image";
import Link from "next/link";
import SectionTab from "../_components/SectionTab";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
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

      <div className="p-3 md:px-[50px] w-full">
        <div className="max-w-5xl pt-6">
          <SectionTab 
            field={sectionField} 
            tabs={sectionTab} 
            defaultTab={sectionTab[0].routeKey} 
          />
        </div>

      <div>{children}</div>
        </div>
    </div>
  );
}

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

      <div className="p-3 md:px-[50px] w-full">
        <div className="max-w-5xl pt-6">
          <SectionTab 
            field={sectionField} 
            tabs={sectionTab} 
            defaultTab={sectionTab[0].routeKey} 
          />
        </div>

      <div className=" h-60 w-full bg-black mt-4">
        <Image
          src=""
          alt="Professional Cover"
          width={1000}
          height={1000}
          className='object-cover'
        />
        <Link href='#' className="absolute top-4 right-4 text-white">
          Edit
        </Link>
      </div>

      <div className="w-full">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-24 h-24 rounded-full bg-gray-50">
            <Image
              src=""
              alt="Profile Picture"
              width={2000}
              height={4000}
              className='rounded-full'
            />
            </div>
            <div className="ml-6 flex-1">
              <div className='flex gap-4'>
              <h1 className="text-xl font-semibold">Cyril John</h1>
              <p className="text-sm text-gray-600">3 years</p>
              </div>
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

      <div className="w-full py-6">
        {/* {tabField === "bio" && ( */}
          <div className="bg-white p-6 rounded-lg shadow-md"> 
            <h2 className="text-lg font-semibold mb-4">
              Build your custom mobile application and upload to all mobile stores.
            </h2>
            <p className="text-sm text-gray-600">
              I am a mobile developer who has built and depoloyed mobile applications for fintech, social media communication, fitness search engines, and a booking application for a bus service amongst others.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold">Frameworks:</h3>
              <p className="text-sm text-gray-600">
                - MERN, MEAN <br />
                - Laravel, Symfony, Express <br />
                - Firebase, Symphony, Express
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Frameworks:</h3>
              <p className="text-sm text-gray-600">
                - Extensive Experience <br />
                - Client Satisfaction <br />
                - 24/7 Availability <br />
                - Original Work <br />
                - App Store Upload
              </p>
            </div>
          </div>
         {/* )} */}
{/* {tabField === "portfolio" && ( */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">My Portfolio</h3>
            <div className="flex overflow-x-scroll space-x-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="min-w-[300px] flex relative">
                  <Image
                    src=""
                    alt="Portfolio"
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                  <div className='absolute bottom-4 right-3'>
                  <p className="p-1 text-sm text-gray-600 rounded-full bg-gray-300 ">website.com</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        {/* )} */}
        {/* {tabField === "certificate" && ( */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">My Certificates</h3>
            <div className="flex overflow-x-scroll space-x-4">
            {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="min-w-[300px] flex relative">
                  <Image
                    src=""
                    alt="Certificates"
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                  <div className='absolute bottom-4 right-3'>
                  <p className="p-1 text-sm text-gray-600 rounded-full bg-gray-300 ">website.com</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        {/* )} */}
        {/* {tabField === "reviews" && ( */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Reviews</h3>
            <p className="text-sm text-gray-600">
              No reviews available yet. Check back later!
            </p>
          </div>
        {/* )} */}
      </div>
    </div>
    </div>
  );
}

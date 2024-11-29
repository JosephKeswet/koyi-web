"use client";
import DashboardHeader from "@/components/global/DashboardHeader";
import React, { useState } from "react";
import { icons } from "@/lib/constants/icons";
import { useParams, usePathname, useRouter } from "next/navigation";
import { SettingsProfileTabs, SettingsSectionTab } from "@/lib/constants/enums";
import SectionTab from "../account/_components/SectionTab";
import FilterTableItem from "./_components/FilterTableItem";
import { DataTable } from "./_components/tableInterface/DataTable";
import { columns } from "./_components/tableInterface/Column";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SortSelection } from "./_components/SortSelection";
import SearchTable from "./_components/SearchTable";
type Props = {};

export default function Page({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const sectionField = params?.slug;
  const tabField = params?.slug;
  const splitPath = pathname.split('/')
  const pageName = splitPath[2]
  const openRegistrationModal = () => {
    setIsModalOpen(true);
  };
console.log(sectionField)
  const sectionTab = [
    {routeKey: "profile", value: SettingsSectionTab.Profile},
    {routeKey: "professional-profile", value: SettingsSectionTab.ProfessionalProfile},
    {routeKey: "general", value: SettingsSectionTab.General},
    {routeKey: "payment", value: SettingsSectionTab.Payment}
  ]

  const data = [
    {
      transactionId: "12367654",
      withdrawalAmount: "#40,000",
      paymentMethod: "Firstbank PLC",
      accountDetails: [
        {
          accountNumber: "8765432256",
          accountName: "Okoro Damian John"
        }
      ],
      status: "Successful",
      dateInitiated: "Oct 5, 2034",
    },
    {
      transactionId: "12367654",
      withdrawalAmount: "#40,000",
      paymentMethod: "Firstbank PLC",
      accountDetails: [
        {
          accountNumber: "8765432256",
          accountName: "Okoro Damian John"
        }
      ],
      status: "Successful",
      dateInitiated: "Oct 5, 2034",
    },
      {
      transactionId: "12367654",
      withdrawalAmount: "#40,000",
      paymentMethod: "Firstbank PLC",
      accountDetails: [
        {
          accountNumber: "8765432256",
          accountName: "Okoro Damian John"
        }
      ],
      status: "Successful",
      dateInitiated: "Oct 5, 2034",
    },
  ]

  const { ChatIcon } = icons;
  return (
    <div className="bg-white h-screen flex flex-col overflow-hidden">
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

      <div className="p-3 md:px-[50px] w-full space-y-2">
        <div className="space-y-6">
        <div className="text-nowrap shrink-0 pt-6">
          <SectionTab 
            field={sectionField} 
            tabs={sectionTab} 
            defaultTab={sectionTab[0].routeKey} 
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-lg font-bold">{pageName}</h1>

          <div className="flex justify-between items-center border border-gray-300 p-4 rounded-lg">
            <div className='space-y-1'>
            <p className="text-xs">Current Balance</p>
            <p className="text-xl font-bold">#250,000</p>
            <p className="text-xs">As of 4.20pm</p>
            </div>
            <div>
              <Button />
            </div>
          </div>
        </div>

        <div className="flex justify-start gap-4">
            <FilterTableItem text="All" />
            <FilterTableItem text="Successful" />
            <FilterTableItem text="Ongoing" />
            <FilterTableItem text="Cancelled" />
        </div>
        </div>
        <Card>
          <div className='flex justify-between items-center gap-6 md:gap-0 px-4 space-y-4 w-full overflow-y-auto'>
            <p className="text-nowrap shrink-0">Transaction history</p>
            <div className='flex gap-2'>
            <SearchTable />
            <SortSelection />
            </div>
          </div>
        <DataTable columns={columns} data={data} />
        </Card>
      </div>
    </div>
  );
}

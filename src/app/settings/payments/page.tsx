"use client";
import DashboardHeader from "@/components/global/DashboardHeader";
import React, { useState } from "react";
import { icons } from "@/lib/constants/icons";
import { useParams, usePathname } from "next/navigation";
import { SettingsSectionTab } from "@/lib/constants/enums";
import SectionTab from "../account/_components/SectionTab";
import FilterTableItem from "./_components/FilterTableItem";
import { DataTable } from "./_components/tableInterface/DataTable";
import { columns } from "./_components/tableInterface/Column";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SortSelection } from "./_components/SortSelection";
import SearchTable from "./_components/SearchTable";
import { Plus } from "lucide-react";
type Props = {};

export default function Page({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);


  const pathname = usePathname();
  const splitPath = pathname.split('/');
  const pageName = splitPath[2];
  const params = useParams();
  const sectionField = params?.slug;

  const openRegistrationModal = () => {
    setIsModalOpen(true);
  };
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

  const handleButtonClick = () => {
    setIsDialogOpen(true);
    // setIsSuccess(false);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setIsSuccess(false);
  }

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
              <Button 
                className="bg-primary-light text-primary" 
                variant='outline' 
                onClick={handleButtonClick}
              >
                Withdraw
              </Button>
              {isDialogOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            {isSuccess ? (
                            <div className="bg-white p-6 rounded-md shadow-lg w-60 md:min-w-[150px]">
              <div className="text-center">
                <h2 className="text-lg font-semibold">Withdrawal Successful</h2>
                <p className="mt-4">Your withdrawal has been successfully processed.</p>
                <Button
                  className="mt-6 bg-primary text-white"
                  variant="outline"
                  onClick={handleCloseDialog}
                >
                  Close
                </Button>
              </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-md shadow-lg w-90 md:min-w-[500px]">
              <div className="space-y-6">
                <h2 className="text-lg font-semibold">Withdraw</h2>
                <p>Please fill out the input boxes to withdraw.</p>
                <div>
                  <p>Available to withdraw</p>
                  <p>#250,000</p>
                </div>
                <div className="flex gap-3 p-2 border rounded-lg text-primary">
                  <Plus /> <span>Add bank account</span>
                </div>

                <div className="mt-4 flex justify-between gap-4">
                  <Button onClick={handleCloseDialog} variant="outline">
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      setIsSuccess(true);
                    }}
                    variant="default"
                    className="bg-primary opacity-50 text-white px-6"
                  >
                    Withdraw
                  </Button>
                </div>
              </div>
              </div>
            )}
          </div> 
      )}
            </div>
          </div>
        </div>

        <div className="flex justify-start gap-4">
            <FilterTableItem text="All" route={""} field={""} />
            <FilterTableItem text="Successful" route={""} field={""} />
            <FilterTableItem text="Ongoing" route={""} field={""} />
            <FilterTableItem text="Cancelled" route={""} field={""} />
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

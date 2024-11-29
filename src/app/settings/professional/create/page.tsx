"use client";
import DashboardHeader from "@/components/global/DashboardHeader";
import React, { useState } from "react";
import { icons } from "@/lib/constants/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, ChevronLeft } from "lucide-react";

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

      <div className="w-full md:w-7/12 gap-[60px] p-3 lg:p-[50px]">

      <div className="flex items-center gap-3 mb-6">
        <Button variant="ghost" className="p-0">
          <ChevronLeft size={24} />
        </Button>
        <h1 className="text-xl font-medium">Enter your information to become a professional with Koyi.</h1>
      </div>

      <div className="flex items-center justify-between border-b pb-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">1</span>
          <span className="font-medium">Personal Information</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">2</span>
          <span className="font-medium">Skills</span>
        </div>
      </div>

      <form>

        <div className="mb-6">
          <label htmlFor="role" className="block text-sm font-medium mb-2">
            Role
          </label>
          <Input id="role" type="text" placeholder="Select a role" />
        </div>

        <div className="mb-6">
          <label htmlFor="skills" className="block text-sm font-medium mb-2">
            Skills
          </label>
          <div className="flex gap-2 items-center">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Swift</span>
            <Button variant="outline" size="sm" className="px-3">
              <Plus size={16} />
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <Card className="border-dashed border-2 h-48 flex items-center justify-center text-center">
            <CardContent>
              <p className="text-gray-500 text-sm">Add an image of your work and/or a link to view it</p>
              <div className="mt-2 text-gray-400">
                <Plus size={32} />
              </div>
            </CardContent>
          </Card>
          <Input id="website" type="text" placeholder="website.com" className="mt-4" />
        </div>

        <div className="mb-6">
          <Button variant="ghost" className="flex items-center gap-2 text-blue-500">
            <Plus size={16} />
            Add a project
          </Button>
        </div>

        <div className="mb-6">
          <label htmlFor="certificate" className="block text-sm font-medium mb-2">
            Certificate Title
          </label>
          <Input id="certificate" type="text" placeholder="E.g. Microsoft Certified Associate Security" className="mb-4" />

          <label htmlFor="organization" className="block text-sm font-medium mb-2">
            Issuing Organization
          </label>
          <Input id="organization" type="text" placeholder="E.g. Microsoft" className="mb-4" />

          <label htmlFor="issueDate" className="block text-sm font-medium mb-2">
            Issue Date
          </label>
          <Input id="issueDate" type="date" placeholder="Issue Date" className="mb-4" />

          <label htmlFor="credentialUrl" className="block text-sm font-medium mb-2">
            Credential URL
          </label>
          <Input id="credentialUrl" type="url" placeholder="Credential URL" className="mb-4" />

          <Button variant="ghost" className="flex items-center gap-2 text-blue-500">
            <Plus size={16} />
            Add a certificate
          </Button>
        </div>

        <div className="flex justify-between items-center mt-8">
          <Button variant="outline">Previous Page</Button>
          <Button>Create Profile</Button>
        </div>
      </form>
    </div>
    </div>
  );
}

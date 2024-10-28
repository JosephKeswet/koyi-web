'use client';

import React from 'react';
import FieldNavItem from './_components/FieldNavItem';
import { routes } from '@/lib/constants';
import DashboardHeader from '@/components/global/DashboardHeader';
import { icons } from '@/lib/constants/icons';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import SkillsTab from './_components/SkillTabs';
import { useParams } from 'next/navigation';

type Props = {
    children: React.ReactNode;
  
};

export default function Layout({children}: Props) {
  const { ChatIcon, LearnIcon, GetHiredIcon, HireIcon } = icons;
  const params = useParams();

  // Safely access the first part of `slug` if it exists
  const field = params?.slug ? params.slug[0] : '';

  return (
    <div>
      <DashboardHeader>
        <DashboardHeader.MainHeader
          searchFunc={() => {}}
          downloadXLX={() => {}}
          title="Learn"
          createFunction={() => {}}
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
      <div className="p-3 lg:p-[50px] flex flex-col gap-[32px]">
        <Link
          href={routes.home}
          className="flex items-center justify-center w-[42px] h-[42px] bg-primary-grey rounded-full"
        >
          <ChevronLeft />
        </Link>
        <div className="w-full border p-1 flex items-center gap-2 rounded-[6px] overflow-x-auto">
          <FieldNavItem route={`${routes.explore_fields}/mobile`} text="Mobile Dev" field='mobile' />
          <FieldNavItem route={`${routes.explore_fields}/backend`} text="Backend Dev" field='backend' />
          <FieldNavItem route={`${routes.explore_fields}/frontend`} text="Frontend Dev" field='frontend' />
          <FieldNavItem route={`${routes.explore_fields}/design`} text="UI/UX Design" field='design'/>
        </div>
      {children}
      </div>
    </div>
  );
}

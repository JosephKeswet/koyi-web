'use client'
import { routes } from '@/lib/constants';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

export default function SkillsTab({field}:{field: string}){
    const params:{slug:string} = useParams()
      // Safely access the first part of `slug` if it exists
  const slug = params?.slug ? params.slug[0] : '';
  const [activeTab, setActiveTab] = useState(slug);

  const tabs = ['Flutter', 'React', 'Vue']; // Add as many tabs as you need

  return (
    <div className="flex items-center w-full border-b pt-3 px-[20px]">
      {tabs.map((tab) => (
        <Link href={`${routes.browse_skills}/${field}/${tab}`}
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex items-center justify-center px-4 py-2 cursor-pointer ${
            activeTab === tab ? 'border-b-2 border-primary' : ''
          }`}
        >
          <p className={`${activeTab === tab ? 'text-primary' : 'text-gray-500'}`}>
            {tab}
          </p>
        </Link>
      ))}
    </div>
  );
};


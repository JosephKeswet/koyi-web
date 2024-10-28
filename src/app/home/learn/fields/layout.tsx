"use client"
import React from 'react'
import SkillsTab from '../_components/SkillTabs'
import { useParams } from 'next/navigation';

type Props = {}

export default function Layout({}: Props) {
    const params = useParams();
  const field = params?.slug ? params.slug[0] : '';

  return (
    <div>
        <SkillsTab field={field} />
    </div>
  )
}
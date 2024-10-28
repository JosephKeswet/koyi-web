import React from "react";
import SkillsTab from "../../_components/SkillTabs";

type Props = {};

export default function page({ params }: { params: { slug: string } }) {
  // Safely access the first part of `slug` if it exists
  return <div>
    
    Page: {params.slug}</div>;
}

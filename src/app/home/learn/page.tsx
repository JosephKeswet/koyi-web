"use client";
import DashboardHeader from "@/components/global/DashboardHeader";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/lib/ProfileContext";
import { useRouter } from "next/navigation";
import { icons } from "@/lib/constants/icons";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { routes } from "@/lib/constants";
import FieldNavItem from "./_components/FieldNavItem";

type Props = {};

export default function Page({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openRegistrationModal = () => {
    setIsModalOpen(true);
  };

  return <div></div>;
}

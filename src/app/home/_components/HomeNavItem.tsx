import Link from "next/link";
import React from "react";

type Props = {
  icon: any;
  text: string;
  route: string;
};

export default function HomeNavItem({ icon, text, route }: Props) {
  return (
    <Link
      href={route}
      className="w-full h-[80px] px-8 py-6 border flex items-center gap-[8px] rounded-sm"
    >
      {icon}
      <span className="text-lg text-primary-black font-bold">{text}</span>
    </Link>
  );
}

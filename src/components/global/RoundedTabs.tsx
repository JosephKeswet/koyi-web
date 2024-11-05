"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";

type Tab = {
  routeKey: string;
  name: string;
};

type TabsProps = {
  tabs: Tab[];
  basePath: string;
};

const RoundedTabs: React.FC<TabsProps> = ({ tabs, basePath }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Redirect to the first tab if the path doesn’t match any routeKey
  useEffect(() => {
    if (!tabs.some((tab) => pathname.includes(tab.routeKey.toLowerCase()))) {
      router.replace(`${basePath}/${tabs[0].routeKey.toLowerCase()}`);
    }
  }, [pathname, tabs, basePath, router]);

  const handleTabClick = (tab: Tab) => {
    router.push(`${basePath}/${tab.routeKey.toLowerCase()}`);
  };

  return (
    <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab.routeKey}
          className={clsx(
            "py-2 px-4 rounded-full transition-colors duration-200 text-sm whitespace-nowrap",
            pathname.includes(tab.routeKey.toLowerCase())
              ? "bg-primary-light border border-primary text-primary"
              : "bg-primary-grey border"
          )}
          onClick={() => handleTabClick(tab)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default RoundedTabs;

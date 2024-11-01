import { routes } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SkillsTabProps {
  field: string;
  tabs: { routeKey: string; value: string }[]; // Array of tab names fetched from the backend
  defaultTab?: string; // Optional default tab
}

export default function Tabs({ field, tabs, defaultTab }: SkillsTabProps) {
  const pathname = usePathname();

  // Calculate `activeTab` directly from `pathname`
  const activeTab =
    tabs.find((tab) => pathname.includes(tab.routeKey.toLowerCase()))?.routeKey ||
    defaultTab ||
    tabs[0].routeKey;

  return (
    <div className="flex items-center w-full border-b pt-3 px-[20px]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.routeKey.toLowerCase();

        return (
          <Link
            href={`${routes.courses}/${tab.routeKey.toLowerCase()}`}
            key={tab.routeKey}
            className={`flex items-center justify-center px-4 py-2 cursor-pointer ${
              isActive ? "border-b-2 border-primary" : ""
            }`}
          >
            <p className={`${isActive ? "text-primary" : "text-gray-500"}`}>
              {tab.value}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

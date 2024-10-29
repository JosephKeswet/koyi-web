import { routes } from "@/lib/constants";
import Link from "next/link";
import { useParams } from "next/navigation";

interface SkillsTabProps {
  field: string;
  tabs: string[]; // Array of tab names fetched from the backend
}

export default function SkillsTab({ field, tabs }: SkillsTabProps) {
  const params = useParams();

  // Extract active tab from URL or default to the first tab
  const slugParts = params?.slug[1]?.split("/") || [];
  const activeTab =
    tabs.find((tab) => slugParts.includes(tab.toLowerCase())) || tabs[0];

  return (
    <div className="flex items-center w-full border-b pt-3 px-[20px] ">
      {tabs.map((tab) => {
        const isActive = activeTab.toLowerCase() === tab.toLowerCase();

        return (
          <Link
            href={`${routes.browse_skills}/${field}/${tab.toLowerCase()}`}
            key={tab}
            className={`flex items-center justify-center px-4 py-2 cursor-pointer ${
              isActive ? "border-b-2 border-primary" : ""
            }`}
          >
            <p className={`${isActive ? "text-primary" : "text-gray-500"}`}>
              {tab}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

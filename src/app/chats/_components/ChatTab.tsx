import { routes } from "@/lib/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  field: string | string[];
  tabs: { routeKey: string; value: string }[]; // Array of tab names fetched from the backend
  defaultTab?: string; // Optional default tab
}

export default function ChatTab({
  field,
  tabs,
  defaultTab,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  // Ensure `slug` exists and has at least two parts before accessing `slug[1]`
  const activeTab =
    tabs.find((tab) => pathname.includes(tab.routeKey.toLowerCase()))
      ?.routeKey ||
    defaultTab ||
    tabs[0].routeKey;

    const handleTabSwitch = (routeKey: string) => {
      if(routeKey === "clients") {
        router.push(`${routes.chats}/clients`)
      } 
      else if(routeKey === "professionals") {
        router.push(`${routes.chats}/professionals`)
      }
      else if(routeKey === "project") {
        router.push(`${routes.chats}/project/${field}`)
      }
    }

  return (
    <div className="flex items-center justify-center pt-5 px-4 lg:px-0">
      {tabs.map((tab) => {
        const isActive = activeTab.toLowerCase() === tab.routeKey.toLowerCase();

        return (
          <div
            // href={`${routes.chats}/${tab.routeKey.toLowerCase()}`}
            key={tab.routeKey}
            onClick={() => handleTabSwitch(tab.routeKey)}
            className={`text-md flex items-center justify-center w-full px-6 lg:px-4 py-2 cursor-pointer ${
              isActive ? "border-b-2 border-primary" : ""
            }`}
          >
            <p className={`${isActive ? "text-primary" : "text-gray-500"}`}>
              {tab.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

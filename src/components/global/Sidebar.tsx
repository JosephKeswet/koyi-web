"use client";
import { routes } from "@/lib/constants";
import SidebarComponent from "./SidebarComponent";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { UserContext } from "@/lib/ProfileContext";
import { useContext, useRef, useState } from "react";
import { ArrowUpIcon } from "lucide-react";
import { ResponseState } from "@/lib/constants/enums";
import { icons } from "@/lib/constants/icons";

export default function Sidebar() {
  const { HomeIcon, CourseIcon, ChatIcon, HelpIcon, SettingIcon, LogOutIcon } =
    icons;
  const pathname = usePathname();
  const router = useRouter();
  const profile = useContext(UserContext);
  const user = profile?.settings.data;
  const business = profile?.business;
  const showmerchantLayout =
    pathname.includes(routes.home) ||
    function handleLogout() {
      Cookies.remove("token");
      router.push(routes.signin);
    };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Function to open the modal
  const openUpgradeWalletModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="">
      {showmerchantLayout && (
        <div className="">
          <SidebarComponent>
            <div className="flex items-center h-[80px] px-[35px] mb-[60px]">
              <p className="text-[32px] font-semibold font-WorkSans text-primary">
                Koyi
              </p>
            </div>

            <section className="flex  flex-col justify-between h-full">
              <div>
                <SidebarComponent.Dropdown hasItems={false} route={routes.home}>
                  <SidebarComponent.DropdownTrigger
                    icon={
                      <HomeIcon
                        color={
                          pathname.includes(routes.home || routes.jobs)
                            ? "#1260D6"
                            : "#95989E"
                        }
                      />
                    }
                  >
                    Home
                  </SidebarComponent.DropdownTrigger>
                </SidebarComponent.Dropdown>
                <SidebarComponent.Dropdown
                  hasItems={false}
                  route={`${routes.courses}/all`}
                >
                  <SidebarComponent.DropdownTrigger
                    icon={
                      <CourseIcon
                        color={
                          pathname.includes(routes.courses)
                            ? "#1260D6"
                            : "#95989E"
                        }
                      />
                    }
                  >
                    My courses
                  </SidebarComponent.DropdownTrigger>
                </SidebarComponent.Dropdown>
                <SidebarComponent.Dropdown
                  hasItems={false}
                  route={routes.chats}
                >
                  <SidebarComponent.DropdownTrigger
                    icon={
                      <ChatIcon
                        color={
                          pathname.includes(routes.chats)
                            ? "#1260D6"
                            : "#95989E"
                        }
                      />
                    }
                  >
                    Chats
                  </SidebarComponent.DropdownTrigger>
                </SidebarComponent.Dropdown>
              </div>

              <div className="pb-6">
                <SidebarComponent.Dropdown
                  hasItems={false}
                  route={`${routes.settings}`}
                >
                  <SidebarComponent.DropdownTrigger
                    icon={
                      <SettingIcon
                        color={
                          pathname.includes(routes.settings)
                            ? "#1260D6"
                            : "#95989E"
                        }
                      />
                    }
                  >
                    Settings
                  </SidebarComponent.DropdownTrigger>
                </SidebarComponent.Dropdown>
                <SidebarComponent.Dropdown
                  hasItems={false}
                  route={routes.settings}
                >
                  <SidebarComponent.DropdownTrigger
                    icon={
                      <HelpIcon
                        color={pathname === "" ? "#1260D6" : "#95989E"}
                      />
                    }
                  >
                    Help
                  </SidebarComponent.DropdownTrigger>
                </SidebarComponent.Dropdown>
                <SidebarComponent.Dropdown
                  hasItems={false}
                  route={routes.signin}
                >
                  <SidebarComponent.DropdownTrigger
                    icon={
                      <LogOutIcon
                        color={pathname === "" ? "#1260D6" : "#95989E"}
                      />
                    }
                  >
                    Log out
                  </SidebarComponent.DropdownTrigger>
                </SidebarComponent.Dropdown>
              </div>
            </section>
            <div>
              <p className="text-black text-lg ml-8">
                {user ? user?.firstName + " " + user?.lastName : "N/A"}
              </p>
            </div>
          </SidebarComponent>{" "}
        </div>
      )}
    </div>
  );
}

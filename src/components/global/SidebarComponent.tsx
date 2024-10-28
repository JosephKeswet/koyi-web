"use client";
import { icons } from "@/lib/constants/icons";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

// shape of the dropdown context for individual dropdowns
type DropdownContextType = {
  isOpen: boolean;
  isActive: boolean;
  primaryRoute: string;
  toggleDropdown: () => void;
  hasItems: boolean;
};

// Create context for individual dropdowns
const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined,
);

export default function SidebarComponent({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="hidden lg:flex lg:flex-col gap-0 h-screen  bg-[#F3F5F9]">
      {children}
    </div>
  );
}

// Each Dropdown has its own state and context
const Dropdown = ({
  children,
  route,
  hasItems,
}: React.PropsWithChildren<{ route: string; hasItems: boolean }>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname();

  // Use useEffect to update `isActive` based on route changes
  useEffect(() => {
    // Check if the new pathname contains the primaryRoute as a substring
    setIsActive(pathname.includes(route));
    if (!pathname.includes(route)) {
      setIsOpen(false); // Close the dropdown if the route doesn't match
    }
  }, [pathname, route]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        isActive,
        toggleDropdown,
        primaryRoute: route,
        hasItems,
      }}
    >
      <div>{children}</div>
    </DropdownContext.Provider>
  );
};

// Trigger component (unique to its instance)
const DropdownTrigger = ({
  children,
  icon,
  logOut,
}: React.PropsWithChildren<{ icon: any; logOut?: () => void }>) => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("DropdownTrigger must be used within a Dropdown");
  }

  const logoutDialogRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { toggleDropdown, isOpen, isActive, primaryRoute, hasItems } = context;

  const handleLogOutModal = () => {
    logoutDialogRef.current?.click();
  };

  const handleChevronClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Check if the current route is the same as primaryRoute
    if (pathname.includes(primaryRoute)) {
      toggleDropdown();
    } else {
      router.push(primaryRoute);
    }
  };

  const renderTriggerContent = () => (
    <div
      className={`flex items-center justify-between w-[267px] h-[60px] ${isActive ? "bg-white border-r-4 border-primary text-primary" : "bg-transparent text-[#939296]"}  px-[35px]  `}
    >
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-base  font-normal font-WorkSans">{children}</p>
      </div>

      {hasItems && (
        <ChevronDown
          onClick={handleChevronClick} // Update onClick to handle routing logic
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      )}
    </div>
  );

  return (
    <div>
      {!logOut ? (
        <Link href={primaryRoute} className="flex items-center gap-4 pt-2">
          {renderTriggerContent()}
          {/* <div
            className={`w-[5px] h-10 rounded-tr-lg rounded-br-lg ${isActive ? "bg-primary" : "bg-transparent"}`}
          /> */}
        </Link>
      ) : (
        <div
          onClick={handleLogOutModal}
          className="flex items-center gap-4 pt-2 cursor-pointer"
        >
          {renderTriggerContent()}
        </div>
      )}

      {/* Logout Modal */}
      <AlertDialog>
        <AlertDialogTrigger className="hidden" ref={logoutDialogRef} />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Log out</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to logout?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={logOut}>Log out</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

// Dropdown Menu that opens when triggered
const DropdownMenu = ({ children }: React.PropsWithChildren<{}>) => {
  const context = useContext(DropdownContext);
  const contentRef = useRef<HTMLUListElement>(null); // Reference to the dropdown content

  if (!context) {
    throw new Error("DropdownMenu must be used within a Dropdown");
  }

  const { isOpen } = context;

  return (
    <ul
      ref={contentRef}
      className={`flex flex-col transition-all duration-300 ease-in-out overflow-hidden 
      ${isOpen ? "opacity-100" : "opacity-0"}`}
      style={{
        height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
        opacity: isOpen ? "1" : "0",
        paddingLeft: isOpen ? "1.5rem" : "0rem", // 3.5rem = pl-14 (56px)
        transition:
          "height 0.3s ease, opacity 0.3s ease, padding-left 0.3s ease",
      }}
    >
      {children}
    </ul>
  );
};

// Dropdown Item for the list
const DropdownItem = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("DropdownItem must be used within a Dropdown");
  }

  const pathname = usePathname();
  const isActive = pathname === route;

  return (
    <li
      className={`text-sm pt-[6px] cursor-pointer ${isActive ? "text-primary" : ""}`}
    >
      <Link href={route}>{children}</Link>
    </li>
  );
};

SidebarComponent.Dropdown = Dropdown;
SidebarComponent.DropdownTrigger = DropdownTrigger;
SidebarComponent.DropdownMenu = DropdownMenu;
SidebarComponent.DropdownItem = DropdownItem;

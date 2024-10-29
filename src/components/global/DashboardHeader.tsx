import React, { createContext, useContext } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { ChevronDown, Download, PlusIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// shape of the dropdown context for individual dropdowns
type HeaderContextType = {
  title: string;
  downloadXLX?: () => void;
  searchFunc?: () => void;
  createFunction?: () => void;
};

// Create context for individual dropdowns
const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export default function DashboardHeader({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="sticky top-0  w-full z-50 bg-white  p-3 lg:px-[50px] lg:py-[20px] border-b ">
      <div className="w-full flex justify-between pb-0">{children}</div>
    </div>
  );
}

function MainHeader({
  children,
  downloadXLX,
  title,
  searchFunc,
  createFunction,
}: React.PropsWithChildren<{
  title: string;
  downloadXLX?: () => void;
  searchFunc?: () => void;
  createFunction?: () => void;
}>) {
  return (
    <HeaderContext.Provider
      value={{ title, downloadXLX, searchFunc, createFunction }}
    >
      <div className="w-full flex flex-col items-start lg:items-start lg:flex-row justify-normal gap-6 lg:gap-0 lg:justify-between">
        {children}
      </div>
    </HeaderContext.Provider>
  );
}

function HeaderContainer({ children }: React.PropsWithChildren<{}>) {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("Header container must be used within a Dashboard header");
  }
  return (
    <div className="hidden md:flex flex-col lg:flex-row items-start lg:items-center gap-4">
      {children}
    </div>
  );
}

function HeaderText() {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("Header text must be used within a Dashboard header");
  }
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-[32px] font-WorkSans font-medium text-primary-black">
        {context.title}
      </p>
      <div className="flex lg:hidden">
        {/* <HamburgerMenuIcon className="w-[32px] h-[30px]" /> */}
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

function HeaderSearch() {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("Header search must be used within a Dashboard header");
  }
  return (
    <div>
      <Input
        onChange={context.searchFunc}
        className="w-[300px] lg:w-[385px] h-[44px]"
      />
    </div>
  );
}

function HeaderSelect({ selectValues }: { selectValues: string[] }) {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("Header dropdown must be used within a Dashboard header");
  }
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder={selectValues[0]} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

function HeaderAvatarProfile() {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("Header avatar must be used within a Dashboard header");
  }
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ChevronDown />
    </div>
  );
}

function HeaderActionButton({ title }: { title: string }) {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error(
      "Header action button must be used within a Dashboard header",
    );
  }
  return (
    <div>
      <Button className="h-auto" onClick={context.createFunction}>
        {title}
        <PlusIcon className="ml-2" />
      </Button>
    </div>
  );
}

DashboardHeader.MainHeader = MainHeader;
DashboardHeader.HeaderText = HeaderText;
DashboardHeader.HeaderSearch = HeaderSearch;
DashboardHeader.HeaderSelect = HeaderSelect;
DashboardHeader.HeaderContainer = HeaderContainer;
DashboardHeader.HeaderAvatarProfile = HeaderAvatarProfile;
DashboardHeader.HeaderActionButton = HeaderActionButton;

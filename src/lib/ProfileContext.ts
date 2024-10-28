import { createContext } from "react";

// Combine the types for settings and devSettings
type UserContextType = {
  settings: any;
  devSettings: any;
  business: any;
  settingLoading: boolean;
  devLoading: boolean;
  businessLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

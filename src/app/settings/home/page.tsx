"use client";

// import DashboardHeader from "@/components/global/DashboardHeader";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { icons } from "@/lib/constants/icons";
// import { useState } from "react";

type Props = {};

export default function Page({}: Props) {
//   const [selectedLanguage, setSelectedLanguage] = useState("English");

//   const { ChatIcon } = icons;

//   // Function to handle language selection
//   const handleLanguageSelect = (language: string) => {
//     setSelectedLanguage(language);
//   };

  return (
    <div></div>
//     <div className="h-screen flex flex-col">
//       {/* Sticky Header */}
//       <div className="sticky top-0 z-50 bg-white shadow-md">
//         <DashboardHeader>
//           <DashboardHeader.MainHeader
//             searchFunc={() => {}}
//             downloadXLX={() => {}}
//             title="Settings"
//           >
//             <DashboardHeader.HeaderText />
//             <DashboardHeader.HeaderContainer>
//               <div className="hidden md:flex">
//                 <DashboardHeader.HeaderSearch />
//               </div>
//               <div className="hidden lg:flex items-center gap-4">
//                 <div className="ml-0 lg:ml-[40px]">
//                   <ChatIcon color="#95989E" />
//                 </div>
//                 <DashboardHeader.HeaderAvatarProfile />
//               </div>
//             </DashboardHeader.HeaderContainer>
//           </DashboardHeader.MainHeader>
//         </DashboardHeader>
//       </div>

//       {/* Settings Section */}
//       <div className="p-4 space-y-6">
//         {/* General Section */}
//         <div>
//           <p className="text-gray-500 font-medium mb-2">General</p>
//           <Accordion type="single" collapsible>
//             {/* Language Setting */}
//             <AccordionItem value="item-1" className="border-b border-gray-200">
//               <AccordionTrigger className="flex justify-between items-center py-3">
//                 <span>Language</span>
//                 {selectedLanguage && (
//                   <span className="text-gray-600">{selectedLanguage}</span>
//                 )}
//               </AccordionTrigger>
//               <AccordionContent className="border-t border-gray-200">
//                 <ul>
//                   <li
//                     onClick={() => handleLanguageSelect("English")}
//                     className="cursor-pointer p-2 hover:bg-gray-200"
//                   >
//                     English
//                   </li>
//                   <li
//                     onClick={() => handleLanguageSelect("Spanish")}
//                     className="cursor-pointer p-2 hover:bg-gray-200"
//                   >
//                     Spanish
//                   </li>
//                   <li
//                     onClick={() => handleLanguageSelect("French")}
//                     className="cursor-pointer p-2 hover:bg-gray-200"
//                   >
//                     French
//                   </li>
//                 </ul>
//               </AccordionContent>
//             </AccordionItem>

//             {/* My Profile */}
//             <AccordionItem value="item-2" className="border-b border-gray-200">
//               <AccordionTrigger className="py-3">My Profile</AccordionTrigger>
//               <AccordionContent />
//             </AccordionItem>

//             {/* Professional Profile */}
//             <AccordionItem value="item-3" className="border-b border-gray-200">
//               <AccordionTrigger className="py-3">
//                 Professional Profile
//               </AccordionTrigger>
//               <AccordionContent />
//             </AccordionItem>

//             {/* Contact Us */}
//             <AccordionItem value="item-4" className="border-b border-gray-200">
//               <AccordionTrigger className="py-3">Contact Us</AccordionTrigger>
//               <AccordionContent />
//             </AccordionItem>
//           </Accordion>
//         </div>

//         {/* Security Section */}
//         <div>
//           <p className="text-gray-500 font-medium mb-2">Security</p>
//           <Accordion type="single" collapsible>
//             {/* Change Password */}
//             <AccordionItem value="item-5" className="border-b border-gray-200">
//               <AccordionTrigger className="py-3">
//                 Change Password
//               </AccordionTrigger>
//               <AccordionContent />
//             </AccordionItem>

//             {/* Privacy Policy */}
//             <AccordionItem value="item-6" className="border-b border-gray-200">
//               <AccordionTrigger className="py-3">
//                 Privacy Policy
//               </AccordionTrigger>
//               <AccordionContent />
//             </AccordionItem>
//           </Accordion>
//         </div>
//       </div>
//     </div>
  );
}

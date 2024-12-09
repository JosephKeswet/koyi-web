"use client";

import { useState } from "react";
import { User, Phone, Mail, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { routes } from "@/lib/constants";

type Props = {};

export default function ProfilePage({}: Props) {
  const [formData, setFormData] = useState({
    firstName: "David",
    lastName: "Okoro",
    username: "@davidokoro143",
    phone: "+2348166856468",
    email: "hellodavidokoro@gmail.com",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex flex-col px-5 py-3 bg-white">
      <Link
        href={routes.settings}
        className="flex items-center justify-center w-[32px] h-[32px] md:w-[42px] md:h-[42px] bg-primary-grey rounded-full"
      >
        <ChevronLeft />
      </Link>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">My Profile</h1>
        <button className="text-blue-600 font-medium">Save</button>
        </div>
      </div>

      <div className="flex flex-col items-center py-6">
        <img
          src=""
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
        />
        <button className="mt-2 text-blue-600 font-medium">Edit</button>
      </div>

      {/* Form Section */}
      <div className="border border-gray-300 px-4 space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-500">First name</label>
          <div className="flex items-center border rounded-md px-3 py-2 mt-1">
            <User className="text-gray-400 mr-3" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">Last name</label>
          <div className="flex items-center border rounded-md px-3 py-2 mt-1">
            <User className="text-gray-400 mr-3" />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">Username</label>
          <div className="flex items-center border rounded-md px-3 py-2 mt-1">
            <User className="text-gray-400 mr-3" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">
            Phone Number
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 mt-1">
            <Phone className="text-gray-400 mr-3" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">
            Email Address
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 mt-1">
            <Mail className="text-gray-400 mr-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="flex-1 outline-none bg-transparent"
            />
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium">
          Save
        </button>
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

type Props = {};

export default function Page({}: Props) {
  return (
    <div>
        <div>
      <h1 className="text-lg font-semibold">General</h1>
      <div className="w-full *:flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full space-y-4">
          <p>Security</p>
          <div className="border rounded-lg p-2 space-y-4">
            <p className="text-gray-300 text-sm">
              Enter your current password to make a change
            </p>
            <div>
              <div>
                <p>Current Password</p>
                <Input
                  placeholder="Enter Password"
                  className="pl-2 text-gray-300 text-sm"
                />
              </div>
              <div>
                <p>New Password</p>
                <Input
                  placeholder="Enter New Password"
                  className="pl-2 text-gray-300 text-sm"
                />
              </div>
            </div>
            <div className='flex justify-end'>
              <Button className="bg-primary text-white">Update Password</Button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p>Accessibility</p>
          <div className="border rounded-lg p-2">
            <p>Language</p>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort by: </SelectLabel>
                  <SelectItem value="apple">Transaction ID</SelectItem>
                  <SelectItem value="banana">Withdrawal amount</SelectItem>
                  <SelectItem value="blueberry">Payment method</SelectItem>
                  <SelectItem value="grapes">Account Details</SelectItem>
                  <SelectItem value="pineapple">Status</SelectItem>
                  <SelectItem value="pineapple">Date Initiated</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <Link 
            href=''
            className="bg-primary underline-offset-1"
        >
            <p>Privacy Policy</p>
        </Link>
      </div>
      </div>
    </div>
  );
}

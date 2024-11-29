import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SortSelection() {
  return (
    <Select>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Sort by: " />
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
  )
}
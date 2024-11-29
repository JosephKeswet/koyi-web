'use client'

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Key } from "react";

export interface GenericTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
}

export const DataTable = <TData,>({ columns, data }: GenericTableProps<TData>) => {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table className="flex-nowrap shrink-0 min-h-[100px] maxh-[600px] overflow--auto">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup: { id: Key | null | undefined; headers: any[]; }) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <TableHead className='text-nowrap shrink-0' key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody  className='flex-nowrap text-nowrap shrink-0'>
        {table.getRowModel().rows.map((row: { id: Key | null | undefined; original: TData; getVisibleCells: () => any[]; }, rowIndex: number | null) => (
          <TableRow key={row.id}
          className={`text-nowrap shrink-0 cursor-pointer hover:bg-[#FFF8F1]`}>
            {row.getVisibleCells().map(cell => (
              <TableCell className='text-nowrap shrink-0' key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

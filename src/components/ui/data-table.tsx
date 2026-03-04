"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ReactNode } from "react";

export type Column<T> = {
  header: string;
  accessor: keyof T;
  cell?: (row: T) => ReactNode;
};

type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
};

export function DataTable<T>({
  columns,
  data,
  loading = false,
  emptyMessage = "You don’t have any orders to show.",
}: DataTableProps<T>) {
  return (
    <div className="rounded-xs border-none bg-white">
      <Table className="">
        <TableHeader className="">
          <TableRow className="border-none ">
            {columns.map((col, index) => (
              <TableHead
                key={index}
                className="text-xs text-black/80 font-semibold py-4 bg-gray-100 "
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-center py-6 text-slate-500 border-none"
              >
                Loading...
              </TableCell>
            </TableRow>
          ) : data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-sm font-medium text-center py-6 text-black border-none"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex} className="text-xs border-none">
                {columns.map((col, colIndex) => (
                  <TableCell key={colIndex} className="border-none">
                    {col.cell
                      ? col.cell(row)
                      : (row[col.accessor] as ReactNode)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

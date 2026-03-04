"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type TablePaginationProps = {
  pageSize: number;
  onPageSizeChange: (value: number) => void;
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages?: number;
  className?: string;
};

export function TablePagination({
  pageSize,
  onPageSizeChange,
  currentPage,
  onPageChange,
  totalPages = 10,
  className,
}: TablePaginationProps) {
  return (
    <div
      className={cn("flex items-center gap-4 text-sm text-black/90", className)}
    >
      {/* Page Size */}
      <div className="flex items-center gap-2">
        <span>Show</span>

        <Select
          value={String(pageSize)}
          onValueChange={(val) => onPageSizeChange(Number(val))}
        >
          <SelectTrigger className="h-8 w-16 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[10, 25, 50, 100].map((size) => (
              <SelectItem key={size} value={String(size)}>
                <span className={cn("", className)}>{size}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <span>Orders per Page</span>
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-300" />

      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          className="p-1.5 border rounded-md hover:bg-gray-100"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span
          className={cn(
            "px-3 py-1 border rounded-md text-sm bg-white",
            className,
          )}
        >
          {currentPage}
        </span>

        <button
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
          className="p-1.5 border rounded-md hover:bg-gray-100"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

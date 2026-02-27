"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, CloudUpload } from "lucide-react";
import { cn } from "@/lib/utils";

type BulkActionItem = {
  label: string;
  onClick: () => void;
};

type BulkActionDropdownProps = {
  items: BulkActionItem[];
};

export function BulkActionDropdown({ items }: BulkActionDropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-fit">
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-2 border rounded-xs bg-[#f8f8f8] hover:bg-slate-50 transition text-xs font-medium"
      >
        <CloudUpload className="w-4 h-4 text-black font-semibold" />
        <span className="font-semibold">Bulk Action</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 ml-1 transition-transform text-slate-500",
            open && "rotate-180",
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-2 w-64 bg-white border rounded-xs shadow-2xs  z-50">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 text-xs font-medium hover:bg-slate-100 transition"
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

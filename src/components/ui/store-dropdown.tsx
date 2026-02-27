"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Store } from "lucide-react";
import { cn } from "@/lib/utils";

type StoreDropdownProps = {
  stores: string[];
  value: string;
  onChange: (store: string) => void;
};

export function StoreDropdown({ stores, value, onChange }: StoreDropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-fit">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border bg-[#f8f8f8] px-4 py-2 rounded-xs hover:bg-slate-50 transition"
      >
        <Store className="w-4 h-4 text-black" />
        <span className="text-xs font-semibold">
          <span className="text-slate-500">Store: </span>
          <span className="text-black">{value}</span>
        </span>
        <ChevronDown className="w-4 h-4 text-slate-500 ml-2" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-md z-50">
          {stores.map((store) => (
            <button
              key={store}
              onClick={() => {
                onChange(store);
                setOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-2 text-sm hover:bg-slate-100 transition",
                value === store && "bg-slate-100 font-medium",
              )}
            >
              {store}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

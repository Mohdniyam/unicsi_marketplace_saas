"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { IconDropdown } from "@/components/ui/icon-dropdown";

type SearchOption = {
  label: string;
  value: string;
};

interface SearchFilterBarProps {
  options: SearchOption[];
  defaultOption?: string;
  placeholder?: string;
  onSearch?: (type: string, query: string) => void;
}

export default function SearchFilterBar({
  options,
  defaultOption,
  placeholder = "",
  onSearch,
}: SearchFilterBarProps) {
  const [searchBy, setSearchBy] = useState("Search By");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!onSearch) return;
    const selected = options.find((opt) => opt.label === searchBy);
    onSearch(selected?.value || "", query);
  };

  return (
    <div className="flex items-center w-2/3 h-8 border-y bg-white">
      {/* Dropdown */}
      <IconDropdown
        label={searchBy}
        className="h-8 px-3 text-xs text-black/80 font-semibold"
        items={options.map((opt) => ({
          label: opt.label,
          onClick: () => setSearchBy(opt.label),
        }))}
      />

      {/* Input */}
      <input
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 h-8 px-3 text-xs outline-none"
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="h-8 px-2 bg-black text-white flex items-center rounded-xs rounded-r-sm justify-center hover:bg-black/80 transition"
      >
        <Search className="w-4 h-4" />
      </button>
    </div>
  );
}

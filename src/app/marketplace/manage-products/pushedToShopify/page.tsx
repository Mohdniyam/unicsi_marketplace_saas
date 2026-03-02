"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export type SearchOption = {
  label: string;
  value: string;
};

interface DataSearchBarProps {
  options: SearchOption[];
  defaultOption?: string;
  onSearch: (type: string, query: string) => void;
  className?: string;
}

export function DataSearchBar({
  options,
  defaultOption,
  onSearch,
  className,
}: DataSearchBarProps) {
  const [searchType, setSearchType] = useState(defaultOption || "");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!searchType || !query.trim()) return;
    onSearch(searchType, query.trim());
  };

  return (
    <div
      className={`flex items-center w-full max-w-xl border rounded-sm overflow-hidden bg-background ${className}`}
    >
      {/* Select */}
      <Select value={searchType} onValueChange={setSearchType}>
        <SelectTrigger className="w-40 text-xs font-semibold rounded-none border-0 border-r focus:ring-0">
          <SelectValue placeholder="Search By" />
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="text-xs"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Input */}
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={
          searchType
            ? `Enter ${options.find((o) => o.value === searchType)?.label}...`
            : "Select search type first..."
        }
        className="flex-1 border-0 focus-visible:ring-0 text-xs placeholder:text-xs"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      {/* Button */}
      <Button
        onClick={handleSearch}
        disabled={!searchType}
        className="rounded-none h-9"
      >
        <Search className="w-4 h-4" />
      </Button>
    </div>
  );
}

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

interface DataSearchBarProps {
  onSearch: (type: string, query: string) => void;
}

export function DataSearchBar({ onSearch }: DataSearchBarProps) {
  const [searchType, setSearchType] = useState<string>("");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!searchType || !query.trim()) return;
    onSearch(searchType, query.trim());
  };

  return (
    <div className="flex items-center w-1/4 border rounded-sm overflow-hidden bg-background">
      {/* Select */}
      <Select value={searchType} onValueChange={setSearchType}>
        <SelectTrigger className="text-xs w-28 font-semibold rounded-none border-0 border-r focus:ring-0">
          <SelectValue placeholder="Search By" className="" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="productName" className="text-xs">
            Product Name
          </SelectItem>
          <SelectItem value="cCode" className="text-xs">
            C-Code
          </SelectItem>
        </SelectContent>
      </Select>

      {/* Input */}
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={
          searchType === "productName"
            ? "Enter product name..."
            : searchType === "cCode"
              ? "Enter C-Code..."
              : ""
        }
        className="flex-1 border-0 focus-visible:ring-0 text-xs"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      {/* Search Button */}
      <Button
        onClick={handleSearch}
        disabled={!searchType}
        className="rounded-none bg-black"
      >
        <Search className="w-4 h-4" />
      </Button>
    </div>
  );
}

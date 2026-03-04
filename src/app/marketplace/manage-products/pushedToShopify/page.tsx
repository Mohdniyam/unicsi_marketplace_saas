"use client";
import { Button } from "@/components/ui/button";
import { Column, DataTable } from "@/components/ui/data-table";
import { DateDropdown } from "@/components/ui/date-dropdown";
import SearchFilterBar from "@/components/ui/search-bar-icon";
import { TablePagination } from "@/components/ui/table-pagination";
import { useState } from "react";

type ProductData = {
  productDetails: string;
  pushedDateTime: string;
  cCode: string;
  cloutPrice: number;
  sellingPrice: number;
  inventory: number;
  supplierReRouting: string;
};

const products: ProductData[] = [
  {
    productDetails: "Nike Air Max - Size 9",
    pushedDateTime: "03 Mar 2026, 11:30 AM",
    cCode: "C-1023",
    cloutPrice: 1200,
    sellingPrice: 1499,
    inventory: 45,
    supplierReRouting: "Enabled",
  },
  {
    productDetails: "Adidas Sneakers",
    pushedDateTime: "02 Mar 2026, 04:15 PM",
    cCode: "C-2045",
    cloutPrice: 1500,
    sellingPrice: 1799,
    inventory: 12,
    supplierReRouting: "Disabled",
  },
];

const columns: Column<ProductData>[] = [
  {
    header: "Product Details",
    accessor: "productDetails",
  },
  {
    header: "Pushed Date & Time",
    accessor: "pushedDateTime",
  },
  {
    header: "C-Code",
    accessor: "cCode",
  },
  {
    header: "Clout Price",
    accessor: "cloutPrice",
    cell: (row) => (
      <span className="font-medium text-sm">₹{row.cloutPrice}</span>
    ),
  },
  {
    header: "Selling Price",
    accessor: "sellingPrice",
    cell: (row) => (
      <span className="font-semibold text-green-600 text-sm">
        ₹{row.sellingPrice}
      </span>
    ),
  },
  {
    header: "Inventory",
    accessor: "inventory",
    cell: (row) => (
      <span
        className={`text-sm font-medium ${
          row.inventory < 20 ? "text-red-600" : "text-black"
        }`}
      >
        {row.inventory}
      </span>
    ),
  },
  {
    header: "Supplier Re-Routing",
    accessor: "supplierReRouting",
    cell: (row) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          row.supplierReRouting === "Enabled"
            ? "bg-green-100 text-green-600"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        {row.supplierReRouting}
      </span>
    ),
  },
  {
    header: "Actions",
    accessor: "cCode",
    cell: () => (
      <Button size="sm" className="my-button text-xs">
        View
      </Button>
    ),
  },
];

const options = [
  { label: "Order ID(s)", value: "orderId" },
  { label: "Product Name", value: "productName" },
  { label: "Customer Name", value: "customerName" },
];

export default function PushToShopifyPage() {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      {/* Filter */}
      <div className="flex gap-2 items-center">
        <SearchFilterBar options={options} />
        <DateDropdown />
        <div className="text-xs">
          <TablePagination
            pageSize={pageSize}
            onPageSizeChange={setPageSize}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalPages={5}
            className="text-xs"
          />
        </div>
      </div>
      <div className="mt-6">
        <DataTable columns={columns} data={products} />
      </div>
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Column, DataTable } from "@/components/ui/data-table";
import { DateDropdown } from "@/components/ui/date-dropdown";
import SearchFilterBar from "@/components/ui/search-bar-icon";
import { TablePagination } from "@/components/ui/table-pagination";
import { useState } from "react";

type InventoryRequestData = {
  requestDate: string;
  productDetails: string;
  cCode: string;
  expectedDailyOrders: number;
  expectedCampaignDuration: string;
  totalRequestedInventory: number;
  status: "Pending" | "Approved" | "Rejected";
};

const requests: InventoryRequestData[] = [
  {
    requestDate: "03 Mar 2026",
    productDetails: "Nike Air Max - Size 9",
    cCode: "C-1023",
    expectedDailyOrders: 50,
    expectedCampaignDuration: "7 Days",
    totalRequestedInventory: 350,
    status: "Pending",
  },
  {
    requestDate: "02 Mar 2026",
    productDetails: "Adidas Sneakers",
    cCode: "C-2045",
    expectedDailyOrders: 30,
    expectedCampaignDuration: "10 Days",
    totalRequestedInventory: 300,
    status: "Approved",
  },
];

const columns: Column<InventoryRequestData>[] = [
  {
    header: "Request Date",
    accessor: "requestDate",
  },
  {
    header: "Product Details",
    accessor: "productDetails",
  },
  {
    header: "C-Code",
    accessor: "cCode",
  },
  {
    header: "Exp. Daily Orders",
    accessor: "expectedDailyOrders",
    cell: (row) => (
      <span className="text-sm font-medium">{row.expectedDailyOrders}</span>
    ),
  },
  {
    header: "Exp. Campaign Duration",
    accessor: "expectedCampaignDuration",
  },
  {
    header: "Total Requested Inventory",
    accessor: "totalRequestedInventory",
    cell: (row) => (
      <span className="font-semibold text-sm">
        {row.totalRequestedInventory}
      </span>
    ),
  },
  {
    header: "Status",
    accessor: "status",
    cell: (row) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          row.status === "Approved"
            ? "bg-green-100 text-green-600"
            : row.status === "Rejected"
              ? "bg-red-100 text-red-600"
              : "bg-yellow-100 text-yellow-600"
        }`}
      >
        {row.status}
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
        <DataTable columns={columns} data={requests} />
      </div>
    </div>
  );
}

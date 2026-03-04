"use client";

import { useState, useMemo } from "react";
import { DataTable, Column } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { ActiveTabs, TabItem } from "@/components/ui/active-tabs";
import { StoreDropdown } from "@/components/ui/store-dropdown";
import { IconDropdown } from "@/components/ui/icon-dropdown";
import {
  Filter,
  Hourglass,
  Icon,
  Info,
  TrainFrontTunnel,
  Upload,
} from "lucide-react";
import SearchFilterBar from "@/components/ui/search-bar-icon";
import { DateDropdown } from "@/components/ui/date-dropdown";
import { TablePagination } from "@/components/ui/table-pagination";

type Data = {
  cloutOrderId: string;
  shopifyOrderId: string;
  orderDateNTime: string;
  productDetail: string;
  payment: string;
  consumerDetails: string;
  rtoRisk: string;
  status: string;
};

const orders: Data[] = [
  {
    cloutOrderId: "CLT12345",
    shopifyOrderId: "SHP56789",
    orderDateNTime: "2026-02-27 12:30 PM",
    productDetail: "Nike Shoes - Size 9",
    payment: "Prepaid",
    consumerDetails: "Rahul Sharma - Delhi",
    rtoRisk: "Low",
    status: "PENDING",
  },
  {
    cloutOrderId: "CLT99999",
    shopifyOrderId: "SHP88888",
    orderDateNTime: "2026-02-26 05:10 PM",
    productDetail: "Adidas Sneakers",
    payment: "COD",
    consumerDetails: "Aamir Hashmi - Faridabad",
    rtoRisk: "High",
    status: "CONFIRMED",
  },
];

const ORDER_TABS: TabItem[] = [
  { label: "Pending", value: "PENDING" },
  { label: "Confirmed", value: "CONFIRMED" },
  { label: "Shipped", value: "SHIPPED" },
  { label: "Closed", value: "CLOSED" },
  { label: "All Orders", value: "ALL" },
  { label: "Failed to sync", value: "FAILED_TO_SYNC" },
];

const options = [
  { label: "Order ID(s)", value: "orderId" },
  { label: "Product Name", value: "productName" },
  { label: "Customer Name", value: "customerName" },
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("PENDING");
  const [paymentFilter, setPaymentFilter] = useState<"ALL" | "COD" | "Prepaid">(
    "ALL",
  );
  const [store, setStore] = useState("xxncby-gx");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const tabCounts = useMemo(() => {
    const counts = {
      PENDING: 0,
      CONFIRMED: 0,
      SHIPPED: 0,
      CLOSED: 0,
      FAILED_TO_SYNC: 0,
    };

    orders.forEach((order) => {
      if (counts[order.status as keyof typeof counts] !== undefined) {
        counts[order.status as keyof typeof counts]++;
      }
    });

    return {
      ...counts,
      ALL: orders.length,
    };
  }, [orders]);

  const ORDER_TABS: TabItem[] = [
    { label: "Pending", value: "PENDING", count: tabCounts.PENDING },
    { label: "Confirmed", value: "CONFIRMED", count: tabCounts.CONFIRMED },
    { label: "Shipped", value: "SHIPPED", count: tabCounts.SHIPPED },
    { label: "Closed", value: "CLOSED", count: tabCounts.CLOSED },
    { label: "All Orders", value: "ALL", count: tabCounts.ALL },
    {
      label: "Failed to sync",
      value: "FAILED_TO_SYNC",
      count: tabCounts.FAILED_TO_SYNC,
    },
  ];

  const filteredOrders = useMemo(() => {
    if (activeTab === "ALL") return orders;
    return orders.filter((order) => order.status === activeTab);
  }, [activeTab]);

  const columns: Column<Data>[] = [
    {
      header: "Clout Order ID",
      accessor: "cloutOrderId",
    },
    {
      header: "Shopify Order ID",
      accessor: "shopifyOrderId",
    },
    {
      header: "Order Date & Time",
      accessor: "orderDateNTime",
    },
    {
      header: "Product Detail",
      accessor: "productDetail",
    },
    {
      header: "Payment",
      accessor: "payment",
      cell: (row) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            row.payment === "Prepaid"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {row.payment}
        </span>
      ),
    },
    {
      header: "Consumer Details",
      accessor: "consumerDetails",
    },
    {
      header: "RTO Risk",
      accessor: "rtoRisk",
      cell: (row) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            row.rtoRisk === "High"
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {row.rtoRisk}
        </span>
      ),
    },
    {
      header: "Action",
      accessor: "cloutOrderId",
      cell: () => (
        <Button size="sm" className="text-xs my-button">
          View
        </Button>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage Orders</h1>
        <div className="text-sm">
          <StoreDropdown
            stores={["xxncby-gx", "demo-store", "Others"]}
            value={store}
            onChange={setStore}
          />
        </div>
      </div>

      {/* Tabs */}
      <ActiveTabs
        tabs={ORDER_TABS}
        active={activeTab}
        onChange={setActiveTab}
      />

      <div className="flex justify-between">
        {/* Payment Filter */}
        <div className=" inline-flex rounded-full border items-center border-gray-300 bg-gray-100 px-1">
          {["ALL", "COD", "Prepaid"].map((type) => {
            const isActive = paymentFilter === type;

            return (
              <button
                key={type}
                onClick={() => setPaymentFilter(type as any)}
                className={`px-2 py-1 text-xs font-medium rounded-full transition-all ${
                  isActive
                    ? "bg-black text-white shadow-sm"
                    : "text-slate-600 hover:text-black"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <IconDropdown
            icon={Upload}
            label="Export"
            className="text-xs rounded-xs font-semibold bg-[#f8f8f8]"
            labelClassName="text-xs "
            items={[
              {
                label: "Current View",
                onClick: () => console.log("Option 1 clicked"),
              },
              {
                label: "Master Data",
                onClick: () => console.log("Option 2 clicked"),
              },
            ]}
          />
          <Info className="h-4 w-4" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-1.5">
          <SearchFilterBar options={options} />
          <DateDropdown label="Date" />
          <IconDropdown
            icon={Hourglass}
            label="SLA"
            className="text-xs font-semibold rounded-sm text-black/80"
            labelClassName="text-xs bg-white"
            items={[
              {
                label: "<24 Hrs",
                onClick: () => console.log("Option 1 clicked"),
              },
              {
                label: "24-48 Hrs",
                onClick: () => console.log("Option 2 clicked"),
              },
              {
                label: "48+ Hrs",
                onClick: () => console.log("Option 3 clicked"),
              },
            ]}
          />
          <Info className="w-5 h-5" />
          <IconDropdown
            icon={Filter}
            label="RTO Risk"
            className="text-xs font-semibold rounded-sm text-black/80 w-48"
            labelClassName="text-xs bg-white"
            items={[
              {
                label: "<24 Hrs",
                onClick: () => console.log("Option 1 clicked"),
              },
              {
                label: "24-48 Hrs",
                onClick: () => console.log("Option 2 clicked"),
              },
              {
                label: "48+ Hrs",
                onClick: () => console.log("Option 3 clicked"),
              },
            ]}
          />
        </div>

        {/* Right Side */}
        <TablePagination
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={5}
        />
      </div>

      {/* Table */}
      <DataTable columns={columns} data={filteredOrders} />
    </div>
  );
}

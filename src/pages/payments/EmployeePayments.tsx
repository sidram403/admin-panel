"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import Payments from "../../components/payments/Payments";
import WithDrawals from "../../components/payments/WithDrawals";

export default function EmployeePayments() {
  const [activeTab, setActiveTab] = useState("payments");

  return (
    <div className="w-full bg-[#F8F8F8]">
      <div className="flex flex-col space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-[#333333]">
            Payments & Transactions
          </h2>
        </div>
        <div className="flex justify-between border-b border-gray-400">
          <div className="flex items-center space-x-4">
            <button className="h-auto px-5 py-1 text-sm font-medium bg-black rounded-md text-[#fff] hover:text-[#fff] border-b-2 border-transparent hover:border-[#333333]">
              Workers
            </button>
            <button className="h-auto px-5 py-1 text-sm font-medium bg-gray-300 rounded-md text-[black] hover:text-[black] border-b-2 border-transparent hover:border-[#333333]">
              Clients
            </button>
          </div>
          <div className="p-4">
            <button className="p-[14px] rounded-[26px] shadow-lg bg-dark hover:bg-slate-950">
              <Filter
                className="w-[20px] h-[20px]"
                color="#FFFFFF"
                fill="#ffffff"
              />
            </button>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === "payments"
                ? "bg-[#0070F3] text-white"
                : "text-[#666666] hover:text-[#333333]"
            }`}
            onClick={() => setActiveTab("payments")}
          >
            Payments
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === "withdrawals"
                ? "bg-[#0070F3] text-white"
                : "text-[#666666] hover:text-[#333333]"
            }`}
            onClick={() => setActiveTab("withdrawals")}
          >
            Withdrawals
          </button>
        </div>

        <div className="mt-4">
          {activeTab === "payments" && <Payments />}
          {activeTab === "withdrawals" && <WithDrawals />}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Bell, ChevronLeft, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 bg-white flex items-center justify-between px-6">
      <div className="flex items-center flex-1">
        <div className="relative w-96">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Search className="w-5 h-5" />
          </span>
          <input
            type="search"
            placeholder="Search."
            className="w-full pl-10 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className=" border-r-2 pr-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <div className="font-medium flex align-middle text-center items-center">
              <ChevronLeft className="w-4 h-4" /> <p>Steve Johnson</p>
            </div>
            <span className="text-sm text-gray-500">Good Morning!</span>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={20} className="text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex-1">
        <input
          type="search"
          placeholder="Search..."
          className="w-96 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="font-medium">Steve Johnson</span>
            <span className="text-sm text-gray-500">Admin</span>
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
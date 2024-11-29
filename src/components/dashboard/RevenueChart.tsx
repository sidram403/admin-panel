import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Example data
const data = [
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 5000 },
  { name: "Apr", uv: 4000 },
  { name: "May", uv: 3000 },
  { name: "Jun", uv: 6000 },
  { name: "Jul", uv: 7000 },
  { name: "Aug", uv: 8000 },
  { name: "Sep", uv: 4000 },
  { name: "Oct", uv: 5000 },
  { name: "Nov", uv: 6000 },
  { name: "Dec", uv: 7000 },
];

const applicants = [
  {
    name: "Sophia Doe",
    appliedFor: "General Cleaner",
    avatar: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
  },
  {
    name: "Mason Clark",
    appliedFor: "Chef",
    avatar: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
  },
  {
    name: "Emily Paton",
    appliedFor: "Care Taker",
    avatar: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
  },
  {
    name: "Daniel Breth",
    appliedFor: "General Cleaner",
    avatar: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
  },
];

const RevenueChart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-4 p-4">
      {/* Left: Revenue Stats */}
      <div className="bg-white border rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Revenue Stats</h2>
          <button className="text-blue-600 text-sm">Profit</button>
        </div>
        <p className="text-3xl font-bold text-gray-800 mb-2">
          $34,343,565 <span className="text-sm font-normal">Total revenue</span>
        </p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                {/* Gradient Definition for the Area */}
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              {/* Axes */}
              <XAxis dataKey="name" />
              <YAxis />
              {/* Grid Lines */}
              <CartesianGrid strokeDasharray="3 3" />
              {/* Tooltip */}
              <Tooltip />
              {/* Area with Gradient */}
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right: New Applications */}
      <div className="bg-white border rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          New Applications
        </h2>
        <ul className="space-y-4">
          {applicants.map((applicant, index) => (
            <li key={index} className="flex items-center">
              <img
                src={applicant.avatar}
                alt={applicant.name}
                className="w-10 h-10 rounded-full mr-4 border"
              />
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {applicant.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Applied for {applicant.appliedFor}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RevenueChart;

import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const jobData = [
  { month: "Jan", value: 100000 },
  { month: "Feb", value: 20000 },
  { month: "Mar", value: 30000 },
  { month: "Apr", value: 150000 },
  { month: "May", value: 120000 },
  { month: "Jun", value: 70000 },
  { month: "Jul", value: 80000 },
  { month: "Aug", value: 60000 },
  { month: "Sep", value: 70000 },
  { month: "Oct", value: 90000 },
  { month: "Nov", value: 50000 },
  { month: "Dec", value: 132000 },
];

const jobsList = [
  {
    title: "General Cleaner",
    applied: 345,
    postedBy: [
      "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
      "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
      "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
    ],
  },
  {
    title: "Care Taker",
    applied: 267,
    postedBy: [
      "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
      "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
      "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
    ],
  },
  {
    title: "Tray Collector",
    applied: 345,
    postedBy: [
      "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
      "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
      "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
    ],
  },
];

const JobPostChart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Left: Total Job Posted */}
      <div className="col-span-2 bg-white border rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Total Job Posted
          </h2>
          <button className="text-blue-600 text-sm">Detail statistics</button>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={jobData}>
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  padding: "6px 12px",
                }}
              />
              <Bar dataKey="value" fill="#0d6efd" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p className="text-sm text-gray-600 bg-gray-100 rounded-full px-3 py-1">
            132k job posted
          </p>
        </div>
      </div>

      {/* Right: Posted Jobs */}
      <div className="col-span-1 bg-white border rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Posted Jobs</h2>
          <button className="text-blue-600 text-sm">See list</button>
        </div>
        <ul className="space-y-4">
          {jobsList.map((job, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b pb-4"
            >
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600">Applied: {job.applied}</p>
              </div>
              <div className="flex items-center space-x-1">
                {job.postedBy.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="Posted by"
                    className="w-6 h-6 rounded-full border border-gray-200"
                  />
                ))}
                <span className="text-sm text-gray-600">+32</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobPostChart;

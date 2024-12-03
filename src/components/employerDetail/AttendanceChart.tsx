import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

const AttendanceChart: React.FC = () => {
  return (
    <div className="w-full">
      <h3 className="font-medium text-gray-600">Average Attendance: 80%</h3>
      <div className="mt-4 w-full">
        <div className=" h-96 rounded">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                {/* Gradient Definition for the Area */}
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0099FF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0099FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              {/* Axes */}
              <XAxis dataKey="name" />
              <YAxis />
              {/* Grid Lines */}
              {/* Tooltip */}
              <Tooltip />
              {/* Area with Gradient */}
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    
    </div>
  );
};

export default AttendanceChart;

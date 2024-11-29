import { ArrowRight } from "lucide-react";
import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  defs,
  linearGradient,
} from "recharts";

interface DashboardCardProps {
  title: string;
  value: string;
  chartData: number[];
  chartColor: string[];
  icon: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  chartData,
  chartColor,
  icon,
}) => {
  const gradientId = `gradient-${title.replace(/\s+/g, "")}`;
  const formattedData = chartData.map((value, index) => ({ index, value }));

  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <div className="mt-4 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={formattedData}>
            <defs>
              <linearGradient
                id={`${gradientId}-line`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                {chartColor.map((color, index) => (
                  <stop
                    key={index}
                    offset={`${(index / (chartColor.length - 1)) * 100}%`}
                    stopColor={color}
                  />
                ))}
              </linearGradient>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                {chartColor.map((color, index) => (
                  <stop
                    key={index}
                    offset={`${(index / (chartColor.length - 1)) * 100}%`}
                    stopColor={color}
                    stopOpacity={1}
                  />
                ))}
              </linearGradient>
            </defs>
            <Tooltip
              cursor={{ stroke: chartColor[0], strokeDasharray: "3 3" }}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "6px 12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={`url(#${gradientId}-line)`}
              strokeWidth={2}
              fill={`url(#${gradientId})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between items-start">
        <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
        <div className="flex">
          <p className="text-sm font-medium text-gray-600">Detailed View</p>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
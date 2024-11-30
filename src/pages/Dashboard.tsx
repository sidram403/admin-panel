import React, { useState } from "react";
import JobPostChart from "../components/dashboard/JobPostChart";
import RevenueChart from "../components/dashboard/RevenueChart";
import DashboardCard from "../components/dashboard/DashboardCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays } from "lucide-react";

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card

  const [startDate, setStartDate] = useState(new Date("2024-01-01"));
  const [endDate, setEndDate] = useState(new Date("2024-12-31"));

  const handleCardClick = (index) => {
    setSelectedCard(index); // Set the clicked card as selected
  };
  

  const cards = [
    {
      title: "Total Job Posted",
      value: "132k",
      chartData: [2400, 1398, 9800, 1908, 6039, 4800, 3800, 4300],
      chartColor: ["#797979", "#FFFFFF"],
      icon: "/assets/icons/group1.svg",
    },
    {
      title: "Activated Hustle Heroes",
      value: "13k",
      chartData: [5, 10, 20, 15, 25, 20, 30, 40, 35, 50, 60, 55],
      chartColor: ["#11FF00", "#FFFFFF"],
      icon: "/assets/icons/group2.svg",
    },
    {
      title: "Vacancy",
      value: "156",
      chartData: [2, 5, 10, 8, 12, 14, 15, 13, 18, 20, 22, 25],
      chartColor: ["#4D5578", "#FFFFFF"],
      icon: "/assets/icons/group3.svg",
    },
    {
      title: "Pending Verifications",
      value: "154",
      chartData: [3, 6, 9, 12, 18, 20, 24, 28, 30, 32, 35, 37],
      chartColor: ["#0FA5C2", "#FFFFFF"],
      icon: "/assets/icons/group4.svg",
    },
    {
      title: "Pending Payment Transfers",
      value: "121",
      chartData: [2, 4, 8, 12, 15, 18, 22, 25, 28, 32, 35, 40],
      chartColor: ["#FFDD1C", "#FFFFFF"],
      icon: "/assets/icons/group5.svg",
    },
    {
      title: "Total Amount Paid",
      value: "122k",
      chartData: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
      chartColor: ["#178628", "#FFFFFF"],
      icon: "/assets/icons/group6.svg",
    },
    {
      title: "No Show",
      value: "12",
      chartData: [1, 2, 3, 4, 5, 4, 6, 5, 7, 8, 9, 10],
      chartColor: ["#797979", "#FFFFFF"],
      icon: "/assets/icons/group7.svg",
    },
    {
      title: "Verified Hustle Heroes",
      value: "122k",
      chartData: [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115],
      chartColor: ["#007BE5", "#FFFFFF"],
      icon: "/assets/icons/group2.svg",
    },
  ];

  const CustomInput = React.forwardRef(({ value, onClick, label }, ref) => (
    <div
      className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white cursor-pointer"
      onClick={onClick}
      ref={ref}
    >
      <CalendarDays className="text-gray-500" />
      <span className="text-sm text-gray-700">{value || label}</span>
    </div>
  ));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold pl-2 border-l-[12px] border-[#FED408]">Dashboard Overview</h1>
        <div className="flex items-center gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="d MMMM, yyyy"
              customInput={<CustomInput label="Select Start Date" />}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="d MMMM, yyyy"
              customInput={<CustomInput label="Select End Date" />}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`cursor-pointer rounded-lg ${
              selectedCard === index
                ? "border-2 border-black"
                : "border border-gray-200"
            }`}
          >
            <DashboardCard
              title={card.title}
              value={card.value}
              chartData={card.chartData}
              chartColor={card.chartColor}
              icon={<img src={card.icon} className="text-blue-500 w-8 h-8" />}
            />
          </div>
        ))}
      </div>

      <JobPostChart />
      <RevenueChart />
    </div>
  );
};

export default Dashboard;

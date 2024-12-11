"use client";

import {
  ArrowLeft,
  Settings,
  MessagesSquare,
  Clock,
  MessageSquare,
  Camera,
  History,
  CalendarClock,
  CalendarCheck,
  CalendarX2,
  Ban,
} from "lucide-react";
import { useState } from "react";
import { FaRegIdCard } from "react-icons/fa";
import {
  MdOutlineDateRange,
  MdOutlineOutlinedFlag,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import { TbGenderGenderfluid } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { GoChecklist } from "react-icons/go";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";

interface PersonalDetails {
  candidateId: string;
  contactNumber: string;
  dob: string;
  gender: string;
  nric: string;
  nationality: string;
  race: string;
}

interface ProfileStats {
  attendanceRate: number;
  totalCompletedJobs: number;
  cancellationWithProof: number;
  moreThan15hrsCancellation: number;
  neverTurnUp: number;
  lessThan15hrsCancellation: number;
  workingHours: number;
}

export default function EditCandidateProfile() {
  const [activeTab, setActiveTab] = useState("jobHistory");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const tabs = [
    { id: "jobHistory", label: "Job History", icon: History },
    { id: "workHistory", label: "Work History", icon: CalendarClock },
    { id: "feedback", label: "Feedback", icon: MessagesSquare },
  ];

  const personalDetails: PersonalDetails = {
    candidateId: "24575",
    contactNumber: "+85232454",
    dob: "05 - 10 -1992",
    gender: "Male",
    nric: "XXXXXX4575",
    nationality: "Singapore",
    race: "Korean",
  };

  const customLabels: Record<string, string> = {
    candidateId: "Candidate ID",
    contactNumber: "Contact Number",
    dob: "DOB",
    gender: "Gender",
    nric: "NRIC",
    nationality: "Nationality",
    race: "Race",
  };

  const stats: ProfileStats = {
    attendanceRate: 95,
    totalCompletedJobs: 149,
    cancellationWithProof: 1,
    moreThan15hrsCancellation: 4,
    neverTurnUp: 1,
    lessThan15hrsCancellation: 6,
    workingHours: 234,
  };

  const getIcon = (key: string) => {
    switch (key) {
      case "candidateId":
        return <FaRegIdCard className="w-5 h-5 text-[#048BE1]" />;
      case "contactNumber":
        return <MessageSquare className="w-5 h-5 text-[#048BE1]" />;
      case "dob":
        return <MdOutlineDateRange className="w-6 h-6 text-[#048BE1]" />;
      case "gender":
        return <TbGenderGenderfluid className="w-6 h-6 text-[#048BE1]" />;
      case "nric":
        return <FaRegIdCard className="w-5 h-5 text-[#048BE1]" />;
      case "nationality":
        return <MdOutlineOutlinedFlag className="w-7 h-7 text-[#048BE1]" />;
      case "race":
        return <CiUser className="w-6 h-6 text-[#048BE1]" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/project-manager-working-ai-management-260nw-2424036963.jpg')",
        }}
      >
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <button className="p-2 rounded-full shadow-custom bg-white">
            <ArrowLeft className="w-4 h-4 " color="#000000" />
          </button>
          <div className="flex gap-4">
            <button className="px-4 py-3 rounded-[10px] bg-white flex items-center text-black gap-3">
              <Camera className="w-6 h-6" />
              Change cover
            </button>
            <button onClick={toggleMenu} className="p-4 rounded-full bg-white">
              <Settings className="w-6 h-6" />
            </button>
          </div>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 top-14 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <ul className="py-2">
                {/* Block Candidate */}
                <li>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-[#941F15] hover:bg-red-100">
                    <Ban className="w-4 h-4 mr-2 text-red-500" />
                    Block Candidate
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-20">
        <div className="grid md:grid-cols-[320px_1fr] gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl p-6 pt-28">
            <div className="flex flex-col items-center  -mt-20 pb-6 border-b border-[#DDDDDD]">
              <div className="relative flex items-center gap-4">
                <img
                  src="./assets/teamm1.svg"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <p className="mt-8">ID : 24575</p>
              </div>
              <div className="flex items-center gap-2 ">
                <h1 className=" text-xl font-semibold">Ethan Carter </h1>
                <p>(male)</p>
                <span className="px-6  py-1 bg-[#CEFFCF] text-[#049609] text-sm font-normal rounded-full mt-1">
                  Verified
                </span>
              </div>

              <p className="text-sm text-[#4C4C4C] font-medium mt-2 ">
                Age : 35
              </p>
              <p className="text-sm text-[#4C4C4C] font-medium mt-2">
                DOB: 05/10/1888
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold mb-4 text-[16px] text-[#000000]">
                Personal Details
              </h2>
              <div className="space-y-4 mt-8">
                {Object.entries(personalDetails).map(([key, value]) => (
                  <div key={key} className="flex items-start gap-3 my-3">
                    {/* Icon */}
                    <div className="w-5 h-5 mt-0.5">{getIcon(key)}</div>

                    {/* Label and Value */}
                    <div>
                      <p className="text-[16px] font-medium leading-[24px] text-[#048BE1]">
                        {customLabels[key] ||
                          key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                      <p className="text-[20px] leading-[30px] font-normal text-[#000000]">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-3xl py-8 px-12 shadow-sm border border-gray-200 z-10">
            <div className="flex gap-6 py-8 border-b">
              {tabs.map((tab) => {
                const Icon = tab.icon; // Get the icon for the current tab
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)} // Set the active tab on click
                    className={`px-[42px] py-[18px] flex items-center gap-4 rounded-[10px] text-xl font-medium 
              ${
                activeTab === tab.id
                  ? "bg-[#048BE1] text-white " // Active styles
                  : "bg-[#EBEBEB] text-black" // Inactive styles
              }`}
                  >
                    <Icon
                      className={activeTab === tab.id ? "h-7 w-7" : "h-6 w-6"}
                      color={activeTab === tab.id ? "#ffffff" : "#000000"}
                    />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-8 py-12">
              <div className="space-y-6">
                <StatItem
                  icon={CalendarCheck}
                  label="Attendance Rate"
                  value={`${stats.attendanceRate}%`}
                />
                <StatItem
                  icon={MdOutlineVerifiedUser}
                  label="Cancellation with Proof"
                  value={stats.cancellationWithProof}
                />
                <StatItem
                  icon={Clock}
                  label="Never Turn Up"
                  value={stats.neverTurnUp}
                />
                <StatItem
                  icon={Clock}
                  label="Working Hours"
                  value={stats.workingHours}
                />
              </div>

              <div className="space-y-6">
                <StatItem
                  icon={GoChecklist}
                  label="Total Completed Job"
                  value={stats.totalCompletedJobs}
                />
                <StatItem
                  icon={CalendarX2}
                  label="More than 15hrs Cancellation"
                  value={stats.moreThan15hrsCancellation}
                />
                <StatItem
                  icon={CalendarX2}
                  label="Less than 15hrs Cancellation"
                  value={stats.lessThan15hrsCancellation}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatItemProps {
  icon: React.ElementType;
  label: string;
  value: number | string;
}

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, label, value }) => (
  <div className="py-6">
    <div className="flex items-center gap-6 text-gray-600 mb-6">
      <Icon className="w-[30px] h-[30px]" color="#000000" />
      <span className="text-[20px] leading-[24px] text-[#000000] font-medium">
        {label}
      </span>
    </div>
    <p className="text-[36px] font-normal leading-[43px] text-[#000000]">
      {value}
    </p>
  </div>
);

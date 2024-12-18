import {
  ChevronDown,
  ChevronsDownUp,
  CircleOff,
  Hand,
  MapPin,
  MoreVertical,
  Plus,
  Settings,
  Trash2,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { RiTriangleFill } from "react-icons/ri";

type Tab = {
  id: string;
  title: string;
  value: number;
  label: string;
};

const tabs: Tab[] = [
  {
    id: "jobs",
    title: "Active job postings",
    value: 20,
    label: "postings",
  },
  {
    id: "outlets",
    title: "Number of Outlets",
    value: 5,
    label: "outlets",
  },
];

const jobs = [
  {
    title: "Tray Collector",
    id: "#12345",
    date: "10/09/24",
    availableShifts: 5,
    duration: "4 Hrs",
    break: "1 Hr (Unpaid Break)",
    vacancy: "3/5",
    standby: 2,
    pay: "$75",
  },
  {
    title: "Tray Collector",
    id: "#12346",
    date: "10/10/24",
    availableShifts: 4,
    duration: "6 Hrs",
    break: "30 Min (Unpaid Break)",
    vacancy: "2/4",
    standby: 1,
    pay: "$90",
  },
];

const ActiveJobPosting = () => {
  const [isJobMenuOpen, setIsJobMenuOpen] = useState<number | null>(null);
  const [isLimitPopupOpen, setIsLimitPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  // Close the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsLimitPopupOpen(false);
      }
    };

    if (isLimitPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLimitPopupOpen]);

  const toggleJobMenu = (index: number) =>
    setIsJobMenuOpen((prev) => (prev === index ? null : index));

  return (
    <div className="p-6 min-h-screen font-sans">
      {/* Header Section */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          {/* Company Info */}
          <div className="flex">
            <img
              src="/public/assets/companyName.svg"
              alt="Company Logo"
              className="w-24 h-24 rounded-lg"
            />
            <div className="ml-4 h-28 flex flex-col justify-between">
              <h1 className="text-lg flex items-center gap-2 font-semibold">
                <span>RIGHT SERVICE PTE. LTD.</span>{" "}
                <span className="px-6  py-1 bg-[#CEFFCF] text-[#049609] text-sm font-normal rounded-full mt-1">
                  Verified
                </span>
              </h1>
              <div className="flex gap-2 items-center justify-center ">
                <span className="text-[#797979] text-xl flex items-center justify-center gap-2 py-2 px-4 bg-[#F8F8F8] rounded-full cursor-pointer">
                  <MapPin className="w-4 h-4" /> Sengkang, Singapore{" "}
                  <ChevronDown className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
          {/* Settings */}
          <div>
            <div className="flex items-center justify-end gap-4">
              <button
                onClick={() => setIsLimitPopupOpen(!isLimitPopupOpen)}
                className="p-[14px] rounded-[26px] shadow-lg bg-[#FFFFFF] hover:bg-gray-50"
              >
                <Settings className="w-[24px] h-[24px]" />
              </button>

              {/* Set Job Posting Limit Popup */}
              {isLimitPopupOpen && (
                <div
                  ref={popupRef}
                  className="absolute right-[16%] top-[12%] mt-2 w-52 bg-white border rounded-[20px] shadow-lg p-3"
                >
                  {/* Header */}
                  <div className="flex items-center mb-3 gap-2">
                    <ChevronsDownUp className="w-4 h-4" />
                    <h2 className="text-[16px] font-semibold text-gray-800">
                      Set Job Posting Limit
                    </h2>
                  </div>

                  {/* Limit Selector */}
                  <div className="flex items-center justify-between mb-4 border-b border-[#EBEBEB] py-3">
                    <button className="px-2 py-1 text-sm font-semibold bg-black text-white rounded-full hover:bg-gray-700">
                      -10
                    </button>
                    <span className="w-12 text-center border border-gray-300 rounded-md text-sm py-1">
                      50
                    </span>
                    <button className="px-2 py-1 text-sm font-semibold bg-black text-white rounded-full hover:bg-gray-700">
                      +10
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <button className="w-full text-[#E34E30] rounded-md flex items-center gap-2 text-sm border-b border-[#EBEBEB] py-3">
                      <Hand /> <span> Restrict</span>
                    </button>
                    <button className="w-full text-[#E34E30] rounded-md flex items-center gap-2 text-sm border-b border-[#EBEBEB] py-3">
                      <CircleOff /> <span> Block</span>
                    </button>
                    <button className="w-full text-[#E34E30] rounded-md flex items-center gap-2 text-sm py-3">
                      <Trash2 /> <span> Remove</span>
                    </button>
                  </div>
                </div>
              )}

              <button className="p-[14px] rounded-[26px] shadow-lg bg-[#FFFFFF] hover:bg-gray-50 ">
                <Plus className="w-[24px] h-[24px]" />
              </button>
            </div>
            <div className="text-lg flex flex-col justify-end gap-2">
              <p className=" text-end">
                <span className="text-gray-500">Job Posting Limit:</span> 50
              </p>
              <p className=" text-end">
                <span className="text-gray-500">Contract Start Date:</span>{" "}
                03/05/2023
              </p>
              <p className=" text-end">
                <span className="text-gray-500">Contract End Date:</span>{" "}
                04/10/2006
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex w-1/2 gap-4 mt-6">
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="flex space-x-4 border-b-[14px] border-[#0099FF] rounded-b-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-1 relative pb-6 text-center"
              >
                <div className="text-4xl font-bold mb-2">{tab.value}</div>
                <div className="text-sm text-gray-600">{tab.title}</div>
                {activeTab === tab.id && (
                  <div className="relative flex justify-center">
                    <RiTriangleFill
                      className="w-8 h-8 absolute text-center"
                      fill="#0099FF"
                    />
                  </div>
                )}
              </button>
            ))}
            {/* <div className="absolute bottom-0 left-0 w-full h-5 bg-[#0099FF] rounded-full" /> */}
          </div>
        </div>
      </div>

      {/* Job Table */}
      <div className="bg-white mt-6 p-4 rounded-lg shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-gray-500 text-sm">
              <th className="py-2 px-4 text-center">Jobs</th>
              <th className="py-2 px-4 text-center">Id</th>
              <th className="py-2 px-4 text-center">Date</th>
              <th className="py-2 px-4 text-center">Available Shifts</th>
              <th className="py-2 px-4 text-center">Job Duration</th>
              <th className="py-2 px-4 text-center">Vacancy Filled</th>
              <th className="py-2 px-4 text-center">Total Pay/Shift</th>
              <th className="py-2 px-4 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index} className="text-sm hover:bg-gray-50">
                <td className="py-3 px-4 text-center">{job.title}</td>
                <td className="py-3 px-4 text-center">{job.id}</td>
                <td className="py-3 px-4 text-center">{job.date}</td>
                <td className="py-3 px-4 text-center">{job.availableShifts}</td>
                <td className="py-3 px-4 text-center">
                  {job.duration}
                  <br />
                  <span className="text-gray-400 text-xs">{job.break}</span>
                </td>
                <td className="py-3 px-4 text-center">
                  {job.vacancy}
                  <br />
                  <span className="text-blue-500 bg-[#FFF1E3] px-3 py-1 rounded-full mt-1">Standby: {job.standby}</span>
                </td>
                <td className="py-3 px-4 text-center">{job.pay}</td>
                <td className="relative py-3 px-4 text-center">
                  <button
                    onClick={() => toggleJobMenu(index)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <MoreVertical />
                  </button>
                  {isJobMenuOpen === index && (
                    <div className="absolute top-full right-0 mt-2 w-40 bg-white border rounded-lg shadow">
                      <ul>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Edit
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Duplicate
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Show Job Details
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveJobPosting;

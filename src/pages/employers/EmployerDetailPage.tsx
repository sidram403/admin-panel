import React from "react";
import EmployeeStatCard from "../../components/employerDetail/EmployeeStatCard";
import AttendanceChart from "../../components/employerDetail/AttendanceChart";
import {
  ArrowLeft,
  InstagramIcon,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Plus,
  Settings,
} from "lucide-react";
import JobTable from "../../components/employerDetail/JobTable";

const getColor = (value: number): string => {
  if (value < 20) return "red";
  if (value >= 20 && value < 89) return "green";
  return "orange";
};

const EmployerDetailPage: React.FC = () => {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="flex gap-4 mb-6 items-center">
            <ArrowLeft className="rounded-full p-2 shadow-lg w-10 h-10" />
            <img src="/assets/ecompany.png" className="w-10 h-10" alt="" />
            <h1 className="text-4xl font-bold">Dominos</h1>
          </div>
          <div className="flex gap-2">
            <MapPin color="gray" />
            <p className="text-gray-500">123 Orchard Road, Singapore</p>
            <a className="text-blue-300 cursor-pointer">View on map</a>
          </div>
        </div>
        <div>
          <button className="text-gray-500 hover:text-black mx-2">
            <Plus className="rounded-full p-2 shadow-lg w-10 h-10" />
          </button>
          <button className="text-gray-500 hover:text-black mx-2">
            <Settings className="rounded-full p-2 shadow-lg w-10 h-10" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <div className="text-gray-500 flex gap-2">
          <Phone /> <p> (+65) 123 434 543 </p>
        </div>
        <div className="text-gray-500 flex gap-2">
          <Mail /> <p>dominos@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <button className="bg-gray-100 rounded-full p-2 hover:bg-gray-200">
          <img className="w-6 h-6" src="/assets/icons/skype.svg" alt="" />
        </button>
        <button className="bg-gray-100 rounded-full p-2 hover:bg-gray-200">
          <Linkedin className="w-6 h-6" color="gray" fill="gray" />
        </button>
        <button className="bg-gray-100 rounded-full p-2 hover:bg-gray-200">
          <InstagramIcon className="w-6 h-6" color="white" fill="gray" />
        </button>
        <button className="bg-gray-100 rounded-full p-2 hover:bg-gray-200">
          <MessageSquare className="w-6 h-6" color="gray" fill="gray" />
        </button>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-4 gap-6 mt-6">
        {/* Card 1: Total Jobs Posted */}
        <div className="flex flex-col items-center p-8 ">
          <p className="text-2xl font-bold">10</p>
          <p className="text-gray-500 text-sm text-center">Total Jobs Posted</p>
        </div>

        {/* Card 2: Shifts Fully Attended */}
        <div className="flex flex-col items-center p-8 ">
          <p className="text-2xl font-bold">80%</p>
          <p className="text-gray-500 text-sm text-center">
            Shifts Fully Attended
          </p>
        </div>

        {/* Card 3: Shifts Partially Attended */}
        <div className="flex flex-col items-center p-8 ">
          <p className="text-2xl font-bold">15%</p>
          <p className="text-gray-500 text-sm text-center">
            Shifts Partially Attended (&lt;50% absentees)
          </p>
        </div>

        {/* Card 4: Shifts Least Attended */}
        <div className="flex flex-col items-center p-8 ">
          <p className="text-2xl font-bold">5%</p>
          <p className="text-gray-500 text-sm text-center">
            Shifts Least Attended (&gt;50% absentees)
          </p>
        </div>
      </div>

      {/* Circle Stats */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <EmployeeStatCard
          value={85}
          label="Overall Attendance Rate"
          color={getColor(85)}
        />
        <EmployeeStatCard value={5} label="No Show Rate" color={getColor(5)} />
        <EmployeeStatCard
          value={95}
          label="Standby Effectiveness"
          color={getColor(95)}
        />
      </div>

      {/* Attendance Chart */}
      <div className="mt-8">
        <AttendanceChart />
      </div>
      <div className="mt-2">
        <JobTable/>
      </div>
    </div>
  );
};

export default EmployerDetailPage;

import React, { useState } from "react";

const CandidatesTable: React.FC = () => {
  const [selectedShift, setSelectedShift] = useState("11:00 AM");

  const shifts = ["11:00 AM", "04:00 PM", "07:00 PM"];

  const mockData = [
    {
      fullName: "Ethan Carter",
      gender: "Male",
      mobile: "+65 9123 4567",
      dob: "04/10/1989",
      nric: "XXXXXX4575",
      startTime: "11:00 AM",
      endTime: "03:00 PM",
      clockedIn: "11:05 AM",
      clockedOut: "03:00 PM",
      completedJobs: 122,
      confirmedStandby: "Confirmed",
      jobStatus: "Completed",
      wage: "$72 (1 Hr's Unpaid Break)",
    },
    {
      fullName: "Liam Bennett",
      gender: "Male",
      mobile: "+65 9123 4567",
      dob: "04/10/1989",
      nric: "XXXXXX4575",
      startTime: "11:00 AM",
      endTime: "03:00 PM",
      clockedIn: "11:10 AM",
      clockedOut: "02:50 PM",
      completedJobs: 122,
      confirmedStandby: "Confirmed",
      jobStatus: "Completed",
      wage: "$69 (1 Hr's Unpaid Break)",
    },
    {
      fullName: "Ava Sullivan",
      gender: "Female",
      mobile: "+65 9123 4567",
      dob: "04/10/1989",
      nric: "XXXXXX4575",
      startTime: "11:00 AM",
      endTime: "03:00 PM",
      clockedIn: "11:06 AM",
      clockedOut: "03:00 PM",
      completedJobs: 122,
      confirmedStandby: "Standby",
      jobStatus: "Completed",
      wage: "$73 (1 Hr's Unpaid Break)",
    },
  ];

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-black text-white rounded-full">
            All Candidates (8)
          </button>
          <button className="px-4 py-2 bg-gray-100 text-black rounded-full">
            Vacancy Candidates
          </button>
          <button className="px-4 py-2 bg-gray-100 text-black rounded-full">
            Standby Candidates
          </button>
        </div>

        <button className="px-4 py-2 bg-black text-white rounded-lg">Export</button>
      </div>

      {/* Filter Section */}
      <div className="flex items-center gap-4 mb-4">
        <span className="font-medium text-gray-700">Date:</span>
        <input
          type="date"
          className="border border-gray-300 px-4 py-2 rounded-md"
          defaultValue="2024-10-09"
        />
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700">Shifts:</span>
          {shifts.map((shift) => (
            <button
              key={shift}
              className={`px-4 py-2 rounded-full ${
                selectedShift === shift
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-black"
              }`}
              onClick={() => setSelectedShift(shift)}
            >
              {shift}
            </button>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              {[
                "Full Name",
                "Gender",
                "Mobile",
                "DOB",
                "NRIC",
                "Start Time",
                "End Time",
                "Clocked In",
                "Clocked Out",
                "Completed Jobs",
                "Confirmed/Standby",
                "Job Status",
                "Wage Generated",
                "",
              ].map((header) => (
                <th
                  key={header}
                  className="px-4 py-2 text-center border border-gray-300"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {mockData.map((candidate, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="px-4 py-2 text-center border">{candidate.fullName}</td>
                <td className="px-4 py-2 text-center border">{candidate.gender}</td>
                <td className="px-4 py-2 text-center border">{candidate.mobile}</td>
                <td className="px-4 py-2 text-center border">{candidate.dob}</td>
                <td className="px-4 py-2 text-center border">{candidate.nric}</td>
                <td className="px-4 py-2 text-center border">{candidate.startTime}</td>
                <td className="px-4 py-2 text-center border">{candidate.endTime}</td>
                <td className="px-4 py-2 text-center border">{candidate.clockedIn}</td>
                <td className="px-4 py-2 text-center border">{candidate.clockedOut}</td>
                <td className="px-4 py-2 text-center border">
                  {candidate.completedJobs}
                </td>
                <td className="px-4 py-2 text-center border">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      candidate.confirmedStandby === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {candidate.confirmedStandby}
                  </span>
                </td>
                <td className="px-4 py-2 text-center border">
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                    {candidate.jobStatus}
                  </span>
                </td>
                <td className="px-4 py-2 text-center border">{candidate.wage}</td>
                <td className="px-4 py-2 text-center border">
                  <button className="text-blue-500 hover:underline">
                    View Candidate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidatesTable;

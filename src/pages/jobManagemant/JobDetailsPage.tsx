import React from "react";

const JobDetailsPage = () => {
  const shifts = [
    { time: "11:00 AM", vacancy: 3, filled: 3, standby: "1/1", duration: "4 Hrs", pay: "$75 ($15/hr)", break: "1 Hrs (Unpaid Break)" },
    { time: "04:00 PM", vacancy: 3, filled: 2, standby: "_/_", duration: "4 Hrs", pay: "$75 ($15/hr)", break: "1 Hrs (Unpaid Break)" },
    { time: "07:00 PM", vacancy: 4, filled: 1, standby: "1/2", duration: "4 Hrs", pay: "$75 ($15/hr)", break: "1 Hrs (Unpaid Break)" },
  ];

  const penalties = [
    { condition: "5 minutes after applying", penalty: "No Penalty" },
    { condition: "48 Hours", penalty: "No Penalty" },
    { condition: "24 Hours (1st Time)", penalty: "$5 Penalty" },
    { condition: "24 Hours (2nd Time)", penalty: "$10 Penalty" },
    { condition: "24 Hours (3rd Time)", penalty: "$15 Penalty" },
    { condition: "No Show - During Shift", penalty: "$50 Penalty" },
  ];

  return (
    <div className="p-6 bg-gray-100">
      {/* Header Section */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/dominos-logo.png" alt="Dominos" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h1 className="text-xl font-bold">Tray Collector</h1>
              <p className="text-green-500 font-medium">Active</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">Job ID: #12345</p>
            <p>Date: 10/09/24</p>
            <p>Sengkang, Singapore</p>
            <a href="#" className="text-blue-500">View on map</a>
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <button className="bg-purple-500 text-white px-4 py-2 rounded">View Candidates</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Outlet Attendance Rate</button>
        </div>
      </div>

      {/* Shifts Table */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2">Shift Timing</th>
              <th className="px-4 py-2">Vacancy</th>
              <th className="px-4 py-2">Vacancy Filled</th>
              <th className="px-4 py-2">Standby Filled</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Total Pay</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((shift, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{shift.time}</td>
                <td className="px-4 py-2">{shift.vacancy}</td>
                <td className="px-4 py-2">{shift.filled}</td>
                <td className="px-4 py-2">{shift.standby}</td>
                <td className="px-4 py-2">{shift.duration}</td>
                <td className="px-4 py-2">
                  {shift.pay}
                  <br />
                  <span className="text-sm text-gray-500">{shift.break}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Job Scope and Requirements */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold">Job Scope</h2>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Station at tray collection section</li>
          <li>Clearing & Cleaning of table and tray</li>
          <li>Maintain floor cleanliness (Sweep/Mop)</li>
          <li>Push trolley to the dishwashing area</li>
        </ul>

        <h2 className="text-lg font-bold mt-6">Job Requirements</h2>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Black T-shirt</li>
          <li>Dark colored long pants / Jeans</li>
          <li>Covered Shoes</li>
          <li>Must arrive at least 15 mins before job start time for briefing</li>
          <li>Smoking is strictly not allowed</li>
          <li>Do not turn up without prior notice</li>
          <li>Adhere to safety protocols and company policies</li>
        </ul>
      </div>

      {/* Penalties Section */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold">Shift Cancellation Penalties</h2>
        <table className="w-full text-left border border-gray-300 mt-2">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2">Condition</th>
              <th className="px-4 py-2">Penalty</th>
            </tr>
          </thead>
          <tbody>
            {penalties.map((penalty, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{penalty.condition}</td>
                <td className="px-4 py-2">{penalty.penalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobDetailsPage;

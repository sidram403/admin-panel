"use client"

import { useState } from "react"
import { ChevronDown, Filter, MoreHorizontal, Plus } from 'lucide-react'


export interface Employee {
    id: string
    fullName: string
    avatarUrl: string
    gender: string
    mobile: string
    icNumber: string
    dob: string
    registrationDate: string
    turnUpRate: string
    workingHours: string
    avgAttendRate: string
    workPassStatus: "Verified" | "Approved" | "Pending" | "Rejected"
  }


  const employees: Employee[] = [
    {
      id: "23244",
      fullName: "Tim Kimber",
      avatarUrl: "/placeholder.svg",
      gender: "Male",
      mobile: "+658847349",
      icNumber: "",
      dob: "05/10/1988",
      registrationDate: "21/09/2006",
      turnUpRate: "0.00",
      workingHours: "0 Hrs",
      avgAttendRate: "0%",
      workPassStatus: "Verified",
    },
    {
      id: "23244",
      fullName: "Tim Kimber",
      avatarUrl: "/placeholder.svg",
      gender: "Male",
      mobile: "+658847349",
      icNumber: "",
      dob: "05/10/1988",
      registrationDate: "21/09/2006",
      turnUpRate: "0.00",
      workingHours: "0 Hrs",
      avgAttendRate: "0%",
      workPassStatus: "Verified",
    },
    {
      id: "23244",
      fullName: "Tim Kimber",
      avatarUrl: "/placeholder.svg",
      gender: "Male",
      mobile: "+658847349",
      icNumber: "",
      dob: "05/10/1988",
      registrationDate: "21/09/2006",
      turnUpRate: "0.00",
      workingHours: "0 Hrs",
      avgAttendRate: "0%",
      workPassStatus: "Verified",
    },
    {
      id: "23244",
      fullName: "Tim Kimber",
      avatarUrl: "/placeholder.svg",
      gender: "Male",
      mobile: "+658847349",
      icNumber: "",
      dob: "05/10/1988",
      registrationDate: "21/09/2006",
      turnUpRate: "0.00",
      workingHours: "0 Hrs",
      avgAttendRate: "0%",
      workPassStatus: "Verified",
    },
    {
      id: "23244",
      fullName: "Tim Kimber",
      avatarUrl: "/placeholder.svg",
      gender: "Male",
      mobile: "+658847349",
      icNumber: "",
      dob: "05/10/1988",
      registrationDate: "21/09/2006",
      turnUpRate: "0.00",
      workingHours: "0 Hrs",
      avgAttendRate: "0%",
      workPassStatus: "Approved",
    },
    {
      id: "23244",
      fullName: "Tim Kimber",
      avatarUrl: "/placeholder.svg",
      gender: "Male",
      mobile: "+658847349",
      icNumber: "",
      dob: "05/10/1988",
      registrationDate: "21/09/2006",
      turnUpRate: "0.00",
      workingHours: "0 Hrs",
      avgAttendRate: "0%",
      workPassStatus: "Pending",
    },
    {
      id: "23244",
      fullName: "Tim Kimber",
      avatarUrl: "/placeholder.svg",
      gender: "Male",
      mobile: "+658847349",
      icNumber: "",
      dob: "05/10/1988",
      registrationDate: "21/09/2006",
      turnUpRate: "0.00",
      workingHours: "0 Hrs",
      avgAttendRate: "0%",
      workPassStatus: "Rejected",
    },
  ]
  
  

export default function HustleHeroesList() {
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const toggleSelectAll = () => {
    if (selectedRows.length === employees.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(employees.map((emp) => emp.id))
    }
  }

  const toggleSelectRow = (id: string) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

  const getStatusColor = (status: Employee["workPassStatus"]) => {
    switch (status) {
      case "Verified":
        return "bg-green-50 text-green-600"
      case "Approved":
        return "bg-blue-50 text-blue-600"
      case "Pending":
        return "bg-orange-50 text-orange-600"
      case "Rejected":
        return "bg-red-50 text-red-600"
      default:
        return "bg-gray-50 text-gray-600"
    }
  }

  return (
    <div className="p-4 flex flex-col justify-between min-h-screen">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-[36px] font-[500] text-[#1F2937]">Hustle Heroes</h1>

          <div className="flex items-center gap-4 ">
            <button className="p-[14px] rounded-[26px] shadow-lg bg-[#FFFFFF] hover:bg-gray-50 ">
              <Plus className="w-[24px] h-[24px]" />
            </button>
            <button className="p-[14px] rounded-[26px] shadow-lg bg-dark hover:bg-slate-950 ">
              <Filter
                className="w-[20px] h-[20px]"
                color="#FFFFFF"
                fill="#ffffff"
              />
            </button>
          </div>
        </div>
    <div className="w-full overflow-x-auto">
      <table className="table-auto w-full border-collapse relative">
        <thead>
          <tr className="bg-[#EDF8FF] ">
            <th className="p-2 whitespace-nowrap rounded-l-full">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
                checked={selectedRows.length === employees.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="p-2 whitespace-nowrap">Id</th>
            <th className="p-2 whitespace-nowrap">Full Name</th>
            <th className="p-2 whitespace-nowrap">Gender</th>
            <th className="p-2 whitespace-nowrap">Mobile</th>
            <th className="p-2 whitespace-nowrap">IC Number</th>
            <th className="p-2 whitespace-nowrap">DOB</th>
            <th className="p-2 whitespace-nowrap">Registration Date</th>
            <th className="p-2 whitespace-nowrap">Turn Up Rate</th>
            <th className="p-2 whitespace-nowrap">Working Hours</th>
            <th className="p-2 whitespace-nowrap">Avg. Attend Rate</th>
            <th className="p-2 whitespace-nowrap">Work Pass Status</th>
            <th className="p-2 whitespace-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-b">
              <td className="p-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                  checked={selectedRows.includes(employee.id)}
                  onChange={() => toggleSelectRow(employee.id)}
                />
              </td>
              <td className="p-4">{employee.id}</td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <img
                    src={employee.avatarUrl}
                    alt=""
                    className="h-8 w-8 rounded-full bg-gray-200"
                  />
                  <span>{employee.fullName}</span>
                </div>
              </td>
              <td className="p-4">{employee.gender}</td>
              <td className="p-4">{employee.mobile}</td>
              <td className="p-4">{employee.icNumber}</td>
              <td className="p-4">{employee.dob}</td>
              <td className="p-4">{employee.registrationDate}</td>
              <td className="p-4">{employee.turnUpRate}</td>
              <td className="p-4">{employee.workingHours}</td>
              <td className="p-4">{employee.avgAttendRate}</td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(
                      employee.workPassStatus
                    )}`}
                  >
                    {employee.workPassStatus}
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </td>
              <td className="p-4">
                <button className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-200">
                  Action
                  <MoreHorizontal className="ml-1 h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}


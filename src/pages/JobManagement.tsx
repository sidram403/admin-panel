import { Filter, Plus } from 'lucide-react'
import { useState } from 'react'

const JobManagement = () => {
  const [currentPage, setCurrentPage] = useState(1)
  
  const jobs = [
    {
      role: "Tray Collector",
      jobId: "JOB-ID-47245",
      date: "05/05/24",
      timing: "09:00 AM",
      employer: "RIGHT SERVICE PTE LTD",
      shifts: 3,
      vacancyUsers: "6/10",
      standbyUsers: "2/3",
      status: "Active"
    },
    {
      role: "Cashier",
      jobId: "JOB-ID-47245",
      date: "05/05/24",
      timing: "11:00 AM",
      employer: "RIGHT SERVICE PTE LTD",
      shifts: 2,
      vacancyUsers: "5/10",
      standbyUsers: "0/3",
      status: "Upcoming"
    },
    {
      role: "Cashier",
      jobId: "JOB-ID-47245",
      date: "05/05/24",
      timing: "10:00 AM",
      employer: "RIGHT SERVICE PTE LTD",
      shifts: 4,
      vacancyUsers: "8/10",
      standbyUsers: "0/3",
      status: "Cancelled"
    },
    {
      role: "Cashier",
      jobId: "JOB-ID-47245",
      date: "05/05/24",
      timing: "11:00 AM",
      employer: "RIGHT SERVICE PTE LTD",
      shifts: 2,
      vacancyUsers: "10/10",
      standbyUsers: "2/3",
      status: "Completed"
    }
  ]

  return (
    <div className="p-5 max-w-7xl mx-auto font-sans">
      

      {/* Jobs Section */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-[36px] font-[500] text-[#1F2937]">Jobs</h1>
          
          <div className='flex items-center gap-4 '>
          <button className="p-[14px] rounded-[26px] shadow-lg bg-[#FFFFFF] hover:bg-gray-50 ">
            <Plus className='w-[24px] h-[24px]' />
          </button>
          <button className="p-[14px] rounded-[26px] shadow-lg bg-dark hover:bg-slate-950 ">
            <Filter className='w-[20px] h-[20px]' color='#FFFFFF'  fill='#ffffff' />
            </button>
            </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="p-5 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-green-500">12k</h2>
            <p className="text-sm text-gray-600">Total Active Jobs</p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-orange-500">123</h2>
            <p className="text-sm text-gray-600">Upcoming Jobs</p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-red-500">75</h2>
            <p className="text-sm text-gray-600">Cancelled Jobs</p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-blue-500">86%</h2>
            <p className="text-sm text-gray-600">Average Attendance Rate</p>
          </div>
        </div>

        {/* Job Types Filter */}
        <div className="flex gap-6 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            High Demand Jobs
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Moderate Demand Jobs
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            High No Show Jobs
          </div>
        </div>

        {/* Date Filter */}
        <div className="bg-gray-100 p-3 rounded-md mb-6 text-sm flex justify-between">
          <span>1 January 2024</span>
          <span>31 December 2024</span>
        </div>

        {/* Jobs Table */}
        <div className="overflow-x-auto mb-6 border border-gray-200 rounded-lg">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Job Roles</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Timing</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Employer</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Number of shifts</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Vacancy Users</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Standby Users</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobs.map((job, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{job.role}</div>
                      <div className="text-sm text-gray-500">{job.jobId}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{job.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{job.timing}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{job.employer}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{job.shifts}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{job.vacancyUsers}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{job.standbyUsers}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${job.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        job.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800' : 
                        job.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 
                        'bg-blue-100 text-blue-800'}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-500">⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">←</button>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-blue-500 rounded-md bg-blue-500 text-white">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">4</button>
            <span className="px-3 py-1">...</span>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">55</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">56</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">57</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">58</button>
          </div>
          <button className="px-3 py-1 border border-gray-300 rounded-md bg-white hover:bg-gray-50">→</button>
        </div>
      </div>
    </div>
  )
}

export default JobManagement

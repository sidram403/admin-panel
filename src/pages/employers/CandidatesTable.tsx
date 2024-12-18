import React, { useState } from 'react'

interface Candidate {
  id: string
  avatar: string
  fullName: string
  gender: string
  mobile: string
  gcb: string
  nric: string
  startTime: string
  endTime: string
  checkedIn: string
  checkedOut: string
  completedJob: string
  confirmStatus: 'Confirmed' | 'Pending' | 'Standby'
  jobStatus: 'Completed' | 'In Progress'
  jobTitle: string
  wage: number
}

const candidates: Candidate[] = [
  {
    id: '1',
    avatar: '/placeholder.svg?height=32&width=32',
    fullName: 'Ethan Carter',
    gender: 'Male',
    mobile: '+65 8523 4567',
    gcb: '04/10/1998',
    nric: 'XXXXXXX475',
    startTime: '11:00 PM',
    endTime: '03:00 PM',
    checkedIn: '122',
    checkedOut: '122',
    completedJob: '122',
    confirmStatus: 'Confirmed',
    jobStatus: 'Completed',
    jobTitle: 'Wine Guardian',
    wage: 572
  },
  {
    id: '2',
    avatar: '/placeholder.svg?height=32&width=32',
    fullName: 'Liam Bennett',
    gender: 'Male',
    mobile: '+65 8523 4567',
    gcb: '04/10/1998',
    nric: 'XXXXXXX475',
    startTime: '11:00 PM',
    endTime: '03:00 PM',
    checkedIn: '122',
    checkedOut: '122',
    completedJob: '122',
    confirmStatus: 'Confirmed',
    jobStatus: 'Completed',
    jobTitle: 'Wine English Road',
    wage: 589
  },
  {
    id: '3',
    avatar: '/placeholder.svg?height=32&width=32',
    fullName: 'Ava Sullivan',
    gender: 'Female',
    mobile: '+65 8523 4567',
    gcb: '04/10/1998',
    nric: 'XXXXXXX475',
    startTime: '11:00 PM',
    endTime: '03:00 PM',
    checkedIn: '122',
    checkedOut: '122',
    completedJob: '122',
    confirmStatus: 'Standby',
    jobStatus: 'Completed',
    jobTitle: 'Wine English Road',
    wage: 573
  },
]

const Avatar: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="w-8 h-8 rounded-full overflow-hidden">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
)

const Badge: React.FC<{ children: React.ReactNode; variant: string }> = ({ children, variant }) => (
  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${variant}`}>
    {children}
  </span>
)

const Button: React.FC<{ children: React.ReactNode; onClick?: () => void; variant?: string }> = ({ children, onClick, variant = 'default' }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded ${
      variant === 'default' ? 'bg-blue-500 text-white' : 'bg-transparent text-gray-600'
    }`}
  >
    {children}
  </button>
)

export default function CandidateManagement() {
  const [activeTab, setActiveTab] = useState('matching')

  return (
    <div className="w-full space-y-4">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex">
          <button
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === 'matching'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('matching')}
          >
            Matching Candidates ({candidates.length})
          </button>
          <button
            className={`ml-8 py-2 px-4 text-sm font-medium ${
              activeTab === 'unmatching'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('unmatching')}
          >
            Unmatching Candidates (2)
          </button>
        </nav>
      </div>

      {activeTab === 'matching' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Date: 11/01/24
            </div>
            <Button>Export</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GCB</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NRIC</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Checked In</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Checked Out</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed Job</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confirmed/Standby</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wage (Seasonal)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {candidates.map((candidate) => (
                  <tr key={candidate.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Avatar src={candidate.avatar} alt={candidate.fullName} />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{candidate.fullName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.gender}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.mobile}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.gcb}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.nric}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant="bg-blue-100 text-blue-800">{candidate.startTime}</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant="bg-blue-100 text-blue-800">{candidate.endTime}</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.checkedIn}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.checkedOut}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.completedJob}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        variant={
                          candidate.confirmStatus === 'Confirmed'
                            ? 'bg-green-100 text-green-800'
                            : candidate.confirmStatus === 'Standby'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }
                      >
                        {candidate.confirmStatus}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant="bg-orange-100 text-orange-800">
                        {candidate.jobStatus}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${candidate.wage}</div>
                      <div className="text-sm text-gray-500">{candidate.jobTitle}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'unmatching' && (
        <div className="text-center py-4">
          No unmatching candidates to display.
        </div>
      )}
    </div>
  )
}


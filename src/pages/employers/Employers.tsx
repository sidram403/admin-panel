import React, { useState } from "react";
import {
  MoreVertical,
  PhoneCall,
  Edit,
  Trash2,
  UserCheck,
  Plus,
  Filter,
} from "lucide-react";
import Pagination from "../../components/Pagination";

interface Employer {
  companyName: string;
  companyEmail: string;
  employerName: string;
  employerNumber: string;
  employerPosition: string;
  accountNumber: string;
  activeJobPostings: number;
  outlets: number;
  contractStartDate: string;
  contractEndDate: string;
  verificationStatus: string;
}

const employers: Employer[] = Array(5).fill({
  companyName: "RIGHT SERVICE PTE. LTD.",
  companyEmail: "rightservice123@gmail.com",
  employerName: "John Tyler",
  employerNumber: "+65 1234567895",
  employerPosition: "Manager",
  accountNumber: "0052312891",
  activeJobPostings: 20,
  outlets: 5,
  contractStartDate: "03/05/2003",
  contractEndDate: "04/10/2026",
  verificationStatus: "Verified",
});

const EmployerTable: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Current Page:", page);
  };

  const handlePopupToggle = (index: number) => {
    setIsPopupOpen(isPopupOpen === index ? null : index);
  };

  const handleActionClick = (action: string, index: number) => {
    alert(`Action: ${action}, Row: ${index}`);
    setIsPopupOpen(null);
  };

  return (
    <div className="p-4 flex flex-col justify-between min-h-screen">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-[36px] font-[500] text-[#1F2937]">Employers</h1>

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
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse relative">
            <thead>
              <tr className="bg-[#EDF8FF]">
                <th className="p-2 whitespace-nowrap rounded-l-full">
                  Company Name
                </th>
                <th className="p-2 whitespace-nowrap">
                  Company Email
                </th>
                <th className="p-2 whitespace-nowrap">
                  Employer Name
                </th>
                <th className="p-2 whitespace-nowrap">
                  Employer Number
                </th>
                <th className="p-2 whitespace-nowrap">
                  Employer Position
                </th>
                <th className="p-2 whitespace-nowrap">
                  Account Number
                </th>
                <th className="p-2 whitespace-nowrap">
                  Active Job Postings
                </th>
                <th className="p-2 whitespace-nowrap">
                  Outlets
                </th>
                <th className="p-2 whitespace-nowrap">
                  Contract Start Date
                </th>
                <th className="p-2 whitespace-nowrap">
                  Contract End Date
                </th>
                <th className="p-2 whitespace-nowrap">
                  Verification Status
                </th>
                <th className="p-2 whitespace-nowrap rounded-r-full">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {employers.map((employer, index) => (
                <tr key={index} className="text-center">
                  {Object.values(employer).map((value, i) => (
                    <td
                      key={i}
                      className={`border border-gray-300 p-2 whitespace-nowrap overflow-hidden text-ellipsis truncate ${
                        value === "Verified" ? "text-green-500" : "text-black"
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                  <td className="border border-gray-300 p-2">
                    <button
                      className="p-2 text-gray-600 hover:text-black"
                      onClick={() => handlePopupToggle(index)}
                    >
                      <MoreVertical />
                    </button>
                    {isPopupOpen === index && (
                      <div className="absolute top-[30%] right-12 mt-1 w-32 bg-white shadow-md border border-gray-300 rounded-md z-10">
                        <button
                          className="flex items-center gap-2 p-2 w-full text-left text-gray-700 hover:bg-gray-100"
                          onClick={() => handleActionClick("Contact", index)}
                        >
                          <PhoneCall size={16} />
                          Contact
                        </button>
                        <button
                          className="flex items-center gap-2 p-2 w-full text-left text-gray-700 hover:bg-gray-100"
                          onClick={() =>
                            handleActionClick("Details/Edit", index)
                          }
                        >
                          <Edit size={16} />
                          Details/Edit
                        </button>
                        <button
                          className="flex items-center gap-2 p-2 w-full text-left text-gray-700 hover:bg-gray-100"
                          onClick={() => handleActionClick("Block", index)}
                        >
                          <UserCheck size={16} />
                          Block
                        </button>
                        <button
                          className="flex items-center gap-2 p-2 w-full text-left text-gray-700 hover:bg-gray-100"
                          onClick={() => handleActionClick("Remove", index)}
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-50">
        <Pagination
          totalPages={58} // Adjust the total pages
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default EmployerTable;

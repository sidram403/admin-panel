import React from "react";
import {
  Briefcase,
  ShieldCheck,
  AlertCircle,
  DollarSign,
  CheckCircle,
  User,
} from "lucide-react";
// import StatCard from "../components/dashboard/StatCard";
import JobPostChart from "../components/dashboard/JobPostChart";
import RevenueChart from "../components/dashboard/RevenueChart";
import NewApplications from "../components/dashboard/NewApplications";
import DashboardCard from "../components/dashboard/DashboardCard";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <div className="flex gap-2">
          <select className="px-4 py-2 border rounded-lg bg-white">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Job Posted"
          value="132k"
          chartData={[2400, 1398, 9800, 1908, 6039, 4800, 3800, 4300]}
          chartColor={["#797979", "#FFFFFF"]} // Blue gradient
          icon={<Briefcase className="text-blue-500" />}
        />
        <DashboardCard
          title="Activated Hustle Heroes"
          value="13k"
          chartData={[5, 10, 20, 15, 25, 20, 30, 40, 35, 50, 60, 55]}
          chartColor={["#11FF00", "#83FF49"]} // Green gradient
          icon={<ShieldCheck className="text-green-500" />}
        />
        <DashboardCard
          title="Vacancy"
          value="156"
          chartData={[2, 5, 10, 8, 12, 14, 15, 13, 18, 20, 22, 25]}
          chartColor={["#FACC15", "#FEF3C7"]} // Yellow gradient
          icon={<AlertCircle className="text-yellow-500" />}
        />
        <DashboardCard
          title="Pending Verifications"
          value="154"
          chartData={[3, 6, 9, 12, 18, 20, 24, 28, 30, 32, 35, 37]}
          chartColor={["#06B6D4", "#E0F2FE"]} // Teal gradient
          icon={<CheckCircle className="text-teal-500" />}
        />
        <DashboardCard
          title="Pending Payment Transfers"
          value="121"
          chartData={[2, 4, 8, 12, 15, 18, 22, 25, 28, 32, 35, 40]}
          chartColor={["#F97316", "#FFEDD5"]} // Orange gradient
          icon={<DollarSign className="text-orange-500" />}
        />
        <DashboardCard
          title="Total Amount Paid"
          value="122k"
          chartData={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]}
          chartColor={["#3B82F6", "#DBEAFE"]} // Light blue gradient
          icon={<DollarSign className="text-blue-500" />}
        />
        <DashboardCard
          title="No Show"
          value="12"
          chartData={[1, 2, 3, 4, 5, 4, 6, 5, 7, 8, 9, 10]}
          chartColor={["#EF4444", "#FEE2E2"]} // Red gradient
          icon={<AlertCircle className="text-red-500" />}
        />
        <DashboardCard
          title="Verified Hustle Heroes"
          value="122k"
          chartData={[5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115]}
          chartColor={["#22C55E", "#D1FAE5"]} // Green gradient
          icon={<User className="text-green-500" />}
        />
      </div>

        <JobPostChart />
        <RevenueChart />
       

    
    </div>
  );
};

export default Dashboard;

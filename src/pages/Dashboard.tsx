import React from 'react';
import { LineChartComponent } from '@/components/charts/LineChartComponent';
import { StatCard } from '@/components/dashboard/StatCard';
import { ProjectsTable } from '@/components/dashboard/ProjectsTable';

const salesData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

const usersData = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 200 },
  { name: 'Mar', value: 150 },
  { name: 'Apr', value: 300 },
  { name: 'May', value: 250 },
  { name: 'Jun', value: 400 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#051139] text-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Today's Money"
          value="$53,000"
          change="+55% since last week"
          gradient="bg-gradient-to-r from-[#0075FF] to-[#00A3FF]"
        />
        <StatCard
          title="Today's Users"
          value="2,300"
          change="+5% since last month"
          gradient="bg-gradient-to-r from-[#FF0080] to-[#7928CA]"
        />
        <StatCard
          title="New Clients"
          value="+3,052"
          change="-14% since last month"
          gradient="bg-gradient-to-r from-[#2CD9FF] to-[#7EE7FC]"
        />
        <StatCard
          title="Total Sales"
          value="$173,000"
          change="+8% since last month"
          gradient="bg-gradient-to-r from-[#4DFF03] to-[#00B712]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#0f1535] p-6 rounded-lg border-none">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <LineChartComponent
            data={salesData}
            title="Sales"
            color="#0075FF"
            dataKey="value"
          />
        </div>

        <div className="bg-[#0f1535] p-6 rounded-lg border-none">
          <h2 className="text-lg font-semibold mb-4">Active Users</h2>
          <LineChartComponent
            data={usersData}
            title="Users"
            color="#FF0080"
            dataKey="value"
          />
        </div>
      </div>

      <ProjectsTable />
    </div>
  );
};

export default Dashboard;
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#051139] text-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Stats Cards */}
        <Card className="bg-gradient-to-r from-[#0075FF] to-[#00A3FF] border-none">
          <CardHeader className="text-lg font-semibold">Today's Money</CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$53,000</div>
            <div className="text-sm opacity-80">+55% since last week</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-[#FF0080] to-[#7928CA] border-none">
          <CardHeader className="text-lg font-semibold">Today's Users</CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,300</div>
            <div className="text-sm opacity-80">+5% since last month</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-[#2CD9FF] to-[#7EE7FC] border-none">
          <CardHeader className="text-lg font-semibold">New Clients</CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+3,052</div>
            <div className="text-sm opacity-80">-14% since last month</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-[#4DFF03] to-[#00B712] border-none">
          <CardHeader className="text-lg font-semibold">Total Sales</CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$173,000</div>
            <div className="text-sm opacity-80">+8% since last month</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="bg-[#0f1535] border-none">
          <CardHeader className="text-lg font-semibold">Sales Overview</CardHeader>
          <CardContent className="h-[400px]">
            <ChartContainer config={{
              sales: { color: "#0075FF" }
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a1f37" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#0f1535] p-3 rounded border border-[#1a1f37]">
                          <p className="text-white">{`Value : ${payload[0].value}`}</p>
                        </div>
                      );
                    }
                    return null;
                  }} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0075FF" 
                    strokeWidth={3}
                    dot={{ stroke: '#0075FF', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-[#0f1535] border-none">
          <CardHeader className="text-lg font-semibold">Active Users</CardHeader>
          <CardContent className="h-[400px]">
            <ChartContainer config={{
              users: { color: "#FF0080" }
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a1f37" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#0f1535] p-3 rounded border border-[#1a1f37]">
                          <p className="text-white">{`Users : ${payload[0].value}`}</p>
                        </div>
                      );
                    }
                    return null;
                  }} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#FF0080" 
                    strokeWidth={3}
                    dot={{ stroke: '#FF0080', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Projects Table */}
      <Card className="bg-[#0f1535] border-none">
        <CardHeader className="text-lg font-semibold">Projects</CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1a1f37]">
                  <th className="text-left p-4">Project</th>
                  <th className="text-left p-4">Budget</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Completion</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#1a1f37]">
                  <td className="p-4">Vision UI Version</td>
                  <td className="p-4">$14,000</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded">Working</span>
                  </td>
                  <td className="p-4">60%</td>
                </tr>
                <tr className="border-b border-[#1a1f37]">
                  <td className="p-4">Add Progress Track</td>
                  <td className="p-4">$3,000</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-500 rounded">Done</span>
                  </td>
                  <td className="p-4">100%</td>
                </tr>
                <tr>
                  <td className="p-4">Fix Platform Errors</td>
                  <td className="p-4">Not set</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-red-500/20 text-red-500 rounded">Canceled</span>
                  </td>
                  <td className="p-4">30%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
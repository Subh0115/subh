import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Project {
  name: string;
  budget: string;
  status: 'Working' | 'Done' | 'Canceled';
  completion: string;
}

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'Working':
      return 'bg-green-500/20 text-green-500';
    case 'Done':
      return 'bg-blue-500/20 text-blue-500';
    case 'Canceled':
      return 'bg-red-500/20 text-red-500';
    default:
      return '';
  }
};

export const ProjectsTable = () => {
  const projects: Project[] = [
    { name: 'Vision UI Version', budget: '$14,000', status: 'Working', completion: '60%' },
    { name: 'Add Progress Track', budget: '$3,000', status: 'Done', completion: '100%' },
    { name: 'Fix Platform Errors', budget: 'Not set', status: 'Canceled', completion: '30%' }
  ];

  return (
    <Card className="bg-[#0f1535] border-none">
      <CardHeader className="text-lg font-semibold text-white">Projects</CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1a1f37]">
                <th className="text-left p-4 text-white">Project</th>
                <th className="text-left p-4 text-white">Budget</th>
                <th className="text-left p-4 text-white">Status</th>
                <th className="text-left p-4 text-white">Completion</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} className="border-b border-[#1a1f37]">
                  <td className="p-4 text-white">{project.name}</td>
                  <td className="p-4 text-white">{project.budget}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="p-4 text-white">{project.completion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
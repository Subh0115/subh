import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

interface LineChartProps {
  data: any[];
  title: string;
  color: string;
  dataKey: string;
}

export const LineChartComponent = ({ data, title, color, dataKey }: LineChartProps) => {
  return (
    <div className="h-[400px]">
      <ChartContainer config={{
        [dataKey]: { color }
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
                    <p className="text-white">{`${title}: ${payload[0].value}`}</p>
                  </div>
                );
              }
              return null;
            }} />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              strokeWidth={3}
              dot={{ stroke: color, strokeWidth: 2, r: 4 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  gradient: string;
}

export const StatCard = ({ title, value, change, gradient }: StatCardProps) => {
  return (
    <Card className={`${gradient} border-none`}>
      <CardHeader className="text-lg font-semibold text-white">{title}</CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm opacity-80 text-white">{change}</div>
      </CardContent>
    </Card>
  );
};
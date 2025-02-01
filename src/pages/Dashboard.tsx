import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts";

const spendingData = [
  { date: 'Jan 1', RDS: 500, EC2: 300, ElastiCache: 200, CloudFront: 150, CloudWatch: 100, Other: 400, Savings: 800 },
  // ... Add more data points to match the graph
];

const savingsData = [
  { name: 'EC2', account: 'Production', date: 'Jan 20, 2024', cost: 820.43, savings: 359.12, percentage: '63.87%', netCost: 561.31 },
  { name: 'RDS', account: 'Production', date: 'Jan 20, 2024', cost: 642.60, savings: 107.10, percentage: '16.6%', netCost: 535.50 },
  { name: 'ElastiCache', account: 'Staging', date: 'Jan 20, 2024', cost: 452.87, savings: 54.35, percentage: '12%', netCost: 398.52 },
  { name: 'CloudFront', account: 'Production', date: 'Jan 20, 2024', cost: 75.10, savings: 3.75, percentage: '4.99%', netCost: 71.35 },
];

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/signin');
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/signin');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold">All Accounts</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm rounded-full bg-input">1M</button>
            <button className="px-3 py-1 text-sm rounded-full bg-input">3M</button>
            <button className="px-3 py-1 text-sm rounded-full bg-input">6M</button>
            <button className="px-3 py-1 text-sm rounded-full bg-input">1Y</button>
            <button className="px-3 py-1 text-sm rounded-full bg-accent text-primary">ALL</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">$50,104</div>
                  <div className="text-sm text-muted-foreground">Net spend</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$20,062</div>
                  <div className="text-sm text-muted-foreground">Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$5,910</div>
                  <div className="text-sm text-muted-foreground">Pending savings</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">$20K</div>
                    <div className="text-sm text-muted-foreground">$2,500 left</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">$17.5K</div>
                    <div className="text-sm text-muted-foreground">Projected</div>
                  </div>
                </div>
                <div className="h-[100px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={spendingData}>
                      <Line type="monotone" dataKey="Savings" stroke="#C7FB76" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Guardrails</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10</div>
                <div className="text-sm text-muted-foreground">Alerts</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Spend after savings by service</CardTitle>
              <div className="text-sm text-muted-foreground">Jan 1 - Jan 31, 2024</div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer config={{}}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={spendingData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="RDS" stackId="a" fill="#4A90E2" />
                    <Bar dataKey="EC2" stackId="a" fill="#50E3C2" />
                    <Bar dataKey="ElastiCache" stackId="a" fill="#F5A623" />
                    <Bar dataKey="CloudFront" stackId="a" fill="#7ED321" />
                    <Bar dataKey="CloudWatch" stackId="a" fill="#BD10E0" />
                    <Bar dataKey="Other" stackId="a" fill="#9013FE" />
                    <Bar dataKey="Savings" stackId="a" fill="#C7FB76" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Savings summary</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>SERVICE</TableHead>
                  <TableHead>ACCOUNT</TableHead>
                  <TableHead>DATE</TableHead>
                  <TableHead>ON DEMAND COST</TableHead>
                  <TableHead>SAVINGS</TableHead>
                  <TableHead>NET COST</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {savingsData.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell>{row.account}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>${row.cost}</TableCell>
                    <TableCell>
                      ${row.savings}
                      <span className="ml-2 text-xs text-muted-foreground">
                        {row.percentage}
                      </span>
                    </TableCell>
                    <TableCell>${row.netCost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
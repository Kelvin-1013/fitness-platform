import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const usageData = [
  { time: '00:00', usage: 65 },
  { time: '04:00', usage: 78 },
  { time: '08:00', usage: 85 },
  { time: '12:00', usage: 92 },
  { time: '16:00', usage: 88 },
  { time: '20:00', usage: 95 }
];

const maintenanceData = [
  { date: '2024-01', score: 95 },
  { date: '2024-02', score: 92 },
  { date: '2024-03', score: 88 },
  { date: '2024-04', score: 90 },
  { date: '2024-05', score: 87 }
];

const EquipmentDetail = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-6 py-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
        Equipment Details - {id}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-border/50 bg-card shadow-lg hover:shadow-xl transition-shadow duration-200">
          <CardHeader className="border-b border-border/10">
            <CardTitle className="text-xl font-semibold text-primary">Equipment Status</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-2 rounded-lg hover:bg-accent/5 transition-colors">
                <span className="text-muted-foreground">Status</span>
                <span className="text-green-500 dark:text-green-400 font-medium">Active</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg hover:bg-accent/5 transition-colors">
                <span className="text-muted-foreground">Last Maintenance</span>
                <span className="text-card-foreground font-medium">2024-05-15</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg hover:bg-accent/5 transition-colors">
                <span className="text-muted-foreground">Total Usage Hours</span>
                <span className="text-card-foreground font-medium">1,245</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg hover:bg-accent/5 transition-colors">
                <span className="text-muted-foreground">Health Score</span>
                <span className="text-green-500 dark:text-green-400 font-medium">95%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-border/50 bg-card shadow-lg hover:shadow-xl transition-shadow duration-200">
          <CardHeader className="border-b border-border/10">
            <CardTitle className="text-xl font-semibold text-primary">Usage Statistics</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="time" 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                      color: "hsl(var(--card-foreground))"
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="usage" 
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 border-border/50 bg-card shadow-lg hover:shadow-xl transition-shadow duration-200 mb-8">
        <CardHeader className="border-b border-border/10">
          <CardTitle className="text-xl font-semibold text-primary">Maintenance History</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={maintenanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="date" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                    color: "hsl(var(--card-foreground))"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EquipmentDetail;
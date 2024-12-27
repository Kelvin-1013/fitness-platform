import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface UserStatsProps {
  userId: number;
  activityData: {
    date: string;
    visits: number;
  }[];
}

const UserStats = ({ userId, activityData }: UserStatsProps) => {
  return (
    <Card className="w-full bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">
          Activity Statistics
        </CardTitle>
        <CardDescription className="text-gray-300">
          User activity over the last 7 days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityData}>
              <XAxis 
                dataKey="date" 
                stroke="#ffffff" 
                fontSize={12}
              />
              <YAxis 
                stroke="#ffffff" 
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1b1e',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="visits" 
                stroke="#8884d8" 
                strokeWidth={2}
                dot={{ fill: '#8884d8' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserStats;
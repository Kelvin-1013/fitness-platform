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
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Equipment Details - {id}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Equipment Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Status</span>
                <span className="text-green-400">Active</span>
              </div>
              <div className="flex justify-between">
                <span>Last Maintenance</span>
                <span>2024-05-15</span>
              </div>
              <div className="flex justify-between">
                <span>Total Usage Hours</span>
                <span>1,245</span>
              </div>
              <div className="flex justify-between">
                <span>Health Score</span>
                <span className="text-green-400">95%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle>Usage Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '0.375rem'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="usage" 
                    stroke="#60A5FA"
                    strokeWidth={2}
                    dot={{ fill: '#60A5FA' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 text-white mb-8">
        <CardHeader>
          <CardTitle>Maintenance History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={maintenanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.375rem'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#34D399"
                  strokeWidth={2}
                  dot={{ fill: '#34D399' }}
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
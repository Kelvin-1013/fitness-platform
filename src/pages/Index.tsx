import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FeedbackViewer from '@/components/FeedbackViewer';
import Roadmap from '@/components/Roadmap';
import News from '@/components/News';

const data = [
  { time: '00:00', value: 65 },
  { time: '04:00', value: 78 },
  { time: '08:00', value: 85 },
  { time: '12:00', value: 92 },
  { time: '16:00', value: 88 },
  { time: '20:00', value: 95 }
];

const Index = () => {
  const navigate = useNavigate();

  const handleEquipmentClick = (id: string) => {
    navigate(`/equipment/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Smart Fitness Dashboard</h1>
        <p className="text-gray-400">Real-time equipment monitoring and training metrics</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          className="bg-gray-800 border-gray-700 p-6 cursor-pointer hover:bg-gray-700 transition-colors"
          onClick={() => handleEquipmentClick('treadmill-x1')}
        >
          <h2 className="text-xl font-semibold mb-4">Connected Equipment</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Treadmill X1</span>
              <span className="text-green-400">Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Smart Rack Pro</span>
              <span className="text-yellow-400">Maintenance</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Power Bike V2</span>
              <span className="text-green-400">Active</span>
            </div>
          </div>
        </Card>

        <Card className="bg-gray-800 border-gray-700 p-6">
          <h2 className="text-xl font-semibold mb-4">Training Metrics</h2>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
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
                  dataKey="value" 
                  stroke="#60A5FA"
                  strokeWidth={2}
                  dot={{ fill: '#60A5FA' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="bg-gray-800 border-gray-700 p-6">
          <h2 className="text-xl font-semibold mb-4">Active Users</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Total Active</p>
                <p className="text-3xl font-bold text-blue-400">247</p>
              </div>
              <div>
                <p className="font-medium">Peak Hours</p>
                <p className="text-3xl font-bold text-green-400">16:00</p>
              </div>
            </div>
          </div>
        </Card>

        <FeedbackViewer />
        <Roadmap />
        <News />
      </div>
    </div>
  );
};

export default Index;
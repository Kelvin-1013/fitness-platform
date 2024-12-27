import { Bell, RefreshCw, ChevronRight, Info } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import {
  Tooltip as TooltipUI,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Extended data with more metrics
const data = [
  { time: '00:00', performance: 65, intensity: 45, duration: 30 },
  { time: '04:00', performance: 78, intensity: 60, duration: 45 },
  { time: '08:00', performance: 85, intensity: 75, duration: 55 },
  { time: '12:00', performance: 92, intensity: 85, duration: 60 },
  { time: '16:00', performance: 88, intensity: 70, duration: 50 },
  { time: '20:00', performance: 95, intensity: 80, duration: 65 }
];

const TrainingMetricsCard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleRefreshStats = () => {
    console.log("Refreshing training metrics");
    toast({
      title: "Training Metrics Updated",
      description: "Latest metrics have been loaded",
    });
  };

  const handleNotification = () => {
    console.log("Opening notifications");
    toast({
      title: "Training Notifications",
      description: "You have 3 new training updates",
    });
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background/95 p-3 rounded-lg shadow-lg border border-border">
          <p className="text-sm font-medium mb-2">{`Time: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="bg-gradient-to-br from-indigo-900 to-blue-900 border-none shadow-xl">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              Training Metrics
            </h2>
            <TooltipProvider>
              <TooltipUI>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Detailed view of your training performance</p>
                </TooltipContent>
              </TooltipUI>
            </TooltipProvider>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleNotification}
              className="hover:bg-white/10"
            >
              <Bell className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleRefreshStats}
              className="hover:bg-white/10"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-xs text-gray-300">Avg Performance</p>
              <p className="text-lg font-semibold text-white">87%</p>
            </div>
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-xs text-gray-300">Avg Intensity</p>
              <p className="text-lg font-semibold text-white">75%</p>
            </div>
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-xs text-gray-300">Avg Duration</p>
              <p className="text-lg font-semibold text-white">50m</p>
            </div>
          </div>
        </div>

        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="time" 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="top" 
                height={36}
                formatter={(value) => <span className="text-gray-300">{value}</span>}
              />
              <Line 
                type="monotone" 
                dataKey="performance" 
                stroke="#60A5FA" 
                strokeWidth={2}
                dot={{ fill: '#60A5FA' }}
                name="Performance"
              />
              <Line 
                type="monotone" 
                dataKey="intensity" 
                stroke="#F472B6" 
                strokeWidth={2}
                dot={{ fill: '#F472B6' }}
                name="Intensity"
              />
              <Line 
                type="monotone" 
                dataKey="duration" 
                stroke="#34D399" 
                strokeWidth={2}
                dot={{ fill: '#34D399' }}
                name="Duration"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex justify-end">
          <Button 
            variant="ghost" 
            className="text-blue-300 hover:text-blue-200 hover:bg-white/10"
            onClick={() => navigate('/analytics')}
          >
            View Details <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainingMetricsCard;
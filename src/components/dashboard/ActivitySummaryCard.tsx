import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Target, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const ActivitySummaryCard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleViewDetails = () => {
    console.log("Viewing activity details");
    navigate('/analytics');
    toast({
      title: "Activity Details",
      description: "Navigating to detailed activity view",
    });
  };

  const activities = [
    {
      icon: Calendar,
      title: "Weekly Sessions",
      value: "24",
      change: "+3 vs last week"
    },
    {
      icon: Clock,
      title: "Avg. Duration",
      value: "45m",
      change: "+5m vs last week"
    },
    {
      icon: Target,
      title: "Goals Met",
      value: "85%",
      change: "+12% vs last week"
    },
    {
      icon: Trophy,
      title: "Achievements",
      value: "12",
      change: "+2 new this week"
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-purple-900 to-indigo-900 border-none shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold text-white">Activity Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => {
                console.log(`Clicked ${activity.title}`);
                toast({
                  title: activity.title,
                  description: `Current value: ${activity.value}`,
                });
              }}
            >
              <div className="flex items-center gap-3">
                <activity.icon className="w-5 h-5 text-blue-300" />
                <div>
                  <p className="text-sm font-medium text-gray-200">{activity.title}</p>
                  <p className="text-2xl font-bold text-white">{activity.value}</p>
                  <p className="text-xs text-blue-300">{activity.change}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button 
          className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white"
          onClick={handleViewDetails}
        >
          View Full Report
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActivitySummaryCard;
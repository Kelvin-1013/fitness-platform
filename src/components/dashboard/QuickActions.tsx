import { Activity, Users, Dumbbell, Bell, RefreshCw, Calendar, Timer } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleQuickAction = (action: string) => {
    console.log("Quick action triggered:", action);
    
    switch(action) {
      case "Analytics":
        navigate('/analytics');
        break;
      case "Users":
        navigate('/users');
        break;
      case "Equipment":
        navigate('/equipment');
        break;
      case "Workouts":
        navigate('/workouts');
        break;
      case "Nutrition":
        navigate('/nutrition');
        break;
      case "Schedule":
        navigate('/schedule');
        break;
    }
    
    toast({
      title: "Action Triggered",
      description: `${action} action has been initiated`,
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <Button 
        variant="outline" 
        className="hover:scale-105 transition-transform bg-opacity-20 backdrop-blur-lg"
        onClick={() => handleQuickAction("Analytics")}
      >
        <Activity className="w-4 h-4 mr-2" />
        Analytics
      </Button>
      <Button 
        variant="outline"
        className="hover:scale-105 transition-transform bg-opacity-20 backdrop-blur-lg"
        onClick={() => handleQuickAction("Users")}
      >
        <Users className="w-4 h-4 mr-2" />
        Users
      </Button>
      <Button 
        variant="outline"
        className="hover:scale-105 transition-transform bg-opacity-20 backdrop-blur-lg"
        onClick={() => handleQuickAction("Equipment")}
      >
        <Dumbbell className="w-4 h-4 mr-2" />
        Equipment
      </Button>
      <Button 
        variant="outline"
        className="hover:scale-105 transition-transform bg-opacity-20 backdrop-blur-lg"
        onClick={() => handleQuickAction("Workouts")}
      >
        <Timer className="w-4 h-4 mr-2" />
        Workouts
      </Button>
      <Button 
        variant="outline"
        className="hover:scale-105 transition-transform bg-opacity-20 backdrop-blur-lg"
        onClick={() => handleQuickAction("Nutrition")}
      >
        <Bell className="w-4 h-4 mr-2" />
        Nutrition
      </Button>
      <Button 
        variant="outline"
        className="hover:scale-105 transition-transform bg-opacity-20 backdrop-blur-lg"
        onClick={() => handleQuickAction("Schedule")}
      >
        <Calendar className="w-4 h-4 mr-2" />
        Schedule
      </Button>
    </div>
  );
};

export default QuickActions;
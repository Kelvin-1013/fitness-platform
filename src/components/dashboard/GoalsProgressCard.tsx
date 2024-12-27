import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckCircle, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const GoalsProgressCard = () => {
  const { toast } = useToast();

  const goals = [
    {
      title: "Increase Member Retention",
      progress: 75,
      status: "on-track"
    },
    {
      title: "Equipment Utilization",
      progress: 90,
      status: "completed"
    },
    {
      title: "New Member Sign-ups",
      progress: 45,
      status: "in-progress"
    }
  ];

  const handleGoalClick = (goal: typeof goals[0]) => {
    console.log("Goal clicked:", goal);
    toast({
      title: `Goal: ${goal.title}`,
      description: `Current progress: ${goal.progress}%`,
    });
  };

  const handleRefreshGoals = () => {
    console.log("Refreshing goals");
    toast({
      title: "Goals Updated",
      description: "Latest progress has been loaded",
    });
  };

  return (
    <Card className="bg-gradient-to-br from-emerald-900 to-teal-900 border-none shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
          <Target className="h-5 w-5" />
          Goals Progress
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={handleRefreshGoals}>
          <CheckCircle className="h-5 w-5 text-white" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => handleGoalClick(goal)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-white">{goal.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-2 w-24 bg-white/20 rounded-full">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-emerald-300">{goal.progress}%</span>
                  </div>
                </div>
                <Circle className={`h-5 w-5 ${
                  goal.status === 'completed' ? 'text-emerald-400' :
                  goal.status === 'on-track' ? 'text-blue-400' :
                  'text-yellow-400'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalsProgressCard;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Dumbbell, Activity, Timer } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StatsOverview = () => {
  const { toast } = useToast();

  const handleStatClick = (statName: string) => {
    console.log("Stat clicked:", statName);
    toast({
      title: "Statistics Details",
      description: `Viewing detailed ${statName} information`,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card 
        className="hover:bg-accent/10 transition-colors cursor-pointer"
        onClick={() => handleStatClick("Active Members")}
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Active Members</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234</div>
          <p className="text-xs text-muted-foreground">+12% from last month</p>
        </CardContent>
      </Card>

      <Card 
        className="hover:bg-accent/10 transition-colors cursor-pointer"
        onClick={() => handleStatClick("Equipment Usage")}
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Equipment Usage</CardTitle>
          <Dumbbell className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">85%</div>
          <p className="text-xs text-muted-foreground">Average daily utilization</p>
        </CardContent>
      </Card>

      <Card 
        className="hover:bg-accent/10 transition-colors cursor-pointer"
        onClick={() => handleStatClick("Active Sessions")}
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">42</div>
          <p className="text-xs text-muted-foreground">Current active users</p>
        </CardContent>
      </Card>

      <Card 
        className="hover:bg-accent/10 transition-colors cursor-pointer"
        onClick={() => handleStatClick("Average Session")}
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Average Session</CardTitle>
          <Timer className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">47m</div>
          <p className="text-xs text-muted-foreground">Per user today</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsOverview;
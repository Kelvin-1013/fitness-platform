import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Save, Dumbbell, Timer, Activity, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Workouts = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive) {
      interval = setInterval(() => {
        setCurrentTime(time => time + 1);
        setCaloriesBurned(cals => cals + 0.2); // Rough estimate of calories burned per second
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStartStop = () => {
    setIsActive(!isActive);
    toast.success(isActive ? "Workout paused" : "Workout started");
  };

  const handleReset = () => {
    setCurrentTime(0);
    setCaloriesBurned(0);
    setIsActive(false);
    toast.info("Workout reset");
  };

  const handleSave = () => {
    toast.success("Workout saved successfully", {
      description: `Duration: ${Math.floor(currentTime / 60)}:${(currentTime % 60).toString().padStart(2, '0')}, Calories: ${Math.round(caloriesBurned)}`
    });
  };

  const startQuickWorkout = (type: string) => {
    setIsActive(true);
    toast.success(`${type} workout started`, {
      description: "Timer started automatically"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Workout Tracker
        </h1>
        <p className="text-lg text-gray-300">Track and manage your workouts</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl hover:shadow-2xl transition-all">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Current Workout
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-4xl font-bold text-center">
              {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}
            </div>
            <div className="text-xl text-center text-green-400">
              Calories: {Math.round(caloriesBurned)}
            </div>
            <div className="flex justify-center space-x-4">
              <Button onClick={handleStartStop} variant="outline" size="icon" className="hover:scale-110 transition-transform">
                {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button onClick={handleReset} variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button onClick={handleSave} variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Save className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl hover:shadow-2xl transition-all">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Quick Start Workouts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              className="w-full justify-start hover:scale-105 transition-transform" 
              variant="outline"
              onClick={() => startQuickWorkout("Strength")}
            >
              <Dumbbell className="mr-2 h-4 w-4" />
              Strength Training
            </Button>
            <Button 
              className="w-full justify-start hover:scale-105 transition-transform" 
              variant="outline"
              onClick={() => startQuickWorkout("HIIT")}
            >
              <Activity className="mr-2 h-4 w-4" />
              HIIT Session
            </Button>
            <Button 
              className="w-full justify-start hover:scale-105 transition-transform" 
              variant="outline"
              onClick={() => startQuickWorkout("Cardio")}
            >
              <Heart className="mr-2 h-4 w-4" />
              Cardio Workout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Workouts;
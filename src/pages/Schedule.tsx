import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, Clock, Users, Dumbbell, Trophy } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface ScheduledEvent {
  id: number;
  title: string;
  time: string;
  type: string;
}

const Schedule = () => {
  const [events, setEvents] = useState<ScheduledEvent[]>([]);

  const handleAddEvent = (type: string) => {
    const newEvent: ScheduledEvent = {
      id: Date.now(),
      title: `${type} Session`,
      time: new Date().toLocaleTimeString(),
      type
    };
    setEvents([...events, newEvent]);
    toast.success(`New ${type} session scheduled`, {
      description: `Added for ${newEvent.time}`
    });
  };

  const handleClearSchedule = () => {
    setEvents([]);
    toast.info("Schedule cleared");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Training Schedule
        </h1>
        <p className="text-lg text-gray-300">Manage your training sessions</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl hover:shadow-2xl transition-all">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Schedule Training
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={() => handleAddEvent("Personal Training")} 
              className="w-full justify-start hover:scale-105 transition-transform"
              variant="outline"
            >
              <Users className="w-4 h-4 mr-2" />
              Schedule Personal Training
            </Button>
            <Button 
              onClick={() => handleAddEvent("Group Class")} 
              className="w-full justify-start hover:scale-105 transition-transform"
              variant="outline"
            >
              <Users className="w-4 h-4 mr-2" />
              Schedule Group Class
            </Button>
            <Button 
              onClick={() => handleAddEvent("Gym Session")} 
              className="w-full justify-start hover:scale-105 transition-transform"
              variant="outline"
            >
              <Dumbbell className="w-4 h-4 mr-2" />
              Schedule Gym Session
            </Button>
            <Button 
              onClick={handleClearSchedule}
              className="w-full justify-start hover:scale-105 transition-transform"
              variant="outline"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Clear Schedule
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl hover:shadow-2xl transition-all">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {events.length === 0 ? (
              <div className="text-center text-gray-300">
                <Calendar className="w-12 h-12 mx-auto mb-4" />
                <p>No events scheduled for today</p>
              </div>
            ) : (
              events.map(event => (
                <div key={event.id} className="p-3 bg-gray-800 rounded-lg flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.title}</span>
                  </div>
                  <span className="text-sm text-gray-400">{event.time}</span>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;
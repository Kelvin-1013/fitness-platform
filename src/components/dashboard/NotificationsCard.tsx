import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const NotificationsCard = () => {
  const { toast } = useToast();

  const notifications = [
    {
      id: 1,
      type: "success",
      message: "Equipment maintenance completed",
      time: "2 hours ago",
      icon: CheckCircle
    },
    {
      id: 2,
      type: "warning",
      message: "Treadmill #3 requires attention",
      time: "4 hours ago",
      icon: AlertCircle
    },
    {
      id: 3,
      type: "info",
      message: "New member orientation scheduled",
      time: "5 hours ago",
      icon: Info
    }
  ];

  const handleNotificationClick = (id: number) => {
    console.log("Notification clicked:", id);
    toast({
      title: "Notification Details",
      description: "Opening notification details view",
    });
  };

  const handleClearAll = () => {
    console.log("Clearing all notifications");
    toast({
      title: "Notifications Cleared",
      description: "All notifications have been cleared",
    });
  };

  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notifications
        </CardTitle>
        <Button variant="outline" size="sm" onClick={handleClearAll}>
          Clear All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start space-x-4 p-3 hover:bg-accent/10 rounded-lg cursor-pointer transition-colors"
              onClick={() => handleNotificationClick(notification.id)}
            >
              <notification.icon className="h-5 w-5 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">{notification.message}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationsCard;
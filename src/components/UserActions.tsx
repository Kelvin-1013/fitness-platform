import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Mail, Ban, Crown, RefreshCw } from "lucide-react";

interface UserActionsProps {
  userId: number;
  status: string;
  membership: string;
}

const UserActions = ({ userId, status, membership }: UserActionsProps) => {
  const handleSendEmail = () => {
    console.log("Sending email to user:", userId);
    toast({
      title: "Email Sent",
      description: "Communication has been sent to the user.",
    });
  };

  const handleToggleStatus = () => {
    console.log("Toggling status for user:", userId);
    toast({
      title: "Status Updated",
      description: `User has been ${status === 'Active' ? 'deactivated' : 'activated'}.`,
    });
  };

  const handleUpgradeMembership = () => {
    console.log("Upgrading membership for user:", userId);
    toast({
      title: "Membership Updated",
      description: "User membership has been upgraded.",
    });
  };

  const handleRefreshStats = () => {
    console.log("Refreshing stats for user:", userId);
    toast({
      title: "Stats Refreshed",
      description: "User statistics have been updated.",
    });
  };

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={handleSendEmail}>
        <Mail className="w-4 h-4 mr-1" />
        Email
      </Button>
      <Button 
        variant={status === 'Active' ? "destructive" : "default"} 
        size="sm" 
        onClick={handleToggleStatus}
      >
        <Ban className="w-4 h-4 mr-1" />
        {status === 'Active' ? 'Deactivate' : 'Activate'}
      </Button>
      <Button 
        variant="secondary" 
        size="sm" 
        onClick={handleUpgradeMembership}
        disabled={membership === 'Premium'}
      >
        <Crown className="w-4 h-4 mr-1" />
        Upgrade
      </Button>
      <Button variant="ghost" size="sm" onClick={handleRefreshStats}>
        <RefreshCw className="w-4 h-4 mr-1" />
        Refresh
      </Button>
    </div>
  );
};

export default UserActions;
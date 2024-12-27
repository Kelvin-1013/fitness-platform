import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, UserPlus, Mail, Ban, Crown } from "lucide-react";
import { toast } from "sonner";

interface User {
  id: number;
  name: string;
  membership: string;
  joinDate: string;
  lastVisit: string;
  status: string;
  activityData: {
    date: string;
    visits: number;
  }[];
}

const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    membership: 'Premium',
    joinDate: '2024-01-15',
    lastVisit: '2024-03-15',
    status: 'Active',
    activityData: Array.from({ length: 7 }, (_, i) => ({
      date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      visits: Math.floor(Math.random() * 10) + 1,
    })),
  },
  {
    id: 2,
    name: 'Sarah Smith',
    membership: 'Standard',
    joinDate: '2024-02-01',
    lastVisit: '2024-03-14',
    status: 'Active',
    activityData: Array.from({ length: 7 }, (_, i) => ({
      date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      visits: Math.floor(Math.random() * 10) + 1,
    })),
  },
  {
    id: 3,
    name: 'Mike Johnson',
    membership: 'Premium',
    joinDate: '2023-12-01',
    lastVisit: '2024-03-10',
    status: 'Inactive',
    activityData: Array.from({ length: 7 }, (_, i) => ({
      date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      visits: Math.floor(Math.random() * 10) + 1,
    })),
  }
];

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.membership.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserAction = (userId: number, action: string) => {
    const user = mockUsers.find(u => u.id === userId);
    if (!user) return;

    switch (action) {
      case 'message':
        toast.success(`Message sent to ${user.name}`, {
          description: "User will be notified via email"
        });
        break;
      case 'upgrade':
        toast.success(`${user.name}'s membership upgraded`, {
          description: "User is now a Premium member"
        });
        break;
      case 'suspend':
        toast.warning(`${user.name}'s account suspended`, {
          description: "User access temporarily restricted"
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          User Management
        </h1>
        <p className="text-lg text-gray-300">Monitor and manage gym members</p>
      </header>

      <div className="mb-6 flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search users..."
            className="pl-10 bg-gray-800 border-gray-700 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredUsers.map((user) => (
          <Card
            key={user.id}
            className={`bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl transition-all hover:shadow-2xl ${
              selectedUser === user.id ? 'scale-105' : ''
            }`}
            onClick={() => setSelectedUser(user.id)}
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {user.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Membership</span>
                <span className={`px-3 py-1 rounded-full ${
                  user.membership === 'Premium' ? 'bg-purple-500 bg-opacity-20 text-purple-300' :
                  'bg-blue-500 bg-opacity-20 text-blue-300'
                }`}>
                  {user.membership}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Status</span>
                <span className={`px-3 py-1 rounded-full ${
                  user.status === 'Active' ? 'bg-green-500 bg-opacity-20 text-green-300' :
                  'bg-red-500 bg-opacity-20 text-red-300'
                }`}>
                  {user.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Join Date</span>
                <span className="text-gray-300">{user.joinDate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Last Visit</span>
                <span className="text-gray-300">{user.lastVisit}</span>
              </div>
              
              <div className="flex justify-between gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 hover:scale-105 transition-transform"
                  onClick={() => handleUserAction(user.id, 'message')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 hover:scale-105 transition-transform"
                  onClick={() => handleUserAction(user.id, 'upgrade')}
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Upgrade
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 hover:scale-105 transition-transform"
                  onClick={() => handleUserAction(user.id, 'suspend')}
                >
                  <Ban className="w-4 h-4 mr-2" />
                  Suspend
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Users;
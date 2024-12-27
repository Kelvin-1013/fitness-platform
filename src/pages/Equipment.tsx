import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

const equipmentList = [
  {
    id: 'treadmill-x1',
    name: 'Treadmill X1',
    status: 'Active',
    lastMaintenance: '2024-03-01',
    nextMaintenance: '2024-04-01',
    usage: '85%',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e'
  },
  {
    id: 'bike-v2',
    name: 'Power Bike V2',
    status: 'Active',
    lastMaintenance: '2024-02-15',
    nextMaintenance: '2024-03-15',
    usage: '72%',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334'
  },
  {
    id: 'rack-pro',
    name: 'Smart Rack Pro',
    status: 'Maintenance',
    lastMaintenance: '2024-03-10',
    nextMaintenance: '2024-04-10',
    usage: '0%',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc'
  }
];

const Equipment = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/10 to-background p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/70 to-primary">
          Equipment Management
        </h1>
        <p className="text-lg text-muted-foreground">Monitor and manage your fitness equipment</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipmentList.map((equipment) => (
          <Card
            key={equipment.id}
            className="group overflow-hidden border-2 border-border/50 bg-card/80 backdrop-blur-sm shadow-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
            onClick={() => navigate(`/equipment/${equipment.id}`)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-card-foreground">
                {equipment.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Status</span>
                <span className={`px-3 py-1 rounded-full ${
                  equipment.status === 'Active' 
                    ? 'bg-green-500/20 text-green-500 dark:text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-500 dark:text-yellow-400'
                }`}>
                  {equipment.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Usage</span>
                <span className="text-card-foreground">{equipment.usage}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Next Maintenance</span>
                <span className="text-card-foreground">{equipment.nextMaintenance}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
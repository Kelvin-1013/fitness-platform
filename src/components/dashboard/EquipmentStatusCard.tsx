import { RefreshCw, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const EquipmentStatusCard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { language, translations } = useLanguage();

  const handleEquipmentClick = (id: string) => {
    console.log("Navigating to equipment:", id);
    navigate(`/equipment/${id}`);
    toast({
      title: "Equipment Selected",
      description: `Viewing details for ${id}`,
    });
  };

  const handleRefreshStats = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Refreshing equipment stats");
    toast({
      title: "Equipment Stats Updated",
      description: "Latest equipment data has been loaded",
    });
  };

  return (
    <Card 
      className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={() => handleEquipmentClick('treadmill-x1')}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {translations.equipment[language]}
          </h2>
          <Button variant="ghost" size="icon" onClick={handleRefreshStats}>
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-opacity-20 bg-white p-3 rounded-lg hover:bg-opacity-30 transition-colors">
            <span className="text-blue-200">Treadmill X1</span>
            <span className="px-3 py-1 rounded-full bg-green-500 bg-opacity-20 text-green-300">
              {translations.active[language]}
            </span>
          </div>
          <div className="flex justify-between items-center bg-opacity-20 bg-white p-3 rounded-lg hover:bg-opacity-30 transition-colors">
            <span className="text-blue-200">Smart Rack Pro</span>
            <span className="px-3 py-1 rounded-full bg-yellow-500 bg-opacity-20 text-yellow-300">
              {translations.maintenance[language]}
            </span>
          </div>
          <div className="flex justify-between items-center bg-opacity-20 bg-white p-3 rounded-lg hover:bg-opacity-30 transition-colors">
            <span className="text-blue-200">Power Bike V2</span>
            <span className="px-3 py-1 rounded-full bg-green-500 bg-opacity-20 text-green-300">
              {translations.active[language]}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EquipmentStatusCard;
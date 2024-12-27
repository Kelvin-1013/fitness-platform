import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import QuickActions from '@/components/dashboard/QuickActions';
import EquipmentStatusCard from '@/components/dashboard/EquipmentStatusCard';
import TrainingMetricsCard from '@/components/dashboard/TrainingMetricsCard';
import StatsOverview from '@/components/dashboard/StatsOverview';
import NotificationsCard from '@/components/dashboard/NotificationsCard';
import ActivitySummaryCard from '@/components/dashboard/ActivitySummaryCard';
import GoalsProgressCard from '@/components/dashboard/GoalsProgressCard';

const Index = () => {
  const { language, translations } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-6`}>
      <header className="mb-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            {translations.welcome[language]}
          </h1>
          <p className="text-lg text-gray-300 mb-8">{translations.dashboard[language]}</p>
          <QuickActions />
        </div>
      </header>

      <StatsOverview />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <EquipmentStatusCard />
        <TrainingMetricsCard />
        <NotificationsCard />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ActivitySummaryCard />
        <GoalsProgressCard />
      </div>
    </div>
  );
};

export default Index;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '@/contexts/ThemeContext';

const data = [
  { month: 'Jan', usage: 65 },
  { month: 'Feb', usage: 78 },
  { month: 'Mar', usage: 85 },
  { month: 'Apr', usage: 92 },
  { month: 'May', usage: 88 },
  { month: 'Jun', usage: 95 }
];

const Analytics = () => {
  const { theme } = useTheme();

  // Theme-specific gradient maps
  const gradientMap = {
    light: 'from-blue-100 via-blue-200 to-blue-300',
    dark: 'from-gray-900 via-purple-900 to-gray-900',
    pastel: 'from-purple-100 via-pink-100 to-blue-100',
    'high-contrast': 'from-black via-gray-900 to-black'
  };

  const cardGradientMap = {
    light: 'from-white to-gray-50',
    dark: 'from-blue-900 to-purple-900',
    pastel: 'from-purple-100 to-pink-100',
    'high-contrast': 'from-white to-gray-100'
  };

  const textColorMap = {
    light: 'text-gray-900',
    dark: 'text-white',
    pastel: 'text-purple-800',
    'high-contrast': 'text-black'
  };

  const chartColors = {
    light: '#4B5563',
    dark: '#E5E7EB',
    pastel: '#9F7AEA',
    'high-contrast': '#000000'
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradientMap[theme]} p-6 transition-colors duration-300`}>
      <header className="mb-8 text-center">
        <h1 className={`text-4xl font-bold mb-4 ${textColorMap[theme]}`}>
          Analytics Dashboard
        </h1>
        <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Comprehensive fitness center analytics and insights
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className={`bg-gradient-to-br ${cardGradientMap[theme]} border-none shadow-xl transition-colors duration-300`}>
          <CardHeader>
            <CardTitle className={`text-xl font-semibold ${textColorMap[theme]}`}>
              Equipment Usage Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 
                  />
                  <XAxis 
                    dataKey="month" 
                    stroke={chartColors[theme]} 
                    fontSize={12}
                  />
                  <YAxis 
                    stroke={chartColors[theme]} 
                    fontSize={12}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '0.375rem',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      color: theme === 'dark' ? '#fff' : '#000'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="usage" 
                    stroke={theme === 'dark' ? '#8B5CF6' : '#6366F1'} 
                    strokeWidth={3}
                    dot={{ fill: theme === 'dark' ? '#8B5CF6' : '#6366F1' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className={`bg-gradient-to-br ${cardGradientMap[theme]} border-none shadow-xl transition-colors duration-300`}>
          <CardHeader>
            <CardTitle className={`text-xl font-semibold ${textColorMap[theme]}`}>
              Peak Hours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className={`${
              theme === 'dark' ? 'bg-white/10' : 
              theme === 'pastel' ? 'bg-purple-100' :
              theme === 'high-contrast' ? 'bg-gray-100' :
              'bg-gray-50'
            } p-4 rounded-lg transition-colors duration-300`}>
              <h3 className={`text-lg font-semibold ${textColorMap[theme]} mb-2`}>Morning Peak</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>6:00 AM - 9:00 AM</p>
            </div>
            <div className={`${
              theme === 'dark' ? 'bg-white/10' : 
              theme === 'pastel' ? 'bg-purple-100' :
              theme === 'high-contrast' ? 'bg-gray-100' :
              'bg-gray-50'
            } p-4 rounded-lg transition-colors duration-300`}>
              <h3 className={`text-lg font-semibold ${textColorMap[theme]} mb-2`}>Evening Peak</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>5:00 PM - 8:00 PM</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
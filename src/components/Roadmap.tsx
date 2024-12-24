import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Roadmap = () => {
  const milestones = [
    {
      id: 1,
      title: "AI-Powered Workout Recommendations",
      status: "In Progress",
      completion: 70,
      date: "Q2 2024"
    },
    {
      id: 2,
      title: "Virtual Training Sessions",
      status: "Planned",
      completion: 0,
      date: "Q3 2024"
    },
    {
      id: 3,
      title: "Equipment Maintenance Predictions",
      status: "Completed",
      completion: 100,
      date: "Q1 2024"
    }
  ];

  return (
    <Card className="bg-gray-800 border-gray-700 p-6">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">Product Roadmap</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{milestone.title}</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  milestone.status === 'Completed' ? 'bg-green-500' :
                  milestone.status === 'In Progress' ? 'bg-blue-500' :
                  'bg-yellow-500'
                }`}>
                  {milestone.status}
                </span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${milestone.completion}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-400 mt-2 block">{milestone.date}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Roadmap;
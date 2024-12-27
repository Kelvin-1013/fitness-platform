import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with Equipment Integration",
      duration: "15 min",
      level: "Beginner",
      description: "Learn how to connect and configure your first piece of equipment"
    },
    {
      id: 2,
      title: "Advanced Analytics Dashboard",
      duration: "20 min",
      level: "Intermediate",
      description: "Master the analytics dashboard and create custom reports"
    },
    {
      id: 3,
      title: "Maintenance Best Practices",
      duration: "25 min",
      level: "Advanced",
      description: "Optimize your equipment maintenance schedule using our platform"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Tutorials
        </h1>
        <p className="text-lg text-gray-300">Step-by-step guides to master our platform</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.map((tutorial) => (
          <Card key={tutorial.id} className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {tutorial.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-blue-300">{tutorial.duration}</span>
                <span className="text-purple-300">{tutorial.level}</span>
              </div>
              <p className="text-gray-300">{tutorial.description}</p>
              <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity">
                Start Tutorial
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
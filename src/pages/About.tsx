import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          About Smart Fitness Hub
        </h1>
        <p className="text-lg text-gray-300">Leading the future of fitness technology</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Empowering fitness centers with cutting-edge technology to optimize operations and enhance member experience.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900 to-pink-900 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              To revolutionize the fitness industry through smart technology and data-driven solutions.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-900 to-indigo-900 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
              Our Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Innovation in fitness technology</li>
              <li>Member-centric solutions</li>
              <li>Data privacy and security</li>
              <li>Continuous improvement</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
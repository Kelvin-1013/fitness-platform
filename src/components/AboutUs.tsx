import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <Card className="bg-gradient-to-br from-purple-900 to-pink-900 border-none shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          About Smart Fitness Hub
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-2">Our Mission</h3>
          <p className="text-gray-300">
            Empowering fitness facilities with cutting-edge technology to optimize operations and enhance member experience.
          </p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
          <p className="text-gray-300">
            Leading the industry with AI-powered solutions and real-time analytics for smart fitness management.
          </p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-2">Global Impact</h3>
          <p className="text-gray-300">
            Serving over 1000+ fitness centers worldwide, helping millions achieve their fitness goals.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutUs;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Documentation
        </h1>
        <p className="text-lg text-gray-300">Comprehensive guides and resources</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Getting Started
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-gray-300">
              <li>• Platform Overview</li>
              <li>• Quick Start Guide</li>
              <li>• Basic Configuration</li>
              <li>• First Steps Tutorial</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900 to-pink-900 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Integration Guides
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-gray-300">
              <li>• API Documentation</li>
              <li>• Equipment Setup</li>
              <li>• Data Synchronization</li>
              <li>• Security Guidelines</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-900 to-indigo-900 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
              Advanced Topics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-gray-300">
              <li>• Custom Integrations</li>
              <li>• Analytics Setup</li>
              <li>• Troubleshooting</li>
              <li>• Best Practices</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Documentation;
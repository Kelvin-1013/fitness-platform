import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Api = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          API Reference
        </h1>
        <p className="text-lg text-gray-300">Complete API documentation for developers</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              REST API Endpoints
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-green-400 mb-2">GET /api/v1/equipment</h3>
                <p className="text-gray-300">Retrieve list of connected equipment</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-blue-400 mb-2">POST /api/v1/data</h3>
                <p className="text-gray-300">Submit equipment usage data</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-yellow-400 mb-2">PUT /api/v1/settings</h3>
                <p className="text-gray-300">Update equipment settings</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900 to-pink-900 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Authentication
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-white mb-2">API Keys</h3>
                <p className="text-gray-300">Secure your requests with API keys</p>
                <pre className="mt-2 bg-black/40 p-2 rounded text-sm text-gray-300 overflow-x-auto">
                  Authorization: Bearer YOUR_API_KEY
                </pre>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="text-white mb-2">Rate Limits</h3>
                <p className="text-gray-300">1000 requests per hour per API key</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Api;
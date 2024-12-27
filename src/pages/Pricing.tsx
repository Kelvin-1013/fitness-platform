import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Pricing Plans
        </h1>
        <p className="text-lg text-gray-300">Choose the perfect plan for your fitness center</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Starter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-3xl font-bold text-white">$99<span className="text-lg font-normal">/month</span></div>
            <ul className="space-y-3">
              {["Up to 10 devices", "Basic analytics", "Email support", "Standard reports"].map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
              Get Started
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900 to-pink-900 border-none shadow-xl transform scale-105">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Professional
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-3xl font-bold text-white">$199<span className="text-lg font-normal">/month</span></div>
            <ul className="space-y-3">
              {[
                "Up to 50 devices",
                "Advanced analytics",
                "Priority support",
                "Custom reports",
                "API access"
              ].map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
              Get Started
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-900 to-indigo-900 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
              Enterprise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-3xl font-bold text-white">Custom</div>
            <ul className="space-y-3">
              {[
                "Unlimited devices",
                "Custom solutions",
                "24/7 support",
                "Custom integration",
                "Dedicated manager"
              ].map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90">
              Contact Sales
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
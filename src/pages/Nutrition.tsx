import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Apple, Coffee, Pizza, UtensilsCrossed, Scale, Calculator } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Nutrition = () => {
  const [calories, setCalories] = useState(0);

  const handleAddMeal = (mealType: string, calorieAmount: number) => {
    setCalories(prev => prev + calorieAmount);
    toast.success(`${mealType} logged successfully`, {
      description: `Added ${calorieAmount} calories to your daily total`
    });
  };

  const handleTrackNutrients = () => {
    toast.info("Opening nutrient tracker...", {
      description: "Track your macros and vitamins"
    });
  };

  const handleCalculateBMR = () => {
    toast.info("Opening BMR calculator...", {
      description: "Calculate your daily caloric needs"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          Nutrition Tracker
        </h1>
        <p className="text-lg text-gray-300">Monitor your daily nutrition</p>
        <div className="mt-4 text-2xl font-bold text-green-400">
          Daily Calories: {calories}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl hover:shadow-2xl transition-all">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Quick Add Meals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              className="w-full justify-start hover:scale-105 transition-transform" 
              variant="outline"
              onClick={() => handleAddMeal("Breakfast", 400)}
            >
              <Coffee className="mr-2 h-4 w-4" />
              Add Breakfast (400 cal)
            </Button>
            <Button 
              className="w-full justify-start hover:scale-105 transition-transform" 
              variant="outline"
              onClick={() => handleAddMeal("Lunch", 600)}
            >
              <Pizza className="mr-2 h-4 w-4" />
              Add Lunch (600 cal)
            </Button>
            <Button 
              className="w-full justify-start hover:scale-105 transition-transform" 
              variant="outline"
              onClick={() => handleAddMeal("Snack", 200)}
            >
              <Apple className="mr-2 h-4 w-4" />
              Add Snack (200 cal)
            </Button>
            <Button 
              className="w-full justify-start hover:scale-105 transition-transform" 
              variant="outline"
              onClick={() => handleAddMeal("Dinner", 700)}
            >
              <UtensilsCrossed className="mr-2 h-4 w-4" />
              Add Dinner (700 cal)
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none shadow-xl hover:shadow-2xl transition-all">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Nutrition Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              className="w-full justify-start hover:scale-105 transition-transform" 
              variant="outline"
              onClick={handleTrackNutrients}
            >
              <Scale className="mr-2 h-4 w-4" />
              Track Nutrients
            </Button>
            <Button 
              className="w-full justify-start hover:scale-105 transition-transform" 
              variant="outline"
              onClick={handleCalculateBMR}
            >
              <Calculator className="mr-2 h-4 w-4" />
              Calculate BMR
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Nutrition;
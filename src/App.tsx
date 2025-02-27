import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import FarmingPlanResults from './components/FarmingPlanResults';
import Footer from './components/Footer';
import { FormData, FarmingPlan } from './types';
import { generateFarmingPlan } from './utils/aiModel';
import { Leaf, Tractor, CloudRain, Scaling as Seedling } from 'lucide-react';

function App() {
  const [farmingPlan, setFarmingPlan] = useState<FarmingPlan | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFormSubmit = (data: FormData) => {
    setIsLoading(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      const plan = generateFarmingPlan(data);
      setFarmingPlan(plan);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {!farmingPlan && !isLoading && (
          <>
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Enter Your Farm Details</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Provide information about your soil, weather conditions, irrigation methods, 
                fertilizer usage, and current crops to receive a personalized farming plan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-green-100 p-3 rounded-full mb-3">
                  <Leaf className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800">Soil Analysis</h3>
                <p className="text-sm text-gray-600 mt-2">Input your soil type and nutrient levels</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-3">
                  <CloudRain className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800">Weather Data</h3>
                <p className="text-sm text-gray-600 mt-2">Current and forecasted weather conditions</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-cyan-100 p-3 rounded-full mb-3">
                  <Tractor className="text-cyan-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800">Farming Practices</h3>
                <p className="text-sm text-gray-600 mt-2">Your irrigation and fertilizer methods</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-amber-100 p-3 rounded-full mb-3">
                  <Seedling className="text-amber-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800">Crop Details</h3>
                <p className="text-sm text-gray-600 mt-2">Current crops and their health status</p>
              </div>
            </div>
            
            <InputForm onSubmit={handleFormSubmit} />
          </>
        )}
        
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-700">Analyzing Farm Data...</h2>
            <p className="text-gray-500 mt-2">Our AI is generating your personalized farming plan</p>
          </div>
        )}
        
        {farmingPlan && !isLoading && (
          <>
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Your Personalized Farming Plan</h2>
              <button 
                onClick={() => setFarmingPlan(null)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Create New Plan
              </button>
            </div>
            <FarmingPlanResults plan={farmingPlan} />
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
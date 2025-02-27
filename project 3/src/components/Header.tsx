import React from 'react';
import { Sprout, BarChart3, Droplets, CloudSun } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-500 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Sprout size={36} className="mr-3" />
            <h1 className="text-3xl font-bold">CropSmart AI</h1>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <BarChart3 size={20} className="mr-2" />
              <span>Optimize Yield</span>
            </div>
            <div className="flex items-center">
              <Droplets size={20} className="mr-2" />
              <span>Save Water</span>
            </div>
            <div className="flex items-center">
              <CloudSun size={20} className="mr-2" />
              <span>Weather Adaptive</span>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-xl md:text-2xl font-semibold">AI-Powered Crop Management & Farming Plan Recommendation System</h2>
          <p className="mt-2 max-w-3xl mx-auto">
            Get personalized farming plans based on soil quality, weather conditions, irrigation levels, 
            fertilizer usage, and crop health to optimize resources and improve yield.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

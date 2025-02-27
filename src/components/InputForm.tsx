import React, { useState } from 'react';
import { FormData } from '../types';
import { soilTypes, irrigationMethods, fertilizerTypes, cropVarieties, growthStages, healthStatuses } from '../data/mockData';

interface InputFormProps {
  onSubmit: (data: FormData) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    soil: {
      type: 'Loamy',
      ph: 6.5,
      organicMatter: 3,
      nitrogen: 2,
      phosphorus: 2,
      potassium: 2
    },
    weather: {
      temperature: 22,
      humidity: 60,
      rainfall: 2.5,
      sunlight: 6
    },
    irrigation: {
      method: 'Drip irrigation',
      frequency: 3,
      amount: 1.5
    },
    fertilizer: {
      type: 'Organic compost',
      amount: 2,
      frequency: 2
    },
    crop: {
      name: 'Wheat',
      variety: 'Hard Red Winter',
      growthStage: 'Vegetative',
      healthStatus: 'Good'
    }
  });

  const [selectedCrop, setSelectedCrop] = useState('Wheat');
  const availableCropVarieties = cropVarieties[selectedCrop as keyof typeof cropVarieties] || [];

  const handleSoilChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      soil: {
        ...formData.soil,
        [name]: name === 'type' ? value : parseFloat(value)
      }
    });
  };

  const handleWeatherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      weather: {
        ...formData.weather,
        [name]: parseFloat(value)
      }
    });
  };

  const handleIrrigationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      irrigation: {
        ...formData.irrigation,
        [name]: name === 'method' ? value : parseFloat(value)
      }
    });
  };

  const handleFertilizerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      fertilizer: {
        ...formData.fertilizer,
        [name]: name === 'type' ? value : parseFloat(value)
      }
    });
  };

  const handleCropChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'name') {
      setSelectedCrop(value);
      setFormData({
        ...formData,
        crop: {
          ...formData.crop,
          name: value,
          variety: cropVarieties[value as keyof typeof cropVarieties]?.[0] || ''
        }
      });
    } else {
      setFormData({
        ...formData,
        crop: {
          ...formData.crop,
          [name]: value
        }
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-green-700">Soil Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Soil Type</label>
            <select
              name="type"
              value={formData.soil.type}
              onChange={handleSoilChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            >
              {soilTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">pH Level (0-14)</label>
            <input
              type="range"
              name="ph"
              min="0"
              max="14"
              step="0.1"
              value={formData.soil.ph}
              onChange={handleSoilChange}
              className="mt-1 block w-full"
            />
            <div className="text-center">{formData.soil.ph}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Organic Matter (%)</label>
            <input
              type="range"
              name="organicMatter"
              min="0"
              max="10"
              step="0.1"
              value={formData.soil.organicMatter}
              onChange={handleSoilChange}
              className="mt-1 block w-full"
            />
            <div className="text-center">{formData.soil.organicMatter}%</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nitrogen Level (0-5)</label>
            <input
              type="range"
              name="nitrogen"
              min="0"
              max="5"
              step="0.1"
              value={formData.soil.nitrogen}
              onChange={handleSoilChange}
              className="mt-1 block w-full"
            />
            <div className="text-center">{formData.soil.nitrogen}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phosphorus Level (0-5)</label>
            <input
              type="range"
              name="phosphorus"
              min="0"
              max="5"
              step="0.1"
              value={formData.soil.phosphorus}
              onChange={handleSoilChange}
              className="mt-1 block w-full"
            />
            <div className="text-center">{formData.soil.phosphorus}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Potassium Level (0-5)</label>
            <input
              type="range"
              name="potassium"
              min="0"
              max="5"
              step="0.1"
              value={formData.soil.potassium}
              onChange={handleSoilChange}
              className="mt-1 block w-full"
            />
            <div className="text-center">{formData.soil.potassium}</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-700">Weather Conditions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Temperature (°C)</label>
            <input
              type="range"
              name="temperature"
              min="-10"
              max="50"
              step="0.5"
              value={formData.weather.temperature}
              onChange={handleWeatherChange}
              className="mt-1 block w-full"
            />
            <div className="text-center">{formData.weather.temperature}°C</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Humidity (%)</label>
            <input
              type="range"
              name="humidity"
              min="0"
              max="100"
              step="1"
              value={formData.weather.humidity}
              onChange={handleWeatherChange}
              className="mt-1 block w-full"
            />
            <div className="text-center">{formData.weather.humidity}%</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rainfall (cm/week)</label>
            <input
              type="range"
              name="rainfall"
              min="0"
              max="10"
              step="0.1"
              value={formData.weather.rainfall}
              onChange={handleWeatherChange}
              className="mt-1 block w-full"
            />
            <div className="text-center">{formData.weather.rainfall} cm/week</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sunlight (hours/day)</label>
            <input
              type="range"
              name="sunlight"
              min="0"
              max="14"
              step="0.5"
              value={formData.weather.sunlight}
              onChange={handleWeatherChange}
              className="mt-1 block w-full"
            />
            <div className="text-center">{formData.weather.sunlight} hours/day</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-cyan-700">Irrigation Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Irrigation Method</label>
            <select
              name="method"
              value={formData.irrigation.method}
              onChange={handleIrrigationChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
            >
              {irrigationMethods.map((method) => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Frequency (times/week)</label>
            <input
              type="range"
              name="frequency"
              min="0"
              max="7"
              step="1"
              value={formData.irrigation.frequency}
              onChange={handleIrrigationChange}
              className="mt-1 block w-full"
            />
            <div className="text-center">{formData.irrigation.frequency} times/week</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount (cm/application)</label>
            <input
              type="range"
              name="amount"
              min="0"
              max="5"
              step="0.1"
              value={formData.irrigation.amount}
              onChange={handleIrrigationChange}
              className="mt-1 block w-full"
            />
            <div className="text-center">{formData.irrigation.amount} cm/application</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-amber-700">Fertilizer Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Fertilizer Type</label>
            <select
              name="type"
              value={formData.fertilizer.type}
              onChange={handleFertilizerChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
            >
              {fertilizerTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount (kg/hectare)</label>
            <input
              type="range"
              name="amount"
              min="0"
              max="10"
              step="0.1"
              value={formData.fertilizer.amount}
              onChange={handleFertilizerChange}
              className="mt-1 block w-full"
            />
            <div className="text-center">{formData.fertilizer.amount} kg/hectare</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Frequency (times/month)</label>
            <input
              type="range"
              name="frequency"
              min="0"
              max="10"
              step="1"
              value={formData.fertilizer.frequency}
              onChange={handleFertilizerChange}
              className="mt-1 block w-full"
            />
            <div className="text-center">{formData.fertilizer.frequency} times/month</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-purple-700">Crop Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Crop Name</label>
            <select
              name="name"
              value={formData.crop.name}
              onChange={handleCropChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
            >
              {Object.keys(cropVarieties).map((crop) => (
                <option key={crop} value={crop}>{crop}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Variety</label>
            <select
              name="variety"
              value={formData.crop.variety}
              onChange={handleCropChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
            >
              {availableCropVarieties.map((variety) => (
                <option key={variety} value={variety}>{variety}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Growth Stage</label>
            <select
              name="growthStage"
              value={formData.crop.growthStage}
              onChange={handleCropChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
            >
              {growthStages.map((stage) => (
                <option key={stage} value={stage}>{stage}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Health Status</label>
            <select
              name="healthStatus"
              value={formData.crop.healthStatus}
              onChange={handleCropChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
            >
              {healthStatuses.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
        >
          Generate Farming Plan
        </button>
      </div>
    </form>
  );
};

export default InputForm;
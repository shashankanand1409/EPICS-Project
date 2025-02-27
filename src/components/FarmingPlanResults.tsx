import React from 'react';
import { FarmingPlan } from '../types';
import { Bar, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

interface FarmingPlanResultsProps {
  plan: FarmingPlan | null;
}

const FarmingPlanResults: React.FC<FarmingPlanResultsProps> = ({ plan }) => {
  if (!plan) {
    return null;
  }

  // Prepare data for crop recommendation chart
  const cropChartData = {
    labels: plan.cropRecommendations.map(crop => crop.cropName),
    datasets: [
      {
        label: 'Suitability Score',
        data: plan.cropRecommendations.map(crop => crop.suitabilityScore),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Expected Yield (tons/hectare)',
        data: plan.cropRecommendations.map(crop => crop.expectedYield),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for sustainability radar chart
  const radarChartData = {
    labels: ['Water Efficiency', 'Soil Health', 'Biodiversity', 'Carbon Footprint', 'Pest Management'],
    datasets: [
      {
        label: 'Sustainability Metrics',
        data: [
          plan.sustainabilityScore * 0.9, // Water efficiency
          plan.sustainabilityScore * 1.1, // Soil health
          plan.sustainabilityScore * 0.8, // Biodiversity
          plan.sustainabilityScore * 0.95, // Carbon footprint
          plan.sustainabilityScore * 1.05, // Pest management
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-green-700">AI-Generated Farming Plan</h2>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="bg-green-50 p-4 rounded-lg mb-4 md:mb-0 md:mr-4 flex-1">
            <h3 className="text-lg font-semibold text-green-800">Expected Yield</h3>
            <p className="text-3xl font-bold text-green-600">{plan.expectedYield} tons/hectare</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg flex-1">
            <h3 className="text-lg font-semibold text-blue-800">Sustainability Score</h3>
            <p className="text-3xl font-bold text-blue-600">{plan.sustainabilityScore}/100</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-green-700">Crop Recommendations</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Crop</th>
                  <th className="py-2 px-4 border-b text-left">Variety</th>
                  <th className="py-2 px-4 border-b text-left">Suitability</th>
                  <th className="py-2 px-4 border-b text-left">Expected Yield</th>
                  <th className="py-2 px-4 border-b text-left">Rotation Advice</th>
                </tr>
              </thead>
              <tbody>
                {plan.cropRecommendations.map((crop, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-2 px-4 border-b">{crop.cropName}</td>
                    <td className="py-2 px-4 border-b">{crop.variety}</td>
                    <td className="py-2 px-4 border-b">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-green-600 h-2.5 rounded-full" 
                            style={{ width: `${crop.suitabilityScore}%` }}
                          ></div>
                        </div>
                        <span className="ml-2">{crop.suitabilityScore}%</span>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b">{crop.expectedYield} tons/ha</td>
                    <td className="py-2 px-4 border-b">{crop.rotationAdvice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 h-64">
            <Bar 
              data={cropChartData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Crop Comparison'
                  }
                }
              }} 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Irrigation Schedule</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Week</th>
                    <th className="py-2 px-4 border-b text-left">Frequency</th>
                    <th className="py-2 px-4 border-b text-left">Amount</th>
                    <th className="py-2 px-4 border-b text-left">Method</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.irrigationSchedule.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="py-2 px-4 border-b">Week {item.week}</td>
                      <td className="py-2 px-4 border-b">{item.frequency} times</td>
                      <td className="py-2 px-4 border-b">{item.amount} cm</td>
                      <td className="py-2 px-4 border-b">{item.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-amber-700">Fertilizer Schedule</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Week</th>
                    <th className="py-2 px-4 border-b text-left">Type</th>
                    <th className="py-2 px-4 border-b text-left">Amount</th>
                    <th className="py-2 px-4 border-b text-left">Method</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.fertilizerSchedule.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="py-2 px-4 border-b">Week {item.week}</td>
                      <td className="py-2 px-4 border-b">{item.type}</td>
                      <td className="py-2 px-4 border-b">{item.amount} kg/ha</td>
                      <td className="py-2 px-4 border-b">{item.applicationMethod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-red-700">Pest Management Plan</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Pest Type</th>
                  <th className="py-2 px-4 border-b text-left">Risk Level</th>
                  <th className="py-2 px-4 border-b text-left">Prevention Method</th>
                  <th className="py-2 px-4 border-b text-left">Organic Solution</th>
                  <th className="py-2 px-4 border-b text-left">Chemical Solution</th>
                </tr>
              </thead>
              <tbody>
                {plan.pestManagementPlan.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-2 px-4 border-b">{item.pestType}</td>
                    <td className="py-2 px-4 border-b">
                      <span className={`px-2 py-1 rounded text-white ${
                        item.riskLevel === 'High' ? 'bg-red-500' : 
                        item.riskLevel === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}>
                        {item.riskLevel}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b">{item.preventionMethod}</td>
                    <td className="py-2 px-4 border-b">{item.organicSolution}</td>
                    <td className="py-2 px-4 border-b">{item.chemicalSolution || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-purple-700">Sustainability Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2">
                <strong>Overall Score:</strong> {plan.sustainabilityScore}/100
              </p>
              <p className="text-sm text-gray-600">
                This farming plan is designed to balance productivity with environmental sustainability.
                The recommendations aim to optimize resource usage while minimizing environmental impact.
              </p>
            </div>
            <div className="h-64">
              <Radar 
                data={radarChartData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    r: {
                      min: 0,
                      max: 100,
                      ticks: {
                        stepSize: 20
                      }
                    }
                  }
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmingPlanResults;
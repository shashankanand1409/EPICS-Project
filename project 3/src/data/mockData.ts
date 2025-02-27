import { FarmingPlan } from '../types';

// Mock AI-generated farming plans based on different input combinations
export const mockFarmingPlans: FarmingPlan[] = [
  {
    id: 'plan1',
    cropRecommendations: [
      {
        cropName: 'Wheat',
        variety: 'Hard Red Winter',
        suitabilityScore: 92,
        expectedYield: 4.5,
        rotationAdvice: 'Follow with legumes to restore nitrogen levels'
      },
      {
        cropName: 'Corn',
        variety: 'Sweet Corn',
        suitabilityScore: 85,
        expectedYield: 9.2,
        rotationAdvice: 'Rotate with soybeans next season'
      },
      {
        cropName: 'Soybeans',
        variety: 'Group 3 Maturity',
        suitabilityScore: 78,
        expectedYield: 3.2,
        rotationAdvice: 'Good nitrogen fixer for following with corn'
      }
    ],
    irrigationSchedule: [
      {
        week: 1,
        frequency: 3,
        amount: 1.5,
        method: 'Drip irrigation'
      },
      {
        week: 2,
        frequency: 2,
        amount: 2.0,
        method: 'Drip irrigation'
      },
      {
        week: 3,
        frequency: 3,
        amount: 1.5,
        method: 'Drip irrigation'
      }
    ],
    fertilizerSchedule: [
      {
        week: 1,
        type: 'Organic compost',
        amount: 2.5,
        applicationMethod: 'Broadcast'
      },
      {
        week: 3,
        type: 'NPK 10-10-10',
        amount: 1.2,
        applicationMethod: 'Side dressing'
      },
      {
        week: 6,
        type: 'Foliar spray',
        amount: 0.5,
        applicationMethod: 'Spray'
      }
    ],
    pestManagementPlan: [
      {
        pestType: 'Aphids',
        riskLevel: 'Medium',
        preventionMethod: 'Companion planting with marigolds',
        organicSolution: 'Neem oil spray',
        chemicalSolution: 'Insecticidal soap'
      },
      {
        pestType: 'Fungal diseases',
        riskLevel: 'High',
        preventionMethod: 'Proper spacing and air circulation',
        organicSolution: 'Copper fungicide',
        chemicalSolution: 'Propiconazole'
      }
    ],
    expectedYield: 4.2,
    sustainabilityScore: 85
  },
  {
    id: 'plan2',
    cropRecommendations: [
      {
        cropName: 'Rice',
        variety: 'Basmati',
        suitabilityScore: 95,
        expectedYield: 5.8,
        rotationAdvice: 'Follow with green manure crop'
      },
      {
        cropName: 'Cotton',
        variety: 'Upland',
        suitabilityScore: 82,
        expectedYield: 2.1,
        rotationAdvice: 'Rotate with legumes to restore soil health'
      }
    ],
    irrigationSchedule: [
      {
        week: 1,
        frequency: 7,
        amount: 3.0,
        method: 'Flood irrigation'
      },
      {
        week: 2,
        frequency: 7,
        amount: 3.0,
        method: 'Flood irrigation'
      },
      {
        week: 3,
        frequency: 7,
        amount: 2.5,
        method: 'Flood irrigation'
      }
    ],
    fertilizerSchedule: [
      {
        week: 1,
        type: 'Urea',
        amount: 1.8,
        applicationMethod: 'Broadcast'
      },
      {
        week: 4,
        type: 'NPK 15-15-15',
        amount: 1.5,
        applicationMethod: 'Broadcast'
      }
    ],
    pestManagementPlan: [
      {
        pestType: 'Rice stem borer',
        riskLevel: 'High',
        preventionMethod: 'Early planting',
        organicSolution: 'Trichogramma release',
        chemicalSolution: 'Carbofuran'
      }
    ],
    expectedYield: 5.5,
    sustainabilityScore: 72
  }
];

// Mock soil types
export const soilTypes = [
  'Clay',
  'Sandy',
  'Loamy',
  'Silty',
  'Peaty',
  'Chalky',
  'Clayey loam'
];

// Mock irrigation methods
export const irrigationMethods = [
  'Drip irrigation',
  'Sprinkler irrigation',
  'Flood irrigation',
  'Center pivot irrigation',
  'Furrow irrigation',
  'Subsurface irrigation'
];

// Mock fertilizer types
export const fertilizerTypes = [
  'Organic compost',
  'NPK 10-10-10',
  'NPK 15-15-15',
  'Urea',
  'Ammonium nitrate',
  'Phosphate',
  'Potash',
  'Foliar spray',
  'Manure'
];

// Mock crop varieties
export const cropVarieties = {
  Wheat: ['Hard Red Winter', 'Soft White', 'Durum', 'Spring Wheat'],
  Corn: ['Sweet Corn', 'Field Corn', 'Popcorn', 'Dent Corn'],
  Rice: ['Basmati', 'Jasmine', 'Arborio', 'Long Grain', 'Short Grain'],
  Cotton: ['Upland', 'Pima', 'Egyptian', 'Sea Island'],
  Soybeans: ['Group 1 Maturity', 'Group 2 Maturity', 'Group 3 Maturity'],
  Potatoes: ['Russet', 'Red', 'White', 'Yellow', 'Purple']
};

// Mock growth stages
export const growthStages = [
  'Germination',
  'Seedling',
  'Vegetative',
  'Flowering',
  'Fruiting',
  'Maturity',
  'Harvesting'
];

// Mock health statuses
export const healthStatuses = [
  'Excellent',
  'Good',
  'Fair',
  'Poor',
  'Diseased',
  'Pest-infested',
  'Nutrient deficient'
];
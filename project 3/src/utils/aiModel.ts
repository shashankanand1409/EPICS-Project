import { FormData, FarmingPlan } from '../types';
import { mockFarmingPlans } from '../data/mockData';

// This is a mock AI model that would be replaced with a real ML model in production
export const generateFarmingPlan = (formData: FormData): FarmingPlan => {
  // In a real application, this would call an API to a machine learning model
  // For now, we'll use a simple algorithm to select from mock data
  
  // Calculate a simple score based on input parameters
  const soilScore = calculateSoilScore(formData.soil);
  const weatherScore = calculateWeatherScore(formData.weather);
  const irrigationScore = calculateIrrigationScore(formData.irrigation);
  const fertilizerScore = calculateFertilizerScore(formData.fertilizer);
  const cropScore = calculateCropScore(formData.crop);
  
  const totalScore = soilScore + weatherScore + irrigationScore + fertilizerScore + cropScore;
  
  // Select a plan based on the score
  const planIndex = totalScore % mockFarmingPlans.length;
  
  // In a real application, we would generate a unique plan based on the inputs
  // For this demo, we'll return one of our mock plans with a unique ID
  return {
    ...mockFarmingPlans[planIndex],
    id: `plan-${Date.now()}`
  };
};

// Helper functions to calculate scores
const calculateSoilScore = (soil: FormData['soil']): number => {
  let score = 0;
  
  // pH score (optimal range is 6-7)
  score += 10 - Math.abs(6.5 - soil.ph) * 5;
  
  // Organic matter score
  score += soil.organicMatter * 2;
  
  // NPK scores
  score += soil.nitrogen * 2;
  score += soil.phosphorus * 2;
  score += soil.potassium * 2;
  
  return Math.max(0, Math.min(score, 50));
};

const calculateWeatherScore = (weather: FormData['weather']): number => {
  let score = 0;
  
  // Temperature score (optimal range is 15-25°C)
  score += 10 - Math.abs(20 - weather.temperature) * 0.5;
  
  // Humidity score (optimal range is 40-70%)
  score += 10 - Math.abs(55 - weather.humidity) * 0.2;
  
  // Rainfall score
  score += Math.min(weather.rainfall * 2, 10);
  
  // Sunlight score
  score += Math.min(weather.sunlight * 2, 10);
  
  return Math.max(0, Math.min(score, 40));
};

const calculateIrrigationScore = (irrigation: FormData['irrigation']): number => {
  let score = 0;
  
  // Method score (drip is most efficient)
  if (irrigation.method.toLowerCase().includes('drip')) {
    score += 10;
  } else if (irrigation.method.toLowerCase().includes('sprinkler')) {
    score += 7;
  } else {
    score += 5;
  }
  
  // Frequency and amount scores
  score += Math.min(irrigation.frequency, 5);
  score += Math.min(irrigation.amount * 2, 5);
  
  return Math.max(0, Math.min(score, 20));
};

const calculateFertilizerScore = (fertilizer: FormData['fertilizer']): number => {
  let score = 0;
  
  // Type score (organic is better for sustainability)
  if (fertilizer.type.toLowerCase().includes('organic')) {
    score += 10;
  } else {
    score += 5;
  }
  
  // Amount and frequency scores
  score += Math.min(10 - fertilizer.amount, 5);
  score += Math.min(fertilizer.frequency, 5);
  
  return Math.max(0, Math.min(score, 20));
};

const calculateCropScore = (crop: FormData['crop']): number => {
  let score = 0;
  
  // Health status score
  if (crop.healthStatus.toLowerCase().includes('excellent')) {
    score += 10;
  } else if (crop.healthStatus.toLowerCase().includes('good')) {
    score += 8;
  } else if (crop.healthStatus.toLowerCase().includes('fair')) {
    score += 5;
  } else {
    score += 2;
  }
  
  // Growth stage score
  if (crop.growthStage.toLowerCase().includes('vegetative')) {
    score += 5;
  } else if (crop.growthStage.toLowerCase().includes('flowering')) {
    score += 7;
  } else if (crop.growthStage.toLowerCase().includes('fruiting')) {
    score += 8;
  } else {
    score += 3;
  }
  
  return Math.max(0, Math.min(score, 20));
};
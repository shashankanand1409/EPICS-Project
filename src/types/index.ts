export interface SoilData {
  type: string;
  ph: number;
  organicMatter: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  sunlight: number;
}

export interface IrrigationData {
  method: string;
  frequency: number;
  amount: number;
}

export interface FertilizerData {
  type: string;
  amount: number;
  frequency: number;
}

export interface CropData {
  name: string;
  variety: string;
  growthStage: string;
  healthStatus: string;
}

export interface FarmingPlan {
  id: string;
  cropRecommendations: CropRecommendation[];
  irrigationSchedule: IrrigationSchedule[];
  fertilizerSchedule: FertilizerSchedule[];
  pestManagementPlan: PestManagementPlan[];
  expectedYield: number;
  sustainabilityScore: number;
}

export interface CropRecommendation {
  cropName: string;
  variety: string;
  suitabilityScore: number;
  expectedYield: number;
  rotationAdvice: string;
}

export interface IrrigationSchedule {
  week: number;
  frequency: number;
  amount: number;
  method: string;
}

export interface FertilizerSchedule {
  week: number;
  type: string;
  amount: number;
  applicationMethod: string;
}

export interface PestManagementPlan {
  pestType: string;
  riskLevel: string;
  preventionMethod: string;
  organicSolution: string;
  chemicalSolution?: string;
}

export interface FormData {
  soil: SoilData;
  weather: WeatherData;
  irrigation: IrrigationData;
  fertilizer: FertilizerData;
  crop: CropData;
}
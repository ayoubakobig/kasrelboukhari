export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Municipality {
  name: string;
  area: number; // in km²
  population: number; // approximate inhabitants
  coordinates?: Coordinates;
}

export interface Daira {
  name: string;
  municipalities: Municipality[];
  coordinates?: Coordinates;
}

export type InvestmentCategory = 'logistics' | 'industry' | 'agriculture';

export interface InvestmentPoint {
  title: string;
  description: string[];
  iconName: 'Truck' | 'Factory' | 'Wheat' | 'Percent' | 'Train';
  category: InvestmentCategory;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

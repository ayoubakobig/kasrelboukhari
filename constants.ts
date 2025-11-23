import { Daira, InvestmentPoint } from './types';

export const DAIRA_DATA: Daira[] = [
  {
    name: 'دائرة قصر البخاري',
    coordinates: { lat: 35.8881, lng: 2.7491 },
    municipalities: [
      { name: 'قصر البخاري (مقر)', area: 53.6, population: 67000, coordinates: { lat: 35.8881, lng: 2.7491 } },
      { name: 'سانق', area: 178, population: 6500, coordinates: { lat: 35.8046, lng: 2.8465 } },
      { name: 'مفاتحة', area: 95, population: 5200, coordinates: { lat: 35.9488, lng: 2.8020 } },
    ],
  },
  {
    name: 'دائرة شلالة العذاورة',
    coordinates: { lat: 35.9331, lng: 3.4127 },
    municipalities: [
      { name: 'شلالة العذاورة', area: 182, population: 57000, coordinates: { lat: 35.9331, lng: 3.4127 } },
      { name: 'عين القصير', area: 145, population: 5500, coordinates: { lat: 35.8924, lng: 3.3010 } },
      { name: 'تفراوت', area: 120, population: 8900, coordinates: { lat: 36.0021, lng: 3.4215 } },
      { name: 'شنيقل', area: 110, population: 6800, coordinates: { lat: 35.8512, lng: 3.5123 } },
    ],
  },
  {
    name: 'دائرة عين بوسيف',
    coordinates: { lat: 35.8833, lng: 3.1667 },
    municipalities: [
      { name: 'عين بوسيف', area: 210, population: 42000, coordinates: { lat: 35.8833, lng: 3.1667 } },
      { name: 'سيدي دامد', area: 160, population: 9500, coordinates: { lat: 35.7833, lng: 3.2167 } },
      { name: 'العوينات', area: 130, population: 4800, coordinates: { lat: 35.8667, lng: 3.0833 } },
      { name: 'أولاد معرف', area: 140, population: 7600, coordinates: { lat: 35.8000, lng: 3.1167 } },
      { name: 'الكاف لخضر', area: 125, population: 4200, coordinates: { lat: 35.9167, lng: 3.1000 } },
    ],
  },
  {
    name: 'دائرة الشهبونية',
    coordinates: { lat: 35.6041, lng: 2.6023 },
    municipalities: [
      { name: 'الشهبونية', area: 250, population: 18000, coordinates: { lat: 35.6041, lng: 2.6023 } },
      { name: 'بوغزول', area: 450, population: 22000, coordinates: { lat: 35.7034, lng: 2.8521 } },
      { name: 'بوعيش', area: 200, population: 7200, coordinates: { lat: 35.6021, lng: 2.8012 } },
    ],
  },
  {
    name: 'دائرة عزيز',
    coordinates: { lat: 35.8167, lng: 2.4667 },
    municipalities: [
      { name: 'عزيز', area: 280, population: 16500, coordinates: { lat: 35.8167, lng: 2.4667 } },
      { name: 'أم الجليل', area: 150, population: 3400, coordinates: { lat: 35.8500, lng: 2.4000 } },
      { name: 'دراق', area: 190, population: 8100, coordinates: { lat: 35.9000, lng: 2.3000 } },
    ],
  },
  {
    name: 'دائرة أولاد عنتر',
    coordinates: { lat: 35.9667, lng: 2.5667 },
    municipalities: [
      { name: 'أولاد عنتر', area: 220, population: 6100, coordinates: { lat: 35.9667, lng: 2.5667 } },
      { name: 'بوغار', area: 145, population: 5900, coordinates: { lat: 35.9000, lng: 2.6000 } },
      { name: 'أولاد هلال', area: 180, population: 3800, coordinates: { lat: 35.9500, lng: 2.6500 } },
    ],
  },
];

export const INVESTMENT_DATA: InvestmentPoint[] = [
  {
    title: 'موقع لوجستي استراتيجي',
    description: [
      'يتوسط الطريق الوطني رقم 01 (طريق الوحدة الإفريقية).',
      'منطقة عبور حيوية بين الشمال والجنوب والهضاب.',
    ],
    iconName: 'Truck',
    category: 'logistics',
  },
  {
    title: 'أقطاب صناعية كبرى',
    description: [
      'الاستفادة المباشرة من مشروع المدينة الجديدة بوغزول.',
      'وفرة العقار الصناعي ومناطق النشاطات.',
    ],
    iconName: 'Factory',
    category: 'industry',
  },
  {
    title: 'فلاحة وسهوب',
    description: [
      'رائدة في إنتاج اللحوم الحمراء (طابع رعوي).',
      'زراعات استراتيجية (الحبوب، الأشجار المثمرة المقاومة للجفاف).',
    ],
    iconName: 'Wheat',
    category: 'agriculture',
  },
  {
    title: 'تحفيزات جبائية',
    description: [
      'الاستفادة من مزايا "مناطق الهضاب العليا".',
      'تخفيضات ضريبية وأسعار رمزية للامتياز العقاري.',
    ],
    iconName: 'Percent',
    category: 'industry',
  },
  {
    title: 'بنية تحتية',
    description: [
      'خطوط السكك الحديدية (الشمال-الجنوب / خط الهضاب).',
      'يد عاملة مؤهلة ومراكز تكوين مهني.',
    ],
    iconName: 'Train',
    category: 'logistics',
  },
];

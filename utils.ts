/**
 * Format population numbers in thousands (k format)
 */
export const formatPopulation = (population: number): string => {
  return `${(population / 1000).toFixed(1)}k`;
};

/**
 * Format area numbers
 */
export const formatArea = (area: number): string => {
  return `${area} كم²`;
};

export interface BaseCountryData {
  countryCode: string;
  name: string;
}

export interface Border {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null | Border[];
}

export interface CountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Border[];
}

export interface PopulationData {
  year: number;
  value: number;
}

export interface PopulationChartProps {
  country: string;
  populationCounts: PopulationData[];
}

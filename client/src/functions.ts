export const getAllCountries = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE}all-countries`);
  const data = await response.json();
  return data;
};

export const getCountryInfo = async (countryCode: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE}country-info?countryCode=${countryCode}`
  );
  const data = await response.json();
  return data;
};

export const getFlag = async (countryCode: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE}flag`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ countryCode: countryCode }),
  });
  const data = await response.json();
  return data.data.flag as string;
};

export const getPopulation = async (country: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE}population`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ country: country }),
  });
  const data = await response.json();
  return data.data.populationCounts as { year: number; value: number }[];
};

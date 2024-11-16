"use client";

import { getCountryInfo, getFlag, getPopulation } from "@/functions";
import { CountryInfo, PopulationData } from "@/interfaces";
import BorderItem from "@/ui/components/BorderItem";
import PopulationChart from "@/ui/components/Chart";
import ReturnButton from "@/ui/components/ReturnButton";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CountryPage() {
  const { countryId } = useParams();
  const [countryInfo, setCountryInfo] = useState<CountryInfo>();
  const [flag, setFlag] = useState<string | null>(null);
  const [population, setPopulation] = useState<PopulationData[]>([]);

  const chartData = {
    country: countryInfo?.commonName || "",
    populationCounts: population,
  };

  useEffect(() => {
    (async function () {
      const country = await getCountryInfo(countryId as string);
      setCountryInfo(country);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const flag = await getFlag(countryId as string);
      setFlag(flag);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      if (countryInfo) {
        const population = await getPopulation(
          countryInfo?.commonName.toLocaleLowerCase() as string
        );
        setPopulation(population);
      }
    })();
  }, [countryInfo]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ReturnButton />
      <header className="text-center mb-12">
        <div className="flex gap-2 justify-center">
          <h1 className="text-5xl font-semibold text-gray-800">
            {countryInfo?.commonName}
          </h1>
          {flag && <img src={flag} alt="flag" width={70} />}
        </div>
        <p className="text-xl text-gray-600 mt-2">
          {countryInfo?.officialName}
        </p>
        <p className="text-lg text-gray-500 mt-4">{countryInfo?.region}</p>
      </header>
      <section className="bg-white shadow-md rounded-lg p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Country Details
            </h2>
            <ul className="mt-4 space-y-2 text-lg text-gray-600">
              <li>
                <strong>Country Code:</strong> {countryInfo?.countryCode}
              </li>
              <li>
                <strong>Region:</strong> {countryInfo?.region}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Borders</h2>
            <ul className="mt-4 space-y-2 text-lg text-gray-600">
              {countryInfo?.borders.length === 0 ? (
                <li>No borders available</li>
              ) : (
                countryInfo?.borders.map((border) => (
                  <li key={border.countryCode}>
                    <BorderItem border={border} />
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </section>
      <PopulationChart data={chartData} />
    </div>
  );
}

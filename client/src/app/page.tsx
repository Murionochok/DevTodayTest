"use client";

import { getAllCountries } from "@/functions";
import { BaseCountryData } from "@/interfaces";
import CountryItem from "@/ui/components/CountryItem";
import SearchInput from "@/ui/components/SearchCountry";
import { useEffect, useState } from "react";

export default function Home() {
  const [countries, setCountries] = useState<BaseCountryData[]>([]);
  const [searchCountry, setSearchCountry] = useState("");

  const countriesWithSearch = countries.filter((country) =>
    searchCountry.length > 0
      ? country.name
          .toLocaleLowerCase()
          .includes(searchCountry.toLocaleLowerCase())
      : true
  );

  useEffect(() => {
    (async function () {
      const data = await getAllCountries();
      setCountries(data);
    })();
  }, []);

  return (
    <>
      <div className="flex justify-center py-4">
        <SearchInput query={searchCountry} setQuery={setSearchCountry} />
      </div>
      <div>
        {countriesWithSearch.map((country, id) => (
          <CountryItem
            key={id}
            name={country.name}
            countryCode={country.countryCode}
          />
        ))}
      </div>
    </>
  );
}

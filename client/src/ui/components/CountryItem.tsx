import { BaseCountryData } from "@/interfaces";
import Link from "next/link";

export default function CountryItem({ countryCode, name }: BaseCountryData) {
  return (
    <div className="bg-slate-300 my-4">
      <Link href={`/country/${countryCode}`}>
        <div className="w-full flex justify-start items-center p-4">
          Country: {name}
        </div>
      </Link>
    </div>
  );
}

import { Border } from "@/interfaces";
import Link from "next/link";

export default function BorderItem({ border }: { border: Border }) {
  return (
    <Link href={`/country/${border.countryCode}`}>
      <div className="flex items-center space-x-3">
        <span className="font-semibold">{border.commonName}</span>
        <span className="text-sm text-gray-500">({border.officialName})</span>
      </div>
      <p className="text-sm text-gray-400">{border.region}</p>
    </Link>
  );
}

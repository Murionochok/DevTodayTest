import React from "react";
import { Search } from "lucide-react";

function SearchInput({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (val: string) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex w-[300px] items-center border border-gray-300 rounded-md shadow-sm p-2 bg-white">
      <Search />
      <input
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={handleChange}
        className="w-full p-2 outline-none"
      />
    </div>
  );
}

export default SearchInput;

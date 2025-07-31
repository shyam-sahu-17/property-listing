import React, { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

export default function SearchBar() {
  const { search, setSearch } = useContext(PropertyContext);

  return (
    <input
      type="text"
      className="p-2 border w-full mb-4 dark:bg-gray-800"
      placeholder="Search by name or location..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

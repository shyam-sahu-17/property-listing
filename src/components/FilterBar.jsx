import React, { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

export default function FilterBar() {
  const { filter, setFilter } = useContext(PropertyContext);

  return (
    <div className="my-4">
      <label className="mr-2">Filter by Type:</label>
      <select
        className="p-1 border dark:bg-gray-800"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
        <option value="Villa">Villa</option>
      </select>
    </div>
  );
}

import React, { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

export default function PropertyCard({ property }) {
  const { setSelectedProperty } = useContext(PropertyContext);

  return (
    <div className="bg-white dark:bg-gray-800 rounded p-4 shadow">
      <img src={property.image} alt={property.name} className="w-full h-40 object-cover rounded mb-2" />
      <h2 className="text-lg font-semibold">{property.name}</h2>
      <p className="text-sm">{property.type} - {property.location}</p>
      <p className="text-sm font-bold">${property.price.toLocaleString()}</p>
      <p className="text-sm">{property.description.substring(0, 50)}...</p>
      <button
        onClick={() => setSelectedProperty(property)}
        className="mt-2 text-blue-500 underline"
      >
        View
      </button>
    </div>
  );
}

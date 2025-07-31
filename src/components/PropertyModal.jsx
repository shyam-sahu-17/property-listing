import React, { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

export default function PropertyModal() {
  const { selectedProperty, setSelectedProperty } = useContext(PropertyContext);

  if (!selectedProperty) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded w-11/12 md:w-1/2 shadow-xl relative">
        <button
          className="absolute top-2 right-4 text-xl"
          onClick={() => setSelectedProperty(null)}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-2">{selectedProperty.name}</h2>
        <img src={selectedProperty.image} alt="" className="w-full h-60 object-cover rounded mb-2" />
        <p><strong>Type:</strong> {selectedProperty.type}</p>
        <p><strong>Location:</strong> {selectedProperty.location}</p>
        <p><strong>Price:</strong> ${selectedProperty.price.toLocaleString()}</p>
        <p className="mt-2">{selectedProperty.description}</p>
      </div>
    </div>
  );
}

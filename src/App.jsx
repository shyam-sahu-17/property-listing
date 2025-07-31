import React, { useContext, useEffect, useState } from "react";
import propertiesData from "./data/mockProperties";
import { PropertyContextProvider, PropertyContext } from "./context/PropertyContext";
import { ThemeContextProvider, ThemeContext } from "./context/ThemeContext";
import PropertyCard from "./components/PropertyCard";
import PropertyModal from "./components/PropertyModal";
import AddPropertyForm from "./components/AddPropertyForm";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import DarkModeToggle from "./components/DarkModeToggle";

function AppContent() {
  const { filteredProperties, selectedProperty } = useContext(PropertyContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Property Dashboard</h1>
          <DarkModeToggle />
        </div>
        <SearchBar />
        <FilterBar />
        <AddPropertyForm />
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        {selectedProperty && <PropertyModal />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeContextProvider>
      <PropertyContextProvider>
        <AppContent />
      </PropertyContextProvider>
    </ThemeContextProvider>
  );
}

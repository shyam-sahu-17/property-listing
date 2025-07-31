import React, { createContext, useState } from "react";
import mockProperties from "../data/mockProperties";

export const PropertyContext = createContext();

export const PropertyContextProvider = ({ children }) => {
  const [properties, setProperties] = useState(mockProperties);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);

  const addProperty = (property) => {
    setProperties([...properties, { ...property, id: Date.now() }]);
  };

  const filteredProperties = properties.filter((prop) => {
    return (
      (filter === "" || prop.type === filter) &&
      (prop.name.toLowerCase().includes(search.toLowerCase()) ||
        prop.location.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <PropertyContext.Provider
      value={{
        properties,
        filteredProperties,
        addProperty,
        filter,
        setFilter,
        search,
        setSearch,
        selectedProperty,
        setSelectedProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

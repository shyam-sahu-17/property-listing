import React, { useState, useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

export default function AddPropertyForm() {
  const { addProperty } = useContext(PropertyContext);
  const [form, setForm] = useState({
    name: "",
    type: "Apartment",
    price: "",
    location: "",
    description: "",
    image: "/assets/property1.jpg", // default placeholder
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.location || !form.description) return;
    addProperty(form);
    setForm({
      name: "",
      type: "Apartment",
      price: "",
      location: "",
      description: "",
      image: "/assets/property1.jpg",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
      <h3 className="font-bold mb-2">Add New Property</h3>
      <div className="grid md:grid-cols-2 gap-2">
        <input placeholder="Name" className="p-2 border dark:bg-gray-900" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Price" className="p-2 border dark:bg-gray-900" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <input placeholder="Location" className="p-2 border dark:bg-gray-900" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
        <select className="p-2 border dark:bg-gray-900" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
        </select>
        <textarea placeholder="Description" className="p-2 border col-span-2 dark:bg-gray-900" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
      </div>
      <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded" type="submit">Add Property</button>
    </form>
  );
}

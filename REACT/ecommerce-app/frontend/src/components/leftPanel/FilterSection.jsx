import React, { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";

export function FilterSection() {
  const { filterValue,setFilterValue } = useContext(FilterContext);
  const categories = [
    'Laptops',
    'Gaming',
    'Accessories',
    'Peripherals',
    'Storage',
    'Components',
    'Monitors',
    'Printers',
  ];

  const handleCategoryClick = (category) => {
    setFilterValue(category);
    console.log(`Filter value changed to: ${filterValue}`);
  };

  const handleClearFilters = () => {
    setFilterValue('');
  };

  return (
    <div className="py-4">
      <div className="flex mb-4">
        {categories.map((category) => (
          <button key={category} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded mr-2" onClick={() => handleCategoryClick(category)}>{category}</button>
        ))}
      </div>
      <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded" onClick={handleClearFilters}>Clear Filters</button>
    </div>
  );
}
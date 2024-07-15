import { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterValue, setFilterValue] = useState('');

  return (
    <FilterContext.Provider value={{ filterValue, setFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};
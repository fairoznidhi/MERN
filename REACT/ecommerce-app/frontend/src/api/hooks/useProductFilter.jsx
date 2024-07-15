import { useState, useEffect } from "react";
import { filterProducts } from "../services";

export function useProductFilter(categories) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoadingFilter, setIsLoadingFilter] = useState(false);

  useEffect(() => {
    if (categories) {
      setIsLoadingFilter(true);
      filterProducts(categories)
        .then((data) => {
          setFilteredProducts(data);
          setIsLoadingFilter(false);
        });
    }
  }, [categories]);

  return {
    filteredProducts,
    isLoadingFilter,
  };
}
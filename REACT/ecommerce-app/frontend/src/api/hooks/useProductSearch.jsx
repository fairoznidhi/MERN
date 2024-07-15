import { useState } from "react";
import { useEffect } from "react";
import { searchProducts } from "../services";

export function useProductSearch(query) {
  const [results, setResults] = useState([]);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);

  useEffect(() => {
    if (query) {
      setIsLoadingSearch(true);
      searchProducts(query)
      .then((data) => {
        setResults(data);
        setIsLoadingSearch(false);
      });
    }
  }, [query]);

  return {
    results,
  };
}

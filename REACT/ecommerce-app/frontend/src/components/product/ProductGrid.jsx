import { useContext } from "react";
import { useProductFilter, useProducts, useProductSearch } from "../../api/hooks";
import { FilterContext, SearchContext } from "../../contexts";
import { ProductCard } from "./ProductCard";

const ProductsEmptyState = () => <h1>No products to display</h1>;

export const ProductGrid = () => {
  const { error, isLoading, products } = useProducts();
  const { searchValue, isLoadingSearch } = useContext(SearchContext);
  const { results = [] } = useProductSearch(searchValue);
  const { filterValue } = useContext(FilterContext);
  const { filteredProducts, isLoadingFilter } = useProductFilter(filterValue);

  if (error) {
    return <div className="text-red-600">{`Failed to load data :"(`}</div>;
  }
  if (isLoading || isLoadingFilter || isLoadingSearch) {
    return <div>Loading....</div>;
  }

  let finalProducts = products;

  if (results.length > 0) {
    finalProducts = results;
  }

  if (filterValue.length > 0) {
    console.log("filter value", filterValue);
    finalProducts = filteredProducts;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {finalProducts.length === 0 ? (
        <ProductsEmptyState />
      ) : (
        finalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};
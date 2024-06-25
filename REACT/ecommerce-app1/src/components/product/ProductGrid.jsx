import PropTypes from 'prop-types';

import {ProductCard} from "./ProductCard";
import './ProductGrid.css'


const ProductGrid=({products})=> {
  const renderProducts=()=>{
    if(!products.length){
      return <h1>No products to display.</h1>
    }
    return products.map(product=>(
      <ProductCard key={product.id} productName={product.name} productPrice={product.price}/>));
  }
    return (
      <div className="productGrid">{renderProducts()}</div>
    )
}

ProductCard.propTypes={
  products: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
  })
),
};

export {ProductGrid};

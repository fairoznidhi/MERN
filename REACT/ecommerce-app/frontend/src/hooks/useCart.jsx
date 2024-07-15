import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.find((cartItem) => cartItem.id === product.id)) {
      const existingItem = cart.find((cartItem) => cartItem.id === product.id);
      existingItem.quantity = (existingItem.quantity || 1) + 1;
      setCart([...cart]);
    } else {
      setCart((previousState) => [
        ...previousState,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((cartItem) => cartItem.id !== productId));
  };

  return { cart, addToCart, removeFromCart };
};

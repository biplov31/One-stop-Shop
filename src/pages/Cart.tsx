import { useContext } from "react";
import { CartContextType, CartContext, CartItemType } from "../contexts/CartContext";

export const Cart = () => {
  const context = useContext<CartContextType | null>(CartContext);
  const { cart } = context || {};

  return (
    <main>
      <h2>Your cart</h2>
      <div className="cart-items item-list">
        {cart && cart.length > 0 ? (
          cart.map((cartItem: CartItemType) => (
              <div key={cartItem.id} className="search-result individual-item">
                <img src={cartItem.image} alt={cartItem.title} />
                <strong>{cartItem.title}</strong>
                <span>${cartItem.price}</span>
              </div>
            
          ))
        ) : (
          <p className="page-info-text">Your cart is empty.</p>
        )}        
      </div>
    </main>
  )
}
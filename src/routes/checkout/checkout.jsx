import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItem } from "../../Components/CheckoutItem/CheckoutItem";
import "./checkout.styles.scss";

export const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((el) => (
        <CheckoutItem key={el.id} cartItem={el} />
      ))}
      <span className="total">Total: {cartTotal}€</span>
    </div>
  );
};

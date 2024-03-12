import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./CheckOutItem.styles.scss";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemfromCart, clearItemfromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {quantity > 1 ? (
          <div className="arrow" onClick={() => removeItemfromCart(cartItem)}>
            &#10094;
          </div>
        ) : null}
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}€</span>
      <span
        className="remove-button"
        onClick={() => clearItemfromCart(cartItem)}
      >
        &#10005;
      </span>
    </div>
  );
};
